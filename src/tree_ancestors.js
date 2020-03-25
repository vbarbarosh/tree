import tree_walk_preorder2 from './tree_walk_preorder2';
import tree_from_array from './tree_from_array';

/**
 * Return all ancestors of a specific node
 *
 * @param nodes
 * @param target
 */
function tree_ancestors(nodes, target)
{
    let ancestors = [];
    tree_walk_preorder2({
        nodes: tree_from_array(nodes.map(function (node) {
            return {id: node.id, parent_id: node.parent_id, value: node};
        })),
        visit: function ({node, stack}) {
            if (node.value === target) {
                ancestors = stack.map(v => v.value);
                ancestors.pop();
                return 'END';
            }
        },
    });
    return ancestors;
}

export default tree_ancestors;
