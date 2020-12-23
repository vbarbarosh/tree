import tree_diff from './tree_diff';
import tree_flatten from './tree_flatten';
import tree_from_string from './tree_from_string';

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
