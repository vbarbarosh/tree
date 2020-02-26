import tree_walk_preorder from './tree_walk_preorder';

function tree_print(children, cb = child => child.id)
{
    tree_walk_preorder(children, function (child, path) {
        console.log('    '.repeat(path.length - 1) + cb(child, path));
    });
}

export default tree_print;
