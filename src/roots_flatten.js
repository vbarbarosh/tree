const tree_walk_preorder = require('./tree_walk_preorder');

function roots_flatten(roots)
{
    return tree_walk_preorder({
        roots,
        retval: [],
        enter: function ({node, retval}) {
            retval.push(node);
        },
        leave: function ({node}) {
            delete node.parent;
            delete node.children;
            delete node.siblings;
        },
    });
}

module.exports = roots_flatten;
