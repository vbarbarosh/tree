/**
 * Return all possible shifts for the specified node pointer.
 *
 * @param nodes
 * @param pointer
 * @return {{shift_left, shift_right}}
 *
 * @deprecated Deprecated in favor of tree_shift
 */
function tree_find_shifts(nodes, pointer)
{
    const dummy1 = {id: '__tree_find_shifts__:dummy1', parent_id: pointer.parent_id};
    const dummy2 = {id: '__tree_find_shifts__:dummy2', parent_id: pointer.parent_id};
    const tmp1 = nodes.slice();
    const tmp2 = nodes.slice();
    tmp1.splice(pointer.i, 0, dummy1);
    tmp2.splice(pointer.i, 0, dummy2);

    const shift_left = [];
    while (move_left(tmp1, dummy1)) {
        shift_left.push({i: tmp1.indexOf(dummy1), parent_id: dummy1.parent_id||null});
    }
    
    const shift_right = [];
    while (move_right(tmp2, dummy2)) {
        shift_right.push({i: tmp2.indexOf(dummy2), parent_id: dummy2.parent_id||null});
    }

    return {shift_left, shift_right};
}

// Move node to the left (change parent to grandparent)
function move_left(nodes, target)
{
    const i = nodes.indexOf(target);
    if (i == -1) {
        return false;
    }

    // Stop if target is not the last one among its siblings
    for (let j = i, end = nodes.length; ++j < end; ) {
        if (nodes[j].parent_id === target.parent_id) {
            // Middle nodes cannot be moved left
            return false;
        }
    }

    // Find out parent node
    const ii = nodes.findIndex(v => v.id == target.parent_id);
    if (ii == -1) {
        return false;
    }

    // Put target right after parent node, so it will be after it
    // among its siblings
    target.parent_id = nodes[ii].parent_id;
    nodes.splice(i, 1);
    nodes.splice(ii + 1 - (i<ii), 0, target);
    return true;
}

function move_right(nodes, target)
{
    const i = nodes.indexOf(target);
    for (let j = i; --j >= 0; ) {
        if (nodes[j].parent_id === target.parent_id) {
            const prev = nodes[j];
            let jj = nodes.length;
            while (--jj > 0) {
                if (nodes[jj].parent_id === prev.id) {
                    break;
                }
            }
            if (jj == 0) {
                jj = j;
            }
            target.parent_id = prev.id;
            nodes.splice(i, 1);
            nodes.splice(jj+1-(i<jj), 0, target);
            return true;
        }
    }
    return false;
}

export default tree_find_shifts;
