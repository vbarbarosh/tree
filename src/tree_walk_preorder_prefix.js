/**
 * Render an array of strings representing position of a node on each level.
 * Used for printing tree.
 *
 * @param ctx
 * @returns {*}
 */
function tree_walk_preorder_prefix(ctx)
{
    // Two conditions:
    // 1) a node is the last one among its siblings
    // 2) a node is a last one in its branch (a node is the last one in a walking stack)

    return ctx.stack.map(function (node, stack_i) {
        const siblings = node.parent ? node.parent.children : ctx.roots;
        const is_current = (stack_i == ctx.stack.length - 1);
        const is_last_sibling = (node === siblings[siblings.length - 1]);
        if (is_last_sibling) {
            return is_current ? '└' : ' ';
        }
        else {
            return is_current ? '├' : '│';
        }
    });
}

export default tree_walk_preorder_prefix;
