import array_index from './array_index';
import tree_from_array from './tree_from_array';
import tree_map_orig from './tree_map_orig';
import tree_walk_preorder2 from './tree_walk_preorder2';

/**
 * Return all nodes with sub nodes presented both
 * in nodes and selection.
 *
 * Return nodes present in both sides (descendants
 * are counted).
 *
 * @param nodes
 * @param selection
 * @return {array}
 */
function tree_intersect(nodes, selection)
{
    const retval = [];
    const selection_map = array_index(selection, v => v.id);
    tree_walk_preorder2({
        nodes: tree_from_array(nodes.map(tree_map_orig)).roots,
        visit: function ({node}) {
            if (selection_map[node.parent_id]) {
                selection_map[node.id] = true;
            }
            if (selection_map[node.id]) {
                retval.push(node.orig);
            }
        },
    });
    return retval;
}

export default tree_intersect;
