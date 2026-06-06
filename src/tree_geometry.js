const tree_from_array = require('./tree_from_array');

/**
 * Display-order geometry for nodes, in canonical preorder.
 * Pure query: builds a throwaway tree over {id, parent_id} copies;
 * the input rows are never modified.
 *
 *     geometry_by_id[id] = {depth, index, enter, exit}
 *
 *     depth — distance from root
 *     index — position among siblings
 *     enter/exit — half-open preorder interval:
 *
 *         is_ancestor(a, b)    g[a].enter < g[b].enter && g[b].exit <= g[a].exit
 *         descendant_count(a)  g[a].exit - g[a].enter - 1
 *         is_before(a, b)      g[a].enter < g[b].enter
 *
 * One O(n) build; every read afterwards is arithmetic. Derived
 * state: never edit it — rederive after the rows change.
 *
 * @param {Array} nodes
 * @returns {Object} geometry_by_id
 */
function tree_geometry(nodes)
{
    const tree = tree_from_array(nodes.map(v => ({id: v.id, parent_id: v.parent_id})));
    const out = {};
    let counter = 0;
    for (let i = 0, end = tree.roots.length; i < end; ++i) {
        walk(tree.roots[i], 0, i);
    }
    return out;
    function walk(node, depth, index)
    {
        const geometry = out[node.id] = {depth, index, enter: counter++, exit: 0};
        for (let i = 0, end = node.children.length; i < end; ++i) {
            walk(node.children[i], depth + 1, i);
        }
        geometry.exit = counter;
    }
}

module.exports = tree_geometry;
