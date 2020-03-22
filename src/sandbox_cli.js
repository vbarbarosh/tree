import Promise from 'bluebird';
import readline from 'readline';
import tree_flatten from './tree_flatten';
import tree_from_array from './tree_from_array';
import tree_from_string2 from './tree_from_string2';
import tree_move from './tree_move';
import tree_print2 from './tree_print2';
import tree_walk_preorder2 from './tree_walk_preorder2';

// Case when node refers to undefined parent_id

function print(items, selection)
{
    console.log(preorder(items));
    let s = tree_print2(tree_from_array(JSON.parse(JSON.stringify(items))));
    s = s.split('\n').map(function (line) {
        if (line.endsWith(`─ ${selection.text}`)) {
            return `\x1b[32m${line}<<<<\x1b[0m`;
        }
        return line;
    });
    console.log(s.join('\n'));
}

cli(main);

function preorder(items)
{
    let retval = [];
    let parents = [];
    tree_walk_preorder2({
        nodes: tree_from_array(JSON.parse(JSON.stringify(items))),
        visit: function (ctx) {
            retval.push(ctx.node.id);
            parents.push((ctx.node.parent_id === undefined)
                ? 'U'
                : (ctx.node.parent_id === null)
                    ? 'N'
                    : ctx.node.parent_id);
        },
    });
    return parents.join(',') + '\n' + retval.join(',');
}

async function main()
{
    const nodes = tree(`
    x
    group images
        image bg
        image logo
    group texts
        text safari Safari road
        text savannah African savannah
           XXX
              yyy
                 zzz
    group buttons
        button Book Now
    a
      b
        c
    z
`);
    let selection = nodes[0];
    let mode = 'select'; // move

    console.log('\x1bc');
    console.log(`mode: ${mode}`);
    console.log();
    print(nodes, selection);

// https://thisdavej.com/making-interactive-node-js-console-apps-that-listen-for-keypress-events/
// https://stackoverflow.com/a/5059872/1478566
// https://github.com/nodejs/node/issues/6626
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    await new Promise(function (resolve) {
        process.stdin.on('keypress', function (str, key) {
            console.log('\x1bc');
            console.log(`mode: ${mode}`);
            console.log();

            switch (key.name) {
            case 'return':
            case 'space':
                mode = (mode == 'select') ? 'move' : 'select';
                print(nodes, selection);
                return;
            case 'q':
            case 'esc':
                // https://github.com/nodejs/node/issues/6626#issuecomment-217614102
                process.kill(process.pid, 'SIGINT');
                return;
            case 'c':
                if (key.ctrl) {
                    // https://github.com/nodejs/node/issues/6626#issuecomment-217614102
                    process.kill(process.pid, 'SIGINT');
                }
                return;
            }

            let tmp,tmp2;
            switch (mode) {
            case 'select':
                switch (key.name) {
                case 'k':
                case 'up':
                    tmp = tree_walk_preorder2({
                        nodes: tree_from_array(JSON.parse(JSON.stringify(nodes))),
                        retval: [],
                        visit: function (ctx) {
                            ctx.retval.push(ctx.node);
                        },
                    });
                    tmp2 = (tmp[tmp.findIndex(v => v.id == selection.id)-1]||{}).id;
                    selection = nodes[nodes.findIndex(v => v.id == tmp2)]||selection;
                    break;
                case 'j':
                case 'down':
                    tmp = tree_walk_preorder2({
                        nodes: tree_from_array(JSON.parse(JSON.stringify(nodes))),
                        retval: [],
                        visit: function (ctx) {
                            ctx.retval.push(ctx.node);
                        },
                    });
                    tmp2 = (tmp[tmp.findIndex(v => v.id == selection.id)+1]||{}).id;
                    selection = nodes[nodes.findIndex(v => v.id == tmp2)]||selection;
                    break;
                }
                break;
            case 'move':
                switch (key.name) {
                case 'k':
                case 'up':
                    move_up2(nodes, nodes.find(v => v === selection));
                    break;
                case 'j':
                case 'down':
                    move_down2(nodes, nodes.find(v => v === selection));
                    break;
                case 'h':
                case 'left':
                    move_left(nodes, nodes.find(v => v === selection));
                    break;
                case 'l':
                case 'right':
                    move_right(nodes, nodes.find(v => v === selection));
                    break;
                }
                break;
            }

            print(nodes, selection);
        });
    });
}

// https://stackoverflow.com/a/57241059/1478566
function cli(main)
{
    // https://stackoverflow.com/a/46916601/1478566
    return Promise.method(main).call().catch(panic).finally(clearInterval.bind(null, setInterval(v => v, 1E9)));
}

function panic(error)
{
    console.error(error);
    process.exit(1);
}

// Move node up
function move_up2(nodes, target)
{
    let t = null;
    let prev = null;
    tree_walk_preorder2({
        nodes: tree_from_array(nodes.map(function ({id, parent_id}, i) {
            return {id, parent_id, i};
        })),
        visit: function (ctx) {
            if (ctx.node.id == target.id) {
                t = ctx.node;
                return 'END';
            }
            prev = ctx.node;
        },
    });

    if (prev) {
        target.parent_id = prev.parent_id;
        nodes.splice(prev.i, 0, target);
        nodes.splice(t.i+(prev.i<t.i), 1);
    }
}

// Move node down
function move_down2(nodes, target)
{
    let t = null;
    let next = null;
    let nextnext = null;
    tree_walk_preorder2({
        nodes: tree_from_array(nodes.map(function ({id, parent_id}, i) {
            return {id, parent_id, i};
        })),
        visit: function (ctx) {
            if (ctx.node.id == target.id) {
                t = ctx.node;
                return;
            }
            if (t && !next) {
                next = ctx.node;
                return;
            }
            if (t && next) {
                nextnext = ctx.node;
                return 'END';
            }
        },
    });

    if (nextnext) {
        target.parent_id = nextnext.parent_id;
        nodes.splice(nextnext.i, 0, target);
        nodes.splice(t.i+(nextnext.i<t.i), 1);
    }
    else if (next) {
        target.parent_id = next.parent_id;
        nodes.splice(t.i, 1);
        nodes.push(target);
    }
}

// Move node left in its subtree
function move_left(nodes, target)
{
    const end = nodes.length;
    const i = nodes.indexOf(target);
    if (i == -1) {
        return;
    }
    // Find our next sibling
    console.log(i, 'Found');
    for (let j = i; ++j < end; ) {
        if (nodes[j].parent_id === target.parent_id) {
            // Middle nodes cannot be moved left
            console.log(i, j, nodes[j].id, 'Middle nodes cannot be moved left');
            return;
        }
    }
    // Find next sibling of our parent
    // target is a last one among its siblings (it can be moved left)
    const ii = nodes.findIndex(v => v.id === target.parent_id);
    if (ii == -1) {
        return;
    }
    target.parent_id = nodes[ii].parent_id;
    nodes.splice(i, 1);
    nodes.splice(ii + (ii < i), 0, target);
}

function move_right(nodes, target)
{
    const i = nodes.indexOf(target);
    for (let j = i; --j >= 0; ) {
        if (nodes[j].parent_id === target.parent_id) {
            const prev = nodes[j];
            nodes.splice(i, 1);
            nodes.push(target);
            target.parent_id = prev.id;
            break;
        }
    }
}

function tree(text)
{
    const ret = tree_flatten(tree_from_string2(text));
    const ids = {};
    ret.forEach(v => ids[v.id] = v.text);
    ret.forEach(v => v.id = ids[v.id]);
    ret.forEach(v => v.parent_id = ids[v.parent_id]||null);
    return ret;
}
