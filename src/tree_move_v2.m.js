import tree_flatten from './tree_flatten';
import tree_from_string2 from './tree_from_string2';
import tree_move from './tree_move';

describe('tree_move_v2', function () {
    it('should handle empty arrays', function () {
        assert.deepEqual(tree_move([], [], null), []);
    });
    it('should handle basic input #1', function () {
        const nodes = tree(`
            a
            b
            c
        `);
        assert.deepEqual(tree_move(nodes, [{id:'c'}],{after:'a'}), [{id:'a',parent_id:null},{id:'c',parent_id:null},{id:'b',parent_id:null}]);
    });
    it('should handle basic input #2', function () {
        const nodes = tree(`
            a
            b
            c
        `);
        assert.deepEqual(tree_move(nodes, [{id:'c'}],{into:'a'}), [{id:'a',parent_id:null},{id:'c',parent_id:'a'},{id:'b',parent_id:null}]);
    });
});

function dup(value)
{
    return JSON.parse(JSON.stringify(value));
}

function tree(text)
{
    const out = tree_flatten(tree_from_string2(text));
    const ids = {};
    out.forEach(v => ids[v.id] = v.text);
    out.forEach(v => v.id = ids[v.id]);
    out.forEach(v => v.parent_id = ids[v.parent_id]||null);
    out.forEach(v => delete v.level);
    out.forEach(v => delete v.text);
    return out;
}
