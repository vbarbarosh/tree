function tree_walk2(nodes, fn)
{
    for (let i = 0; i < nodes.length; ++i) {
        if (fn(nodes[i]) === false) {
            return false;
        }
        if (tree_walk2(nodes[i].children, fn) === false) {
            return false;
        }
    }
    return true;
}

export default tree_walk2;
