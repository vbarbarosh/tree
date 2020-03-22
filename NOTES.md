## Goal

The primary goal of this library is to provide a reasonable
way to work with trees.

1. Store/Restore trees in/from a simple format
2. Traverse trees
3. Moving nodes around

## `tree_from_array` will modify original nodes

What if `tree_from_array` will not touch original nodes. Instead,
it might create a brand new object for each with the following
structure:

    id
    parent_id 
    parent
    children
    value: --- reference to original node

Leaving `tree_from_array` as it is now seems to provide more
generic approach. That way you can have nodes with properties
whatever you want, except (`id`, `parent_id`, `parent`, and
`children`). And if original nodes should'nt touched, the
following technique can be used:

    tree_from_array(nodes.map(function (node) {
        return {id: node.id, parent_id: node.parent_id, value: node};
    });
