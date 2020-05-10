import tree_from_string2 from './tree_from_string2.js';
import tree_pointer_shift from './tree_pointer_shift.js';
import tree_roots_flatten from './tree_roots_flatten.js';

describe('tree_pointer_shift', function () {
    it('should handle basic input', function () {
        assert.deepEqual(tree_pointer_shift([], {}, 0, 0), {i: 0, parent_id: null, shift_happened: 0});
    });
});

function tree(text)
{
    const out = tree_roots_flatten(tree_from_string2(text));
    const ids = {};
    out.forEach(v => ids[v.id] = v.text);
    out.forEach(v => v.id = ids[v.id]);
    out.forEach(v => v.parent_id = ids[v.parent_id]||null);
    out.forEach(v => delete v.level);
    out.forEach(v => delete v.text);
    return out;
}
