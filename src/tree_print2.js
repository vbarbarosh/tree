import tree_walk_preorder from './tree_walk_preorder';

function tree_print2(roots)
{
    // Two conditions:
    // 1) Whether or not a node is the last one among its siblings
    // 2) Whether or not a node is the last one in a walking stack (or, whether or not a node is a last one in its branch)

    let retval = '';
    tree_walk_preorder({
        roots,
        visit: function (ctx) {
            let s = '';
            ctx.stack.forEach(function (node, stack_i) {
                const siblings = node.parent ? node.parent.children : roots;
                // noinspection EqualityComparisonWithCoercionJS
                if (node === siblings[siblings.length - 1]) {
                    // noinspection EqualityComparisonWithCoercionJS
                    s += (stack_i == ctx.stack.length - 1) ? '└── ' : '    ';
                }
                else {
                    // noinspection EqualityComparisonWithCoercionJS
                    s += (stack_i == ctx.stack.length - 1) ? '├── ' : '│   ';
                }
            });
            retval += `${s}${ctx.node.id}\n`;
        },
    });
    return retval;
}

export default tree_print2;
