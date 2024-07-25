// Building a tree from an array
const tree_from_array = require('../src/tree_from_array');

const nodes = [{id: 'foo'}, {id: 'bar'}, {id: 'baz'}];
console.log(tree_from_array(nodes));
