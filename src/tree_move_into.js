function tree_move_into(nodes, target)
{
    nodes.forEach(function (node) {
        if (node.parent) {
            node.parent.children.splice(node.parent.children.indexOf(node), 1);
            node.parent = null;
            node.parent_id = null;
        }
    });
    target.children.splice(0, 0, ...nodes);
    nodes.forEach(function (node) {
        node.parent = target;
        node.parent_id = target.id;
    });
}

export default tree_move_into;
