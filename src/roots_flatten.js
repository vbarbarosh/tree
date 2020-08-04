import tree_walk_preorder from './tree_walk_preorder';

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

export default roots_flatten;
