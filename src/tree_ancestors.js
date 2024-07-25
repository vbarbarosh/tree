const tree_map_orig = require('./tree_map_orig');
const tree_from_array = require('./tree_from_array');

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

module.exports = tree_ancestors;
