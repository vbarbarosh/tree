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

1. Drag and drop begins
2. Remove selected nodes from DOM
3. Capture rectangles from remained nodes
4. For each mouse movement find the closest rect; determine is_above/is_below and shift values
5. Repeat until mose get released
6. Drag and drop ends

### Finding insertion point

This can be done in several ways.

1. A movement of a mouse for 10px could mean changing position up/down/left/right. That way
   selected items could be moved to a new position with less mouse distance, but users might
   find this counter-intuitive.
2. Insertion point can be selected as a nearest to a mouse. That way things could
   be more intuitive but harder to implement.

Finding insertion point can be treated as finding a closest side of an element to
a cursor.

Basically, we have a list of rectangles. From top to bottom. And what is necessary is to
find such a rectangle and its side (top or bottom) which is closer to a point.

Further. Having a bunch of DOM elements, find one which is closer to a point.

### Why it is necessary to remove selected items before begin

Removing 10 consecutive items from list of 100 items will make insertion point
more sensitive to mouse movement. Keeping this items in a list would require
to remove them in a process of fetching rectangles. Keeping items on the list
will lead to moving mouse for a very long distance in order to move items one
position up or down.
