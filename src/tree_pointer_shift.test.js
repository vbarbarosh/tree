const tree_pointer_shift = require('./tree_pointer_shift');

describe('tree_pointer_shift', function () {
    it('should handle basic input', function () {
        assert.deepEqual(tree_pointer_shift([], {}, 0, 0), {i: 0, parent_id: null, shift_happened: 0});
    });
});
