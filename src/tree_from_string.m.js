import tree_from_string from './tree_from_string.js';

describe('tree_from_string', function () {
    xit('should accept no arguments', function () {
        assert.deepEqual(tree_from_string(), []);
    });
    xit('should accept empty string', function () {
        assert.deepEqual(tree_from_string(''), []);
    });
    xit('should define parent_id for each node', function () {
    });
    xit('should return tree in the same format as tree_from_array', function () {
    });
});
