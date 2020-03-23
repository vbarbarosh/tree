import tree_from_array from './tree_from_array';
import tree_walk_preorder2 from './tree_walk_preorder2';

/**
 * Find a place in a tree.
 *
 * @param nodes
 * @param target
 * @param after
 * @param shift
 * @return {i, parent_id}
 */
function tree_find(nodes, target, after, shift)
{
    let end = false;
    const retval = {i: 0, parent_id: null};
    tree_walk_preorder2({
        nodes: tree_from_array(nodes.map(function (node, i) {
            return {id: node.id, parent_id: node.parent_id, value: node, i};
        })),
        visit: function (ctx) {
            if (end) {
                retval.i = ctx.node.i;
                retval.parent_id = ctx.node.parent_id;
                return 'END';
            }
            if (ctx.node.id == target.id) {
                if (after) {
                    retval.i = ctx.node.i + 1;
                    retval.parent_id = ctx.node.parent_id;
                    end = true;
                }
                else {
                    retval.i = ctx.node.i;
                    retval.parent_id = ctx.node.parent_id;
                    return 'END';
                }
            }
        },
    });
    return retval;
}

export default tree_find;
