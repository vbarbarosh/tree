import tree_walk_preorder from './tree_walk_preorder';

/**
 *
 * @param children
 * @param cb
 * @returns {string}
 *
 * @deprecated This is not the same as JSON.stringify; deprecated in favor of tree_print
 */
function tree_stringify(children, cb = child => child.id)
{
    const rows = [];
    tree_walk_preorder(children, function (child, path) {
        rows.push(' '.repeat(4*(path.length - 1)) + cb(child, path));
    });
    return rows.join('\n');
}

export default tree_stringify;
