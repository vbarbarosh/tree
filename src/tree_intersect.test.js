const tree_flatten = require('./tree_flatten');
const tree_from_string = require('./tree_from_string');
const tree_intersect = require('./tree_intersect');

describe('tree_intersect', function () {
    it('should handle empty arrays', function () {
        assert.deepEqual(tree_intersect([], []), []);
    });
    it('should handle basic input', function () {
        const a = tree(`
            a
            b
            c
        `);
        assert.deepEqual(tree_intersect(a, [{id:'a'}]), [{id:'a',parent_id:null}]);
        assert.deepEqual(tree_intersect(a, [{id:'a'},{id:'b'}]), [{id:'a',parent_id:null},{id:'b',parent_id:null}]);
        assert.deepEqual(tree_intersect(a, [{id:'b'},{id:'a'}]), [{id:'a',parent_id:null},{id:'b',parent_id:null}]);
    });
    it('should return descendants', function () {
        const a = tree(`
            a
              b
                c
            d
            e
        `);
        assert.deepEqual(tree_intersect(a, [{id:'a'}]), [{id:'a',parent_id:null},{id:'b',parent_id:'a'},{id:'c',parent_id:'b'}]);
    });
});

function tree(text)
{
    const out = tree_flatten(tree_from_string(text));
    out.forEach(v => delete v.name);
    return out;
}
