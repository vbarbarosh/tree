import tree_map_orig from './tree_map_orig';
import tree_walk_preorder from './tree_walk_preorder';
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
    tree_walk_preorder({
        roots: tree_from_array(nodes.map(tree_map_orig)).roots,
        visit: function ({node, stack}) {
            if (node.orig === target) {
                ancestors = stack.map(v => v.orig);
                ancestors.pop();
                return 'END';
            }
        },
    });
    return ancestors;
}

export default tree_ancestors;
