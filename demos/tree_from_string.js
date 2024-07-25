const tree_flatten = require('../src/tree_flatten');
const tree_from_string = require('../src/tree_from_string');

const str = `
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
`;

console.log(tree_flatten(tree_from_string(str)));
