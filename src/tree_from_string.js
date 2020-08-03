/**
 * @param {String} s
 * @returns {{roots,nodes,nodes_map}}
 */
function tree_from_string(s= '')
{
    // 1. Each line represent one or several *node ids* separated by comma
    // 2. Duplicated *node ids* would be prefixed with a number starting from 2
    // 3. Parent of a node would be the first above it with less spaces

    const root = {id: null, children: []};
    const nodes = [];
    const nodes_map = {};
    const spaces_map = {[null]: 0};
    let parent = root;
    s.split('\n').forEach(function (line) {
        const names = line.trimLeft();
        if (names == '') {
            return;
        }
        const spaces = line.length - names.length;
        while (parent !== root && spaces_map[parent.id] >= spaces) {
            parent = parent.parent;
        }
        names.split(',').forEach(function (name) {
            let id = name;
            for (let suffix = 2; nodes_map[id] && suffix < 100; ++suffix) {
                id = `${name}${suffix}`;
            }
            const node = {id, parent_id: parent.id, name, parent, children: []};
            spaces_map[id] = spaces;
            nodes.push(node);
            nodes_map[id] = node;
            parent.children.push(node);
        });
        parent = nodes[nodes.length - 1];
    });
    return {roots: root.children, nodes, nodes_map};
}

export default tree_from_string;
