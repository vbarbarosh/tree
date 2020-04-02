function tree_move_before(nodes, selection, target)
{
    const i = nodes.indexOf(target);
    return tree_move(nodes, selection, i, target.parent_id);
}

function tree_move_after(nodes, select, target)
{
    const i = nodes.indexOf(target);
    return tree_move(nodes, select, i + 1, target.parent_id);
}

function tree_move_first_of(nodes, selection, target)
{
    const i = Math.max(0, nodes.findIndex(v => v.parent_id == target.id));
    return tree_move(nodes, selection, i, target.id);
}

function tree_move_last_of(nodes, selection, target)
{
    let i = nodes.length;
    while (--i >= 0) {
        if (nodes[i].parent_id == target.id) {
            ++i;
            break;
        }
    }
    return tree_move(nodes, selection, i, target.id);
}

function tree_move_v2(nodes, selection, target)
{
}

export default tree_move_v2;
