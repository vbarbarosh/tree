import tree_walk_preorder from './tree_walk_preorder';

function tree_roots_flatten(nodes)
{
    const retval = [];
    return tree_walk_preorder({
        nodes,
        retval,
        enter: function ({node}) {
            retval.push(node);
        },
        leave: function ({node}) {
            delete node.parent;
            delete node.children;
        },
    });
}

export default tree_roots_flatten;
