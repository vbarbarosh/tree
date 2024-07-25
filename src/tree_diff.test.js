const tree_diff = require('./tree_diff');
const tree_flatten = require('./tree_flatten');
const tree_from_string = require('./tree_from_string');

describe('tree_diff', function () {
    it('should handle empty arrays', function () {
        assert.deepEqual(tree_diff([], []), []);
    });
    it('should handle basic input', function () {
        const a = tree(`
            a
            b
            c
        `);
        assert.deepEqual(tree_diff(a, [{id:'a'}]), [{id:'b',parent_id:null},{id:'c',parent_id:null}]);
        assert.deepEqual(tree_diff(a, [{id:'a'},{id:'b'}]), [{id:'c',parent_id:null}]);
        assert.deepEqual(tree_diff(a, [{id:'b'},{id:'a'}]), [{id:'c',parent_id:null}]);
    });
    it('should count descendants', function () {
        const a = tree(`
            a
              b
                c
            d
            e
        `);
        assert.deepEqual(tree_diff(a, [{id:'a'}]), [{id:'d',parent_id:null},{id:'e',parent_id:null}]);
    });
});

function tree(text)
{
    const out = tree_flatten(tree_from_string(text));
    out.forEach(v => delete v.name);
    return out;
}
