/**
 * 1. Should return an array of roots
 * 2. Each node should have unique ids
 *
 * @param s
 */
function tree_from_string2(s)
{
    let counter = 0;
    const root = {id: 'root', parent_id: null, level: 0, parent: null, children: []};
    const parents = [root];
    s.split('\n').forEach(function (line) {
        const names = line.trimLeft();
        const level = line.length - names.length;
        // noinspection EqualityComparisonWithCoercionJS
        if (names == '') {
            return;
        }
        while (parents.length > 1 && parents[0].level >= level) {
            parents[0].level = parents.length - 1;
            parents[0].parent = parents[1];
            parents.shift();
        }
        let node;
        names.split(',').forEach(function (text) {
            node = {id: `node_${counter++}`, parent_id: parents[0].id, text, level: parents.length - 1, parent: parents[0], children: []};
            parents[0].children.push(node);
        });
        node.level = level;
        parents.unshift(node);
    });
    while (parents.length > 0) {
        parents[0].level = parents.length - 1;
        parents.shift();
    }
    return root;
}

export default tree_from_string2;
