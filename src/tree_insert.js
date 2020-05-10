import tree_from_array from './tree_from_array.js';
import tree_map_orig from './tree_map_orig.js';
import tree_walk_preorder from './tree_walk_preorder.js';

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

export default tree_insert;
