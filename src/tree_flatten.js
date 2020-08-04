import roots_flatten from './roots_flatten';

function tree_flatten(tree)
{
    return roots_flatten(tree.roots)
}

export default tree_flatten;
