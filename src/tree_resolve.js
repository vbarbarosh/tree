import array_index from './array_index';
import tree_find_shifts from './tree_find_shifts';
import tree_from_array from './tree_from_array';
import tree_walk_preorder from './tree_walk_preorder';

/**
 * Like `path.resolve`. Given a starting point and
 * an offset you'll get target point.
 *
 * @param nodes
 * @param start
 * @param one_down
 * @param horizontal_shift
 * @return {{i, parent_id}}
 *
 * @deprecated Deprecated in favor of tree_shift
 */
function tree_resolve(nodes, start, one_down, horizontal_shift)
{
    let end = false;
    let prev_id = null;
    const retval = {i: 0, parent_id: null};
    const nodes_map = array_index(nodes, v => v.id);
    const {roots} = tree_from_array(nodes.map(function (node, i) {
        return {id: node.id, parent_id: nodes_map[node.parent_id] ? node.parent_id : null, value: node, i};
    }));
    tree_walk_preorder({
        nodes: roots,
        visit: function (ctx) {
            if (end) {
                retval.i = ctx.node.i;
                if (prev_id == ctx.node.parent_id) {
                    retval.parent_id = ctx.node.parent_id;
                }
                return 'END';
            }
            if (ctx.node.id == start.id) {
                prev_id = ctx.node.id;
                if (one_down) {
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

    if (horizontal_shift > 0) {
        const tmp = tree_find_shifts(nodes, retval);
        return tmp.shift_right[Math.min(horizontal_shift, tmp.shift_right.length)-1]||retval;
    }
    if (horizontal_shift < 0) {
        const tmp = tree_find_shifts(nodes, retval);
        return tmp.shift_left[Math.min(-horizontal_shift, tmp.shift_left.length)-1]||retval;
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

export default tree_resolve;
