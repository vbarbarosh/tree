import tree_move from './tree_move';
import tree_from_array from './tree_from_array';
import tree_print2 from './tree_print2';
import tree_from_string2 from './tree_from_string2';
import tree_flatten from './tree_flatten';
import readline from 'readline';
import Promise from 'bluebird';
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
                case 'up':
                    move_up2(nodes, nodes.find(v => v === selection));
                    break;
                case 'down':
                    move_down2(nodes, nodes.find(v => v === selection));
                    break;
                case 'left':
                    move_left(nodes, nodes.find(v => v === selection));
                    break;
                case 'right':
                    move_right(nodes, nodes.find(v => v === selection));
                    break;
                }
                break;
            }

            print(nodes, selection);
        });
    });

    move_right(nodes, nodes.find(v => v.text == 'z'));
    print(nodes);
    move_right(nodes, nodes.find(v => v.text == 'z'));
    print(nodes);
    move_right(nodes, nodes.find(v => v.text == 'z'));
    print(nodes);
    nodes.unshift(nodes.pop());
    print(nodes);

    console.log('----------------');

    move_left(nodes, nodes.find(v => v.text == 'z'));
    print(nodes);
    move_left(nodes, nodes.find(v => v.text == 'z'));
    print(nodes);
    move_left(nodes, nodes.find(v => v.text == 'z'));
    print(nodes);
    move_left(nodes, nodes.find(v => v.text == 'z'));
    print(nodes);

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

// Move node up in its branch
function move_up(nodes, target)
{
    const i = nodes.indexOf(target);
    for (let j = i; --j >= 0;) {
        if (nodes[j].parent_id === target.parent_id) {
            nodes.splice(i, 1);
            nodes.splice(j, 0, target);
            break;
        }
    }
}

// Move node up
function move_up2(nodes, target)
{
    const preorder = [];
    tree_walk_preorder2({
        nodes: tree_from_array(JSON.parse(JSON.stringify(nodes))),
        visit: function (ctx) {
            preorder.push(ctx.node);
        },
    });

    const p_i = preorder.findIndex(v => v.id === target.id);
    if (p_i > 0) {
        const prev_id = preorder[p_i - 1].id;
        const j = nodes.findIndex(v => v.id === prev_id);
        if (j >= 0) {
            target.parent_id = preorder[p_i - 1].parent_id;
            const i = nodes.indexOf(target);
            nodes.splice(i, 1);
            nodes.splice(j + (i < j), 0, target);
        }
    }

    // const i = nodes.indexOf(target);
    // for (let j = i; --j >= 0; ) {
    //     if (nodes[j].parent_id === target.parent_id) {
    //         nodes.splice(i, 1);
    //         nodes.splice(j, 0, target);
    //         return;
    //     }
    // }
    // const ii = nodes.findIndex(v => v.id === target.parent_id);
    // if (ii == -1) {
    //     return;
    // }
    // target.parent_id = nodes[ii].parent_id;
    // nodes.splice(i, 1);
    // nodes.splice(ii, 0, target);
}

// Move node down
function move_down2(nodes, target)
{
    const preorder = [];
    tree_walk_preorder2({
        nodes: tree_from_array(JSON.parse(JSON.stringify(nodes))),
        visit: function (ctx) {
            preorder.push(ctx.node);
        },
    });

    const p_i = preorder.findIndex(v => v.id === target.id);
    if (p_i >= 0 && p_i < preorder.length - 1) {
        const next_id = preorder[p_i + 1].id;
        const j = nodes.findIndex(v => v.id === next_id);
        if (j >= 0) {
            if (preorder[p_i + 2] && preorder[p_i + 2].parent_id == preorder[p_i + 1].id) {
                target.parent_id = preorder[p_i + 1].id || null;
                const i = nodes.indexOf(target);
                nodes.splice(i, 1);
                nodes.unshift(target);
            } else {
                target.parent_id = preorder[p_i + 1].parent_id || null;
                const i = nodes.indexOf(target);
                nodes.splice(i, 1);
                nodes.push(target);
            }
        }
    }

    // const i = nodes.indexOf(target);
    // for (let j = i; --j >= 0; ) {
    //     if (nodes[j].parent_id === target.parent_id) {
    //         nodes.splice(i, 1);
    //         nodes.splice(j, 0, target);
    //         return;
    //     }
    // }
    // const ii = nodes.findIndex(v => v.id === target.parent_id);
    // if (ii == -1) {
    //     return;
    // }
    // target.parent_id = nodes[ii].parent_id;
    // nodes.splice(i, 1);
    // nodes.splice(ii, 0, target);
}

