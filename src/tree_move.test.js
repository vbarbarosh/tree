const tree_flatten = require('./tree_flatten');
const tree_from_string = require('./tree_from_string');
const tree_move = require('./tree_move');

describe('tree_move', function () {
    it('should handle empty arrays', function () {
        assert.deepEqual(tree_move([], [], 0, null), []);
    });
    it('should handle basic input', function () {
        const a = tree(`
            a
            b
            c
        `);
        assert.deepEqual(tree_move(a, [{id:'a'}],2,null), [{id:'b',parent_id:null},{id:'a',parent_id:null},{id:'c',parent_id:null}]);
    });
    it('should handle input #2', function () {
        const a = [
            {id:'a',parent_id:null},
            {id:'aa',parent_id:null},
            {id:'b',parent_id:null},
            {id:'c',parent_id:null},
            {id:'11',parent_id:'aa'},
            {id:'22',parent_id:'aa'},
            {id:'33',parent_id:'aa'},
        ];
        assert.deepEqual(tree_move(dup(a), [{id:'c'}],2,null), [
            {id:'a',parent_id:null},
            {id:'aa',parent_id:null},
            {id:'c',parent_id:null},
            {id:'b',parent_id:null},
            {id:'11',parent_id:'aa'},
            {id:'22',parent_id:'aa'},
            {id:'33',parent_id:'aa'},
        ]);
    });
    it('should handle input #3', function () {
        const a = [
            {id:'a',parent_id:null},
            {id:'aa',parent_id:null},
            {id:'22',parent_id:null},
            {id:'c',parent_id:null},
            {id:'11',parent_id:'aa'},
            {id:'b',parent_id:'aa'},
            {id:'33',parent_id:'aa'},
        ];
        assert.deepEqual(tree_move(dup(a), [{id:'2'}],2,'aa'), [
            {id:'a',parent_id:null},
            {id:'aa',parent_id:null},
            {id:'22',parent_id:null},
            {id:'c',parent_id:null},
            {id:'11',parent_id:'aa'},
            {id:'b',parent_id:'aa'},
            {id:'33',parent_id:'aa'},
        ]);
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
