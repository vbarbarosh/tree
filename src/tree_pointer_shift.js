/**
 * Вычисляет новое положение указателя вставки после его
 * смещения влево либо вправо.
 *
 * Указатель вставки - это место между узлами, куда будет что-то вставлено или перемещено.
 *
 * Assumptions:
 * 1) All node.id are unique and non null
 * 2) All node.parent_id are valid or null (i.e. all root nodes are those whose parent_id is null)
 *
 * @param {Array<{id:string,parent_id:string|null}>} nodes
 * @param {Object} selection_map
 * @param {Number} i
 * @param {Number} shift
 * @param {Function} is_shift_allowed
 * @return {{i, parent_id}}
 */
function tree_pointer_shift(nodes, selection_map, i, shift, is_shift_allowed = () => true)
{
    let parent_id = (i == nodes.length ? null : nodes[i].parent_id);

    if (shift < 0) {
        return shift_left(nodes, i, parent_id, shift, is_shift_allowed, selection_map);
    }
    return shift_right(nodes, i, parent_id, shift, is_shift_allowed);
}

function shift_right(nodes, i, parent_id, shift, is_shift_allowed, selection_map)
{
    let shift_happened = 0;
    let out = {i, parent_id, shift_happened};

    // Shift to the right is possible for all but very first child.
    // In general, one shift to the right means to become a last
    // child of a previous sibling.
    while (shift > 0) {
        let i_sibl = i;
        // Look for a previous sibling.
        while (--i_sibl >= 0) {
            const sibl = nodes[i_sibl];
            if (sibl.parent_id == parent_id) {
                // Previous sibling was found.
                parent_id = sibl.id;
                // Look for its last child.
                for (let j = nodes.length; --j >= 0; ) {
                    if (nodes[j].parent_id == parent_id) {
                        i = j + 1;
                        break;
                    }
                    // In case when no child was found, `i` position
                    // could be kept unchanged.
                }
                --shift;
                ++shift_happened;
                if (is_shift_allowed(i_sibl, nodes)) {
                    out.i = i;
                    out.parent_id = parent_id;
                    out.shift_happened = shift_happened
                }
                break;
            }
        }
        if (i_sibl == -1) {
            break;
        }
    }

    return out;
}

function shift_left(nodes, i, parent_id, shift, is_shift_allowed, selection_map)
{
    let shift_happened = 0;
    let out = {i, parent_id, shift_happened};

    // Shift to the left is possible for last children only.
    // In general, one shift to the left means to become a next
    // brother of a current parent.
    while (shift < 0) {
        // Look for a next sibling
        for (let i_sibl = i, end = nodes.length; i_sibl < end; ++i_sibl) {
            const sibl = nodes[i_sibl];
            if (sibl.parent_id == parent_id) {
                // Next sibling was found.
                if (!selection_map[sibl.id]) {
                    // And it is not in a selection_map.
                    // Shift to the left is not allowed.
                    return out;
                }
                // Last selected nodes could be shifted to the left.
                // Since all of them will change parent_id and
                // nothing will remain after them in a current branch.
            }
        }
        // No unselected next siblings was found.
        // Shift to the left is possible.
        // Look for a parent.
        let i_parent = null;
        for (let j = 0, end = nodes.length; j < end; ++j) {
            if (nodes[j].id == parent_id) {
                i_parent = j;
                break;
            }
        }
        if (i_parent === null) {
            // Parent was not found. Shift to the left is not possible.
            break;
        }
        ++shift;
        --shift_happened;
        i = i_parent + 1;
        parent_id = nodes[i_parent].parent_id;
        // XXX Not optimized
        if (is_shift_allowed(nodes.indexOf(v => v.id == parent_id), nodes)) {
            out.i = i;
            out.parent_id = parent_id;
            out.shift_happened = shift_happened;
        }
    }

    return out;
}

module.exports = tree_pointer_shift;
