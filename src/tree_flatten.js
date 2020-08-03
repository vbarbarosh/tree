import tree_roots_flatten from './tree_roots_flatten';

function tree_flatten(tree)
{
    return tree_roots_flatten(tree.roots)
}

export default tree_flatten;
