import tree_find_shifts from './tree_find_shifts';
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
    let prev_id = null;
    const retval = {i: 0, parent_id: null};
    const roots = tree_from_array(nodes.map(function (node, i) {
        return {id: node.id, parent_id: node.parent_id, value: node, i};
    }));
    tree_walk_preorder2({
        nodes: roots,
        visit: function (ctx) {
            if (end) {
                retval.i = ctx.node.i;
                if (prev_id == ctx.node.parent_id) {
                    retval.parent_id = ctx.node.parent_id;
                }
                return 'END';
            }
            if (ctx.node.id == target.id) {
                prev_id = ctx.node.id;
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

    if (shift > 0) {
        const tmp = tree_find_shifts(nodes, retval);
        return tmp.shift_right[Math.min(shift, tmp.shift_right.length)-1]||retval;
    }
    if (shift < 0) {
        const tmp = tree_find_shifts(nodes, retval);
        return tmp.shift_left[Math.min(-shift, tmp.shift_left.length)-1]||retval;
    }

    return retval;

    // function move_right() {
    //     // 1. Find previous sibling
    //     // 2. Find its last child
    //     // 3. parent_id=<id of prev sibling>
    //     // 4. i=<after last child, or after prev sibling>
    // }
    //
    // function move_left() {
    //     // 1. Is it last child in its parent?
    //     // 2. If not, done.
    //     // 4. i=<after last child of grandparent>
    //     // 3. parent_id=<parent.parent_id>
    // }
}

export default tree_find;
