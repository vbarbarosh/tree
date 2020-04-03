/**
 *
 * @param children
 * @param cb
 * @param path
 * @returns {boolean}
 *
 * @deprecated Deprecated in favor of tree_walk_preorder2
 */
function tree_walk_preorder(children, cb, path = [])
{
    const p = path.concat(null), n = path.length;
    for (let i = 0, end = children.length; i < end; ++i) {
        const child = children[i];
        p[n] = i;
        if (cb(child, p) === false) {
            return false;
        }
        if (tree_walk_preorder(child.children, cb, p) === false) {
            return false;
        }
    }
    return true;
}

export default tree_walk_preorder;
