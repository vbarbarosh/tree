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
`children`). And if original nodes should'nt be touched, the
following technique can be used:

    tree_from_array(nodes.map(function (node) {
        return {id: node.id, parent_id: node.parent_id, value: node};
    });

## Possible APIs

    tree_from_array(items.map(tree_from_array_wrapper))
    tree_from_string(string)
    tree_walk_preorder({nodes, visit, enter, leave})
    tree_walk_postorder({nodes, visit, enter, leave})
    tree_walk_inorder({nodes, visit, enter, leave})
    tree_move_before(nodes, selection, target, shift)
    tree_move_after(nodes, selection, target, shift)
    tree_remove(nodes, selection)
    tree_insert(nodes, insertion, target, shift)
    tree_select(nodes, selection) or tree_intersection(nodes, selection)

## Drag & Drop

1. Make a selection
2. Remove selection from tree (`tree_diff`)
3. Determine insertion point
4. Move selection into a new location (`tree_insert`)
