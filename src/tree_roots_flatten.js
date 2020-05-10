import tree_walk_preorder from './tree_walk_preorder';

function tree_roots_flatten(roots)
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
        },
    });
}

export default tree_roots_flatten;
