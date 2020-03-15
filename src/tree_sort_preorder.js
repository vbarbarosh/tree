function tree_sort_preorder(children, fcmp = fcmp_tree_ids)
{
    children.sort(fcmp).forEach(v => tree_sort_preorder(v.children, fcmp));
    return children;
}

function fcmp_tree_ids(a, b)
{
    return a.id.localeCompare(b.id);
}

export default tree_sort_preorder;
