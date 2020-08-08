function tree_node_next(node)
{
    if (node.children.length) {
        return node.children[0];
    }
    for (let p = node, i = 0; p; p = p.parent, ++i) {
        if (i > 1000) {
            throw new Error('Too many iterations');
        }
        const next = p.siblings[p.siblings.indexOf(p) + 1];
        if (next) {
            return next;
        }
    }
    return null;
}

export default tree_node_next;
