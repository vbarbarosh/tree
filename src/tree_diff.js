import array_index from './array_index';
import tree_from_array from './tree_from_array';
import tree_map_orig from './tree_map_orig';
import tree_walk_preorder from './tree_walk_preorder';

/**
 * Return nodes not presented in selection (descendants are counted).
 *
 * @param nodes
 * @param selection
 * @return {array} An array of removed nodes.
 */
function tree_diff(nodes, selection)
{
    const keep = [];
    const selection_map = array_index(selection, v => v.id);
    tree_walk_preorder({
        nodes: tree_from_array(nodes.map(tree_map_orig)).roots,
        visit: function ({node}) {
            if (selection_map[node.parent_id]) {
                selection_map[node.id] = true;
            }
            if (!selection_map[node.id]) {
                keep.push(node.orig);
            }
        },
    });
    return keep;
}

export default tree_diff;
