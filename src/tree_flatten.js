function tree_flatten(children)
{
    return walk([], children);
}

function walk(rows, children)
{
    for (let i = 0, end = children.length; i < end; ++i) {
        const row = children[i];
        rows.push(row);
        walk(rows, row.children);
        delete row.parent;
        delete row.children;
    }
    return rows;
}

export default tree_flatten;
