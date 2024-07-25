const roots_flatten = require('./roots_flatten');

function tree_flatten(tree)
{
    return roots_flatten(tree.roots)
}

module.exports = tree_flatten;
