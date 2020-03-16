function tree_move_after(nodes, target)
{
    nodes.forEach(function (node) {
        if (node.parent) {
            node.parent.children.splice(node.parent.children.indexOf(node), 1);
            node.parent = null;
            node.parent_id = null;
        }
    });
    const i = target.parent.children.indexOf(target);
    target.parent.children.splice(i+1, 0, ...nodes);
    nodes.forEach(function (node) {
        node.parent = target.parent;
        node.parent_id = target.parent_id;
    });
}

export default tree_move_after;
