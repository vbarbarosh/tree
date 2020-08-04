import cli from '@vbarbarosh/node-cli';
import roots_flatten from './roots_flatten';
import tree_from_array from './tree_from_array';
import tree_from_string from './tree_from_string';
import tree_move from './tree_move';
import tree_print2 from './tree_print2';
import tree_walk_preorder_rev from './tree_walk_preorder_rev';

// noinspection NonAsciiCharacters
const prefix4 = {
    '├': '├── ',
    '│': '│   ',
    '└': '└── ',
    ' ': '    ',
};

cli(main);

function main()
{
    const items = tree_flatten(tree_from_string(`
    foo
    bar
        bar1
        bar2
    baz
`));
    const ctx = {
        items,
        i: 4,
        parent_id: items[4].parent_id,
        shift: 1,
    };
    shift_right_downwards(ctx);
    tree_move(ctx.items, [items[4]], ctx.i, ctx.parent_id);
    shift_left_downwards(ctx);
    tree_move(ctx.items, [items[4]], ctx.i, ctx.parent_id);

    console.log(tree_print2(tree_from_array(items.map(v => ({id: v.id, parent_id: v.parent_id})))));
    console.log(tree_print3(tree_from_array(items.map(v => ({id: v.id, parent_id: v.parent_id})))));

//items.splice(0, 0, ...items.splice(2, 2));
//console.log(items);

    ctx.i = items.findIndex(v => v.id == 'bar1');
    ctx.parent_id = items[ctx.i].parent_id;
    ctx.shift = 1;
    shift_right_upwards(ctx);
    tree_move(ctx.items, items.filter(v => v.id == 'bar1'), ctx.i, ctx.parent_id);
    console.log(tree_print3(tree_from_array(items.map(v => ({id: v.id, parent_id: v.parent_id})))));

    ctx.i = items.findIndex(v => v.id == 'bar1');
    ctx.parent_id = items[ctx.i].parent_id;
    ctx.shift = -1;
    shift_left_upwards(ctx);
    tree_move(ctx.items, items.filter(v => v.id == 'bar1'), ctx.i, ctx.parent_id);
    console.log(tree_print3(tree_from_array(items.map(v => ({id: v.id, parent_id: v.parent_id})))));

    console.log(items);
}

function tree_print3({roots})
{
    return tree_walk_preorder_rev({
        retval: '',
        roots,
        visit: function (ctx) {
            ctx.retval += tree_walk_preorder_prefix(ctx).map(v => prefix4[v]).join('') + (ctx.node.title||ctx.node.id) + '\n';
        },
    });
}

function tree_walk_preorder_prefix(ctx)
{
    // Two conditions:
    // 1) a node is the last one among its siblings
    // 2) a node is a last one in its branch (a node is the last one in a walking stack)

    return ctx.stack.map(function (node, stack_i) {
        const siblings = node.parent ? node.parent.children : ctx.roots;
        const is_current = (stack_i == ctx.stack.length - 1);
        const is_first_sibling = (node === siblings[0]);
        if (is_first_sibling) {
            return is_current ? '└' : ' ';
        }
        else {
            return is_current ? '├' : '│';
        }
    });
}

// Узлы отрисовываются сверху вниз.
// Сделать следующим братом своего отца. (Только для последнего
// ребенка.)
// 1. Убедиться, что узел является последним ребенком
// 2. Определить положение родителя
// 3. Встать сразу за ним
function shift_left_downwards(ctx)
{
    let {items, i, parent_id, shift} = ctx;
    const end = items.length;

    while (shift++ < 0) {
        for (let j = i; ++j < end; ) {
            if (items[j].parent_id == parent_id) {
                return;
            }
        }
        let item_not_found = true;
        for (let j = 0; j < end; ++j) {
            if (items[j].id == parent_id) {
                parent_id = items[j].parent_id;
                if (i < j) {
                    i = j + 1;
                }
                ctx.i = i;
                ctx.parent_id = parent_id;
                item_not_found = false;
                break;
            }

        }
        if (item_not_found) {
            break;
        }
    }
}

// Узлы отрисовываются сверху вниз.
// Сделать последним ребенком предыдущего брата
// 1. Найти предыдущего брата
// 2. Найти его последнего потомка
function shift_right_downwards(ctx)
{
    let {items, i, parent_id, shift} = ctx;

    while (shift-- > 0) {
        let prev_sibl_not_found = true;
        for (let j = i; --j >= 0; ) {
            if (items[j].parent_id == parent_id) {
                parent_id = items[j].id;
                for (let k = items.length; --k >= 0; ) {
                    if (items[k].parent_id == parent_id) {
                        if (i < k) {
                            i = k + 1;
                        }
                        break;
                    }
                }
                ctx.i = i;
                ctx.parent_id = parent_id;
                prev_sibl_not_found = false;
                break;
            }
        }
        if (prev_sibl_not_found) {
            break;
        }
    }
}

// Узлы отрисовываются снизу вверх.
// Сделать предыдущим братом своего отца. (Только для первого потомка).
// 1. Убедиться, что это первый элемент
// 2. Определить положение своего отца
// 3. Встать перед ним
function shift_left_upwards(ctx)
{
    let {items, i, parent_id, shift} = ctx;
    const end = items.length;

    while (shift++ < 0) {
        for (let j = i; j-- > 0; ) {
            if (items[j].parent_id == parent_id) {
                return;
            }
        }
        let parent_not_found = true;
        for (let j = 0; j < end; ++j) {
            if (items[j].id == parent_id) {
                parent_id = items[j].parent_id;
                if (i > j) {
                    i = j;
                }
                ctx.i = i;
                ctx.parent_id = parent_id;
                parent_not_found = false;
                break;
            }
        }
        if (parent_not_found) {
            console.log('parent_not_found');
            break;
        }
    }
}

// Узлы отрисовываются снизу вверх.
// Сделать первым ребенком следующего брата
// 1. Найти следующего брата
// 2. Найти его первого потомка
// 3. Встать перед ним
function shift_right_upwards(ctx)
{
    let {items, i, parent_id, shift} = ctx;
    const end = items.length;

    while (shift-- > 0) {
        let next_sibl_not_found = true;
        for (let j = i; ++j < end; ) {
            if (items[j].parent_id == parent_id) {
                parent_id = items[j].id;
                for (let k = 0; k < end; ++k) {
                    if (items[k].parent_id == parent_id) {
                        if (i > k) {
                            i = k - 1;
                        }
                        break;
                    }
                }
                ctx.i = i + 1;
                ctx.parent_id = parent_id;
                next_sibl_not_found = false;
                break;
            }
        }
        if (next_sibl_not_found) {
            break;
        }
    }
}