// Move node down in its branch
function move_down(nodes, target)
{
    const i = nodes.indexOf(target);
    for (let j = i, end = nodes.length; ++j < end; ) {
        if (nodes[j].parent_id === target.parent_id) {
            nodes.splice(j + 1, 0, target);
            nodes.splice(i, 1);
            break;
        }
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

// tree_flatten(tree_from_string(tree_random()).children))
const valid = [
    [{"id":"root","parent_id":null},{"id":"eius","parent_id":"root"},{"id":"autem","parent_id":"eius"},{"id":"dolore","parent_id":"autem"},{"id":"blanditiis","parent_id":"autem"},{"id":"aliquid","parent_id":"autem"},{"id":"voluptatem","parent_id":"eius"},{"id":"tenetur","parent_id":"voluptatem"},{"id":"sint","parent_id":"voluptatem"},{"id":"ut","parent_id":"voluptatem"},{"id":"amet","parent_id":"eius"},{"id":"fugit","parent_id":"amet"},{"id":"unde","parent_id":"amet"},{"id":"quis","parent_id":"amet"},{"id":"aut","parent_id":"amet"},{"id":"architecto","parent_id":"amet"},{"id":"accusantium","parent_id":"root"},{"id":"eos","parent_id":"accusantium"},{"id":"vero","parent_id":"eos"},{"id":"voluptate","parent_id":"eos"},{"id":"veniam","parent_id":"eos"},{"id":"illo","parent_id":"eos"},{"id":"omnis","parent_id":"eos"},{"id":"consequatur","parent_id":"accusantium"},{"id":"quo","parent_id":"consequatur"},{"id":"sapiente","parent_id":"accusantium"},{"id":"illum","parent_id":"sapiente"},{"id":"reprehenderit","parent_id":"sapiente"},{"id":"iste","parent_id":"accusantium"},{"id":"officia","parent_id":"iste"},{"id":"natus","parent_id":"iste"},{"id":"quas","parent_id":"iste"},{"id":"sit","parent_id":"iste"},{"id":"qui","parent_id":"root"},{"id":"neque","parent_id":"qui"},{"id":"rerum","parent_id":"neque"},{"id":"fugiat","parent_id":"neque"},{"id":"enim","parent_id":"neque"},{"id":"in","parent_id":"neque"},{"id":"dolorem","parent_id":"qui"},{"id":"voluptas","parent_id":"dolorem"},{"id":"possimus","parent_id":"qui"},{"id":"cumque","parent_id":"possimus"},{"id":"facilis","parent_id":"possimus"},{"id":"asperiores","parent_id":"possimus"},{"id":"impedit","parent_id":"possimus"},{"id":"rem","parent_id":"qui"},{"id":"dicta","parent_id":"rem"},{"id":"et","parent_id":"rem"},{"id":"inventore","parent_id":"rem"},{"id":"vel","parent_id":"rem"},{"id":"voluptatum","parent_id":"root"},{"id":"laboriosam","parent_id":"voluptatum"},{"id":"magni","parent_id":"laboriosam"},{"id":"aspernatur","parent_id":"laboriosam"},{"id":"alias","parent_id":"laboriosam"},{"id":"dolor","parent_id":"laboriosam"},{"id":"beatae","parent_id":"voluptatum"},{"id":"sunt","parent_id":"beatae"},{"id":"ipsa","parent_id":"voluptatum"},{"id":"animi","parent_id":"ipsa"},{"id":"quia","parent_id":"root"},{"id":"laudantium","parent_id":"quia"},{"id":"sed","parent_id":"laudantium"},{"id":"est","parent_id":"laudantium"},{"id":"reiciendis","parent_id":"laudantium"},{"id":"repudiandae","parent_id":"laudantium"},{"id":"perspiciatis","parent_id":"quia"},{"id":"nisi","parent_id":"perspiciatis"}],
    [{"id":"root","parent_id":null},{"id":"eum","parent_id":"root"},{"id":"est","parent_id":"eum"},{"id":"et","parent_id":"est"},{"id":"deserunt","parent_id":"est"},{"id":"rerum","parent_id":"est"},{"id":"quod","parent_id":"eum"},{"id":"iste","parent_id":"quod"},{"id":"labore","parent_id":"eum"},{"id":"ducimus","parent_id":"labore"},{"id":"aut","parent_id":"eum"},{"id":"autem","parent_id":"aut"},{"id":"soluta","parent_id":"aut"},{"id":"atque","parent_id":"eum"},{"id":"dolorum","parent_id":"atque"},{"id":"delectus","parent_id":"atque"},{"id":"voluptas","parent_id":"atque"},{"id":"commodi","parent_id":"atque"},{"id":"quia","parent_id":"atque"},{"id":"eaque","parent_id":"root"},{"id":"ratione","parent_id":"eaque"},{"id":"repellendus","parent_id":"ratione"},{"id":"quasi","parent_id":"ratione"},{"id":"consequatur","parent_id":"ratione"},{"id":"voluptatem","parent_id":"ratione"},{"id":"itaque","parent_id":"root"},{"id":"omnis","parent_id":"itaque"},{"id":"quam","parent_id":"omnis"},{"id":"nisi","parent_id":"omnis"},{"id":"asperiores","parent_id":"omnis"},{"id":"magnam","parent_id":"omnis"},{"id":"qui","parent_id":"itaque"},{"id":"aliquid","parent_id":"qui"},{"id":"dolorem","parent_id":"qui"},{"id":"id","parent_id":"qui"},{"id":"iure","parent_id":"qui"},{"id":"ullam","parent_id":"qui"},{"id":"eos","parent_id":"itaque"},{"id":"quaerat","parent_id":"eos"},{"id":"velit","parent_id":"itaque"},{"id":"hic","parent_id":"velit"},{"id":"debitis","parent_id":"velit"},{"id":"odit","parent_id":"velit"},{"id":"in","parent_id":"velit"},{"id":"fugit","parent_id":"velit"},{"id":"iusto","parent_id":"root"},{"id":"fuga","parent_id":"iusto"},{"id":"numquam","parent_id":"fuga"},{"id":"quo","parent_id":"fuga"},{"id":"facilis","parent_id":"fuga"},{"id":"incidunt","parent_id":"fuga"},{"id":"cumque","parent_id":"root"},{"id":"sed","parent_id":"cumque"},{"id":"similique","parent_id":"sed"},{"id":"deleniti","parent_id":"sed"},{"id":"nesciunt","parent_id":"sed"},{"id":"explicabo","parent_id":"cumque"},{"id":"non","parent_id":"explicabo"},{"id":"expedita","parent_id":"explicabo"},{"id":"dolores","parent_id":"explicabo"},{"id":"sint","parent_id":"explicabo"},{"id":"accusamus","parent_id":"cumque"},{"id":"natus","parent_id":"accusamus"},{"id":"impedit","parent_id":"accusamus"},{"id":"molestias","parent_id":"accusamus"},{"id":"sequi","parent_id":"accusamus"},{"id":"ut","parent_id":"cumque"},{"id":"aliquam","parent_id":"ut"},{"id":"esse","parent_id":"ut"},{"id":"quae","parent_id":"ut"},{"id":"nihil","parent_id":"ut"},{"id":"officiis","parent_id":"cumque"},{"id":"ipsum","parent_id":"officiis"},{"id":"sapiente","parent_id":"officiis"},{"id":"temporibus","parent_id":"officiis"}],
    [{"id":"root","parent_id":null},{"id":"quam","parent_id":"root"},{"id":"nemo","parent_id":"quam"},{"id":"voluptate","parent_id":"nemo"},{"id":"numquam","parent_id":"nemo"},{"id":"qui","parent_id":"nemo"}],
    [{"id":"root","parent_id":null},{"id":"quam","parent_id":"root"},{"id":"quam2","parent_id":"root"},{"id":"nemo","parent_id":"quam"},{"id":"voluptate","parent_id":"nemo"},{"id":"numquam","parent_id":"nemo"},{"id":"qui","parent_id":"nemo"}],
];
Object.freeze(valid);

const circular = [
    [{id: 1, parent_id: 1}],
    [{id: 1, parent_id: 2}, {id: 2, parent_id: 1}],
    [{id: 1}, {id: 2, parent_id: 2}],
    [{id: 1}, {id: 2, parent_id: 3}, {id: 3, parent_id: 2}],
    [{id: 1}, {id: 2, parent_id: 3}, {id: 3, parent_id: 4}, {id: 4, parent_id: 2}],
    [{id: 1}, {id: 2, parent_id: 3}, {id: 3, parent_id: 4}, {id: 4, parent_id: 5}, {id: 5, parent_id: 2}],
];
Object.freeze(circular);

const tree1 = [
    {id: 1, parent_id: null},
    {id: 2, parent_id: null},
    {id: 3, parent_id: null}
];

function tree(text)
{
    const ret = tree_flatten(tree_from_string2(text));
    const ids = {};
    ret.forEach(v => ids[v.id] = v.text);
    ret.forEach(v => v.id = ids[v.id]);
    ret.forEach(v => v.parent_id = ids[v.parent_id]||null);
    return ret;
}


function fcmp_nodes_id(a, b)
{
    return String(a.id).localeCompare(b.id);
}

function obj_clone(object)
{
    return JSON.parse(JSON.stringify(object));
}

// https://stackoverflow.com/a/37580979/1478566
function array_permutations(items)
{
    const end = items.length;
    const result = [items.slice()];
    const c = new Array(end).fill(0);
    let i = 1;

    while (i < end) {
        if (c[i] < i) {
            const k = i % 2 && c[i];
            const p = items[i];
            items[i] = items[k];
            items[k] = p;
            ++c[i];
            i = 1;
            result.push(items.slice());
        }
        else {
            c[i] = 0;
            ++i;
        }
    }
    return result;
}
