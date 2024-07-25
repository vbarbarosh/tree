const array_index = require('./array_index');
const tree_from_array = require('./tree_from_array');
const tree_map_orig = require('./tree_map_orig');
const tree_walk_preorder = require('./tree_walk_preorder');

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
    tree_walk_preorder({
        roots: tree_from_array(nodes.map(tree_map_orig)).roots,
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

module.exports = tree_intersect;
