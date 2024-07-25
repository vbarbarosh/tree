function tree_node_prev(node)
{
    let p = node.siblings[node.siblings.indexOf(node) - 1] || null;
    if (p) {
        for (let i = 0; p.children.length; ++i) {
            if (i > 1000) {
                throw new Error('Too many iterations');
            }
            p = p.children[p.children.length - 1];
        }
    }
    return p;
}

module.exports = tree_node_prev;
