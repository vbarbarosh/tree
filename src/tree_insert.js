const tree_from_array = require('./tree_from_array');
const tree_map_orig = require('./tree_map_orig');
const tree_walk_preorder = require('./tree_walk_preorder');

/**
 * Insert nodes at specific point.
 *
 * @param nodes
 * @param insertion
 * @param i
 * @param parent_id
 *
 * FIXME Throw an error if id from insertion is present in nodes
 */
function tree_insert(nodes, insertion, i, parent_id)
{
    const items = [];
    tree_walk_preorder({
        roots: tree_from_array(insertion.map(tree_map_orig)).roots,
        visit: function ({node, stack}) {
            if (stack.length == 1) {
                node.orig.parent_id = parent_id;
            }
            items.push(node.orig);
        },
    });
    nodes.splice(i, 0, ...items);
    return nodes;
}

module.exports = tree_insert;
