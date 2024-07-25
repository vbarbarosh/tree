const array_index = require('./array_index');
const tree_from_array = require('./tree_from_array');
const tree_map_orig = require('./tree_map_orig');
const tree_walk_preorder = require('./tree_walk_preorder');

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
        roots: tree_from_array(nodes.map(tree_map_orig)).roots,
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

module.exports = tree_diff;
