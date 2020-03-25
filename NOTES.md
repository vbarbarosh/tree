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

## Use cases

- Mimic file system (e.g. file manager)
  - Here you can have files and folders
  - Folders can have files and folders in it; files couldn't
- Kind of an object editor
  - Objects can be of different types (e.g. rect, circle, triangle)
  - Objects has properties
  - Objects can be grouped
- tree_walk_postorder
  - is useful for calculating size of files; because leafs/children are
    visited first, when an node is visited it is guaranteed that all
    of its children was visited also and calculating size of a directory
    would be just `children.reduce((a,v) => a+v.size, 0)`

## Representation in UI

- As OL/UL list
  - nodes are rendered from top to bottom
  - a child node is shifted one position to the right
- As dropdown menu
  - all siblings are rendered from top to bottom in a single list
  - child nodes are rendered in a new container next to its parent

## Workflow for drag and drop

1. Find insertion point
   - insertion point can be represented as `[i,parent_id]`
2. Move/insert nodes into insertion point
   - diff = tree_diff(nodes, selection)
   - selection.forEach(v => v.parent_id = ip.parent_id)
   - diff.splice(ip.i, 0, ...selection)

## Representation for trees
- an array of items `{id,parent_id}`
- an array of roots `{id,parent_id,parent,children}`
