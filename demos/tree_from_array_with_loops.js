const array_permutations = require('../src/array_permutations');
const tree_from_array_with_loops = require('../src/tree_from_array_with_loops');

// a <-
// -> b
//     c
const nodes1 = [{id: 'c', parent_id: 'b'}, {id: 'b', parent_id: 'a'}, {id: 'a',parent_id: 'b'}];
array_permutations(nodes1).forEach(function (n) {
    tree_from_array_with_loops(JSON.parse(JSON.stringify(n))).loops.forEach(v => console.log(v.map(vv => vv.id).join(' → ')));
});
console.log('');

const nodes2 = [
    {id: 'a', parent_id: null},
    {id: 'b', parent_id: 'a'},
    {id: 'c', parent_id: 'e'},
    {id: 'd', parent_id: 'c'},
    {id: 'e', parent_id: 'd'}
];
array_permutations(nodes2).forEach(function (n) {
    tree_from_array_with_loops(JSON.parse(JSON.stringify(n))).loops.forEach(v => console.log(v.map(vv => vv.id).join(' → ')));
});

const nodes3 = [
    {id: 'a', parent_id: null},
    {id: 'b', parent_id: 'a'},
    {id: 'c', parent_id: 'x'},
    {id: 'd', parent_id: 'c'},
    {id: 'e', parent_id: 'd'},
    {id: 'x', parent_id: 'e'},
    {id: 'f', parent_id: 'e'},
    {id: 'g', parent_id: 'f'},
];
array_permutations(nodes3).forEach(function (n) {
    tree_from_array_with_loops(JSON.parse(JSON.stringify(n))).loops.forEach(v => console.log(v.map(vv => vv.id).join(' → ')));
});
console.log('');
