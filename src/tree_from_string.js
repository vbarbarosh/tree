import tree_print from './tree_print';

if (0) {
    const tree = tree_from_string(`
        logo
            shapes
                scale,rotate,color,layer_up,layer_down,delete
            scale
            rotate
            drop_shadow
                enabled,distance,angle,opacity,blur
            inner_shadow
                enabled,distance,angle,opacity,blur
        text
            scale
            rotate
            font
            color
            drop_shadow
                enabled,distance,angle,opacity,blur
            inner_shadow
                enabled,distance,angle,opacity,blur
            layer_up
            layer_down
            delete
        uploads
            scale
            rotate
            drop_shadow
                enabled,distance,angle,opacity,blur
            inner_shadow
                enabled,distance,angle,opacity,blur
            layer_up
            layer_down
            delete
        background
            transparent
            gradient_color
            solid_color
    `);
    tree_print(tree.children);
}

/**
 * 1. Should return an array of roots
 * 2. Each node should have unique ids
 *
 * @param s
 */
function tree_from_string(s)
{
    let root = {id: null, level: 0, parent: null, children: []};
    let parents = [root];
    s.split('\n').forEach(function (line) {
        const names = line.trimLeft();
        const level = line.length - names.length;
        if (names == '') {
            return;
        }
        while (parents.length > 1 && parents[0].level >= level) {
            parents[0].level = parents.length - 1;
            parents[0].parent = parents[1];
            parents.shift();
        }
        let node;
        names.split(',').forEach(function (id) {
            node = {id, level: parents.length - 1, parent: parents[0], children: []};
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

export default tree_from_string;
