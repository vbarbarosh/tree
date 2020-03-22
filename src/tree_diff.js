import array_index from './array_index';
import tree_from_array from './tree_from_array';
import tree_walk_preorder2 from './tree_walk_preorder2';

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
    tree_walk_preorder2({
        nodes: tree_from_array(nodes.map(function (node) {
            return {id: node.id, parent_id: node.parent_id, value: node};
        })),
        visit: function ({node}) {
            if (selection_map[node.parent_id]) {
                selection_map[node.id] = true;
            }
            if (!selection_map[node.id]) {
                keep.push(node.value);
            }
        },
    });
    return keep;
}

export default tree_diff;
