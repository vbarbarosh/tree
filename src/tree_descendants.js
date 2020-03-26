import array_index from './array_index';
import tree_from_array from './tree_from_array';
import tree_walk_preorder2 from './tree_walk_preorder2';

/**
 * Return all descendants of selected nodes
 *
 * @param nodes
 * @param selection
 */
function tree_descendants(nodes, selection)
{
    let dump = 0;
    const descendants = [];
    const selection_map = array_index(selection, v => v.id);
    tree_walk_preorder2({
        nodes: tree_from_array(nodes.map(function (node) {
            return {id: node.id, parent_id: node.parent_id, value: node};
        })),
        leave: function ({node}) {
            if (selection_map[node.id]) {
                dump--;
            }
        },
        visit: function ({node}) {
            if (dump) {
                descendants.push(node.value);
            }
            if (selection_map[node.id]) {
                dump++;
            }
        },
    });
    return descendants;
}

export default tree_descendants;
