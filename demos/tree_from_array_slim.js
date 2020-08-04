// A basic approach for converting array of nodes into a tree-like
// structure. No checking for circular dependencies was made.
function tree_from_array(nodes = [])
{
    const nodes_map = {};
    nodes.forEach(function (node) {
        nodes_map[node.id] = node;
        node.parent = null;
        node.children = [];
    });
    nodes.forEach(function (node) {
        if (node.parent = nodes_map[node.parent_id] || null) {
            node.parent.children.push(node);
        }
    });
    return {roots: nodes.filter(v => !v.parent), nodes, nodes_map};
}

const nodes = [{id: 'foo'}, {id: 'bar'}, {id: 'baz'}];
console.log(tree_from_array(nodes));
