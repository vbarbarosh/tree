function tree_sort(children, fcmp = fcmp_tree_str)
{
    children.sort(fcmp).forEach(v => tree_sort(v.children, fcmp));
    return children;
}

function fcmp_tree_str(a, b)
{
    return a.id.localeCompare(b.id);
}

export default tree_sort;
