import tree_map_orig from './tree_map_orig.js';
import tree_walk_preorder from './tree_walk_preorder.js';
import tree_from_array from './tree_from_array.js';

/**
 * Return all ancestors of a specific node
 *
 * @param nodes
 * @param target
 */
function tree_ancestors(nodes, target)
{
    const tree = tree_from_array(nodes.map(tree_map_orig));
    const out = [];
    for (let parent = tree.nodes_map[target.parent_id]; parent; parent = parent.parent) {
        out.push(parent.orig);
    }
    return out;
}

export default tree_ancestors;
