import tree_intersect from './tree_intersect';

/**
 * Move nodes into a new place
 *
 * @param nodes
 * @param selection
 * @param i
 * @param parent_id
 */
function tree_move(nodes, selection, i, parent_id)
{
    const subsel = tree_intersect(nodes, selection);
    const subsel_ids = array_index(subsel, v => v.id);
    if (!subsel_ids[parent_id]) {
        const next = [];
        selection.forEach(v => v.parent_id = parent_id);
        let sub = 0;
        for (let j = 0; j < nodes.length; ++j) {
            const node = nodes[j];
            if (subsel_ids[node.id]) {
                if (j < i) {
                    sub++;
                }
            }
            else {
                next.push(node);
            }
        }
        next.splice(i, 0, ...subsel);
        nodes.splice(0, nodes.length, ...next);
    }
}

export default tree_move;
