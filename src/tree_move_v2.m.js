import roots_flatten from './roots_flatten';
import tree_from_string from './tree_from_string';
import tree_move from './tree_move';

describe('tree_move_v2', function () {
    xit('should handle empty arrays', function () {
        assert.deepEqual(tree_move([], [], null), []);
    });
    xit('should handle basic input #1', function () {
        const nodes = tree(`
            a
            b
            c
        `);
        assert.deepEqual(tree_move(nodes, [{id:'c'}],{after:'a'}), [{id:'a',parent_id:null},{id:'c',parent_id:null},{id:'b',parent_id:null}]);
    });
    xit('should handle basic input #2', function () {
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
    const out = tree_flatten(tree_from_string(text));
    out.forEach(v => delete v.name);
    return out;
}
