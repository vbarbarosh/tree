const tree_insert = require('./tree_insert');

describe('tree_insert', function () {
    it('should handle empty arrays', function () {
        const tmp = [];
        tree_insert(tmp, []);
        assert.deepEqual(tmp, []);
    });
});
