// Reverse Tree
//
// To get a reverse tree, just reverse an array of items
// before passing them to tree_from_array.

const tree_flatten = require('../src/tree_flatten');
const tree_from_array = require('../src/tree_from_array');
const tree_from_string = require('../src/tree_from_string');
const tree_print = require('../src/tree_print');

const str = `
    1-logo
        11-shapes
            scale,rotate,color,layer_up,layer_down,delete
        12-scale
        13-rotate
        14-drop_shadow
            enabled,distance,angle,opacity,blur
        15-inner_shadow
            enabled,distance,angle,opacity,blur
    2-text
        21-scale
        22-rotate
        23-font
        24-color
        25-drop_shadow
            enabled,distance,angle,opacity,blur
        26-inner_shadow
            enabled,distance,angle,opacity,blur
        27-layer_up
        28-layer_down
        29-delete
    3-uploads
        31-scale
        32-rotate
        33-drop_shadow
            enabled,distance,angle,opacity,blur
        34-inner_shadow
            enabled,distance,angle,opacity,blur
        35-layer_up
        36-layer_down
        37-delete
    4-background
        41-transparent
        42-gradient_color
        43-solid_color
`;

console.log(tree_print(tree_from_array(tree_flatten(tree_from_string(str)).reverse())));
