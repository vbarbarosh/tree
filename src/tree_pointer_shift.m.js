import tree_from_string from './tree_from_string';
import tree_pointer_shift from './tree_pointer_shift';
import tree_roots_flatten from './tree_roots_flatten';

describe('tree_pointer_shift', function () {
    it('should handle basic input', function () {
        assert.deepEqual(tree_pointer_shift([], {}, 0, 0), {i: 0, parent_id: null, shift_happened: 0});
    });
});

function tree(text)
{
    const out = tree_flatten(tree_from_string(text));
    const ids = {};
    out.forEach(v => ids[v.id] = v.text);
    out.forEach(v => v.id = ids[v.id]);
    out.forEach(v => v.parent_id = ids[v.parent_id]||null);
    out.forEach(v => delete v.level);
    out.forEach(v => delete v.text);
    return out;
}
