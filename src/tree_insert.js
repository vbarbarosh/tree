/**
 * Insert nodes at specific point.
 *
 * @param nodes
 * @param insertion
 * @param target
 */
function tree_insert(nodes, insertion, target)
{
    const i = nodes.indexOf(target);
    if (i == -1) {
        insertion.forEach(v => v.parent_id = null);
        nodes.unshift(...insertion);
    }
    else {
        insertion.forEach(v => v.parent_id = target.parent_id);
        nodes.splice(i+1, 0, ...insertion);
    }
}

export default tree_insert;
