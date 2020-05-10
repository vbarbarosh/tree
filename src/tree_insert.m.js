import tree_insert from './tree_insert.js';

describe('tree_insert', function () {
    it('should handle empty arrays', function () {
        const tmp = [];
        tree_insert(tmp, []);
        assert.deepEqual(tmp, []);
    });
});
