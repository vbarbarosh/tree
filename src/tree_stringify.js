import tree_walk_preorder from './tree_walk_preorder';

function tree_stringify(children, cb = child => child.id)
{
    const rows = [];
    tree_walk_preorder(children, function (child, path) {
        rows.push(' '.repeat(4*(path.length - 1)) + cb(child, path));
    });
    return rows.join('\n');
}

export default tree_stringify;
