/**
 * W A R N I N G
 *     This function will modify original values.
 *
 * @param {Array} nodes
 * @returns {{roots,nodes,nodes_map}} roots
 *
 * @link https://stackoverflow.com/a/37907458/1478566
 * @link http://krishnalearnings.blogspot.com/2015/11/basics-of-graph-in-computer-science.html
 */
function tree_from_array(nodes = [])
{
    const roots = [];
    const orphans = [];
    const nodes_map = {};

    // Split all rows into nodes and potential roots.
    for (let i = 0, end = nodes.length; i < end; ++i) {
        const node = nodes[i];
        node.parent_id = node.parent_id || null;
        node.children = [];
        if (nodes_map[node.id]) {
            throw new Error('All rows should have unique ids');
        }
        nodes_map[node.id] = node;
        if (node.parent = nodes_map[node.parent_id] || null) {
            // The most basic condition for circular dependency.
            if (node.parent === node) {
                panic(node);
            }
            // At this point just inserted node has no way to create
            // a circular dependency since no other nodes was able to
            // use it as a parent.
            node.parent.children.push(node);
        }
        else {
            // Currently there is no parent for this node, but it may follow.
            orphans.push(node);
        }
    }

    const splice = {};

    for (let i = 0, end = orphans.length; i < end; ++i) {
        const node = orphans[i];
        if (node.parent = nodes_map[node.parent_id] || null) {
            splice[node.parent_id] = (splice[node.parent_id]+1)||0;
            node.parent.children.splice(splice[node.parent_id], 0, node);
            // At this point just inserted node can create a circular dependency.
            for (let p = node; p; p = p.parent) {
                if (p.parent === node) {
                    panic(node);
                }
            }
        }
        else {
            // Since all nodes was indexed and parent_id wasn't found
            // in index, consider this node as root.
            roots.push(node);
        }
    }

    return {roots, nodes, nodes_map};
}

function panic(node)
{
    const path = [node.id];
    for (let p = node; p; p = p.parent) {
        path.push(p.parent_id);
        if (p.parent === node) {
            throw new Error(`Circular dependency detected: ${path.join(' -> ')}`);
        }
    }
}

export default tree_from_array;
