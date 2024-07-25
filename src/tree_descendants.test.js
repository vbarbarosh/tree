const tree_descendants = require('./tree_descendants');
const tree_flatten = require('./tree_flatten');
const tree_from_string = require('./tree_from_string');

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
    const out = tree_flatten(tree_from_string(text));
    out.forEach(v => delete v.name);
    return out;
}
