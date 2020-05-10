import array_index from './array_index.js';
import tree_from_array from './tree_from_array.js';
import tree_map_orig from './tree_map_orig.js';
import tree_walk_preorder from './tree_walk_preorder.js';

/**
 * Return all descendants of selected nodes
 *
 * NOTE In order to get all descendants with its parent use `tree_intersect(nodes, selection)`
 *
 * @param nodes
 * @param selection
 */
function tree_descendants(nodes, selection)
{
    let dump = 0;
    const descendants = [];
    const selection_map = array_index(selection, v => v.id);
    tree_walk_preorder({
        roots: tree_from_array(nodes.map(tree_map_orig)).roots,
        leave: function ({node}) {
            if (selection_map[node.id]) {
                dump--;
            }
        },
        visit: function ({node}) {
            if (dump) {
                descendants.push(node.orig);
            }
            if (selection_map[node.id]) {
                dump++;
            }
        },
    });
    return descendants;
}

export default tree_descendants;
