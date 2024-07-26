/**
 * ⚠️ W A R N I N G ⚠️
 *
 *     1) This function will modify original values.
 *     2) This function does not fill `siblings` property (like `tree_from_array` does).
 *
 * @param {Array} nodes
 * @returns {{roots,nodes,nodes_map,loops,loops_map}}
 */
function tree_from_array_with_loops(nodes = [])
{
    const nodes_map = {};
    nodes.forEach(function (node) {
        if (nodes_map[node.id]) {
            throw new Error('All rows should have unique ids');
        }
        nodes_map[node.id] = node;
        node.parent_id ||= null;
        node.parent = null;
        node.children = [];
    });
    nodes.forEach(function (node) {
        node.parent = nodes_map[node.parent_id] || null;
        if (node.parent) {
            node.parent.children.push(node);
        }
    });

    const loops = [];
    const loops_map = {};
    const visited = {};
    nodes.forEach(function (node) {
        if (visited[node.id]) {
            return;
        }
        const ancestors = [];
        for (let p = node; p; p = p.parent) {
            const i = ancestors.indexOf(p);
            if (i !== -1) {
                const loop = ancestors.slice(i);
                loops.push(loop);
                loop.forEach(v => loops_map[v.id] = v);
                break;
            }
            if (visited[p.id]) {
                break;
            }
            visited[p.id] = true;
            ancestors.push(p);
        }
    });

    const roots = [];
    nodes.forEach(function (node) {
        if (!loops_map[node.id] && loops_map[node.parent_id]) {
            node.parent = null;
        }
        if (!node.parent) {
            roots.push(node);
        }
    });

    return {roots, nodes, nodes_map, loops, loops_map};
}

module.exports = tree_from_array_with_loops;
