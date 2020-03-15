import tree_walk_preorder2 from './tree_walk_preorder2';

function tree_flatten(node)
{
    const retval = [];
    return tree_walk_preorder2({
        node,
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

export default tree_flatten;
