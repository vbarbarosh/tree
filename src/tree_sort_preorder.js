function tree_sort_preorder(children, fcmp = fcmp_nodes_id)
{
    children.sort(fcmp).forEach(v => tree_sort_preorder(v.children, fcmp));
    return children;
}

function fcmp_nodes_id(a, b)
{
    return a.id.localeCompare(b.id);
}

export default tree_sort_preorder;
