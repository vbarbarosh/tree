import tree_flatten from './tree_flatten';
import tree_from_string2 from './tree_from_string2';
import tree_select from './tree_select';

describe('tree_select', function () {
    it('should handle empty arrays', function () {
        assert.deepEqual(tree_select([], []), []);
    });
    it('should handle basic input', function () {
        const a = tree(`
            a
            b
            c
        `);
        assert.deepEqual(tree_select(a, [{id:'a'}]), [{id:'a',parent_id:null}]);
        assert.deepEqual(tree_select(a, [{id:'a'},{id:'b'}]), [{id:'a',parent_id:null},{id:'b',parent_id:null}]);
        assert.deepEqual(tree_select(a, [{id:'b'},{id:'a'}]), [{id:'a',parent_id:null},{id:'b',parent_id:null}]);
    });
    it('should return descendants', function () {
        const a = tree(`
            a
              b
                c
            d
            e
        `);
        assert.deepEqual(tree_select(a, [{id:'a'}]), [{id:'a',parent_id:null},{id:'b',parent_id:'a'},{id:'c',parent_id:'b'}]);
    });
});

function tree(text)
{
    const out = tree_flatten(tree_from_string2(text));
    const ids = {};
    out.forEach(v => ids[v.id] = v.text);
    out.forEach(v => v.id = ids[v.id]);
    out.forEach(v => v.parent_id = ids[v.parent_id]);
    out.forEach(v => delete v.level);
    out.forEach(v => delete v.text);
    return out;
}
