import array_index from './array_index';
import tree_from_array from './tree_from_array';
import tree_walk_preorder2 from './tree_walk_preorder2';

/**
 * Return all nodes with sub nodes presented both
 * in nodes and selection.
 *
 * XXX Consider name tree_intersection
 *
 * @param nodes
 * @param selection
 * @return {array}
 */
function tree_select(nodes, selection)
{
    const retval = [];
    const selection_map = array_index(selection, v => v.id);
    tree_walk_preorder2({
        nodes: tree_from_array(nodes.map(function (node) {
            return {id: node.id, parent_id: node.parent_id, value: node};
        })),
        visit: function ({node}) {
            if (selection_map[node.parent_id]) {
                selection_map[node.id] = true;
            }
            if (selection_map[node.id]) {
                retval.push(node.value);
            }
        },
    });
    return retval;
}

export default tree_select;
