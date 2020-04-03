/**
 * Return ancestor shared by all nodes
 *
 * @param nodes
 */
function tree_common_ancestor(nodes)
{
    if (nodes.length == 0) {
        return null;
    }

    const ancestors = [];
    nodes.forEach(function (node) {
        const tmp = [];
        for (let p = node; p; p = p.parent) {
            tmp.push(p);
        }
        ancestors.push(tmp.reverse());
    });

    const end = Math.min(...Object.values(ancestors).map(v => v.length));

    for (let m_parent = 0; m_parent < end; ++m_parent) {
        for (let i = 1; i < ancestors.length; ++i) {
            if (ancestors[i-1][m_parent] !== ancestors[i][m_parent]) {
                return ancestors[0][m_parent-1];
            }
        }
    }

    return ancestors[0][end-2]||null;
}

export default tree_common_ancestor;
