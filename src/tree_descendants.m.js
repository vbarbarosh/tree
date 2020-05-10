import tree_descendants from './tree_descendants.js';
import tree_from_string2 from './tree_from_string2.js';
import tree_roots_flatten from './tree_roots_flatten.js';

describe('tree_descendants', function () {
    it('should handle empty arrays', function () {
        assert.deepEqual(tree_descendants([], []), []);
    });
    it('should handle selection without children', function () {
        const a = tree(`
            a
            b
            c
        `);
        assert.deepEqual(tree_descendants(a, [{id:'a'}]), []);
        assert.deepEqual(tree_descendants(a, [{id:'a'},{id:'b'}]), []);
        assert.deepEqual(tree_descendants(a, [{id:'b'},{id:'a'}]), []);
    });
    it('should handle selection with children', function () {
        const a = tree(`
            a
              b
                c
            d
            e
        `);
        assert.deepEqual(tree_descendants(a, [{id:'a'}]), [{id:'b',parent_id:'a'},{id:'c',parent_id:'b'}]);
        assert.deepEqual(tree_descendants(a, [{id:'a'},{id:'b'}]), [{id:'b',parent_id:'a'},{id:'c',parent_id:'b'}]);
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
