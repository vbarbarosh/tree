import roots_flatten from './roots_flatten';
import tree_from_string from './tree_from_string';
import tree_pointer_shift from './tree_pointer_shift';

describe('tree_pointer_shift', function () {
    it('should handle basic input', function () {
        assert.deepEqual(tree_pointer_shift([], {}, 0, 0), {i: 0, parent_id: null, shift_happened: 0});
    });
});

function tree(text)
{
    const out = tree_flatten(tree_from_string(text));
    out.forEach(v => delete v.name);
    return out;
}
