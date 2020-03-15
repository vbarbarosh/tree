import tree_walk_preorder2 from './tree_walk_preorder2';

function tree_print2(node)
{
    // Two conditions:
    // 1) Whether or not a node is the last one among its siblings
    // 2) Whether or not a node is the last one in a walking stack (or, whether or not a node is a last one in its branch)

    tree_walk_preorder2({
        node,
        visit: function (ctx) {
            let s = '';
            ctx.stack.forEach(function (node, stack_i) {
                if (!node.parent) {
                    return;
                }
                const sibling_i = node.parent.children.indexOf(node);
                // noinspection EqualityComparisonWithCoercionJS
                if (sibling_i == node.parent.children.length - 1) {
                    // noinspection EqualityComparisonWithCoercionJS
                    s += (stack_i == ctx.stack.length - 1) ? '└── ' : '    ';
                }
                else {
                    // noinspection EqualityComparisonWithCoercionJS
                    s += (stack_i == ctx.stack.length - 1) ? '├── ' : '│   ';
                }
            });
            console.log(`${s}${ctx.node.id}`);
        },
    });
}

export default tree_print2;
