const tree_flatten = require('./tree_flatten');
const tree_from_string = require('./tree_from_string');
const tree_shift = require('./tree_shift');

describe('tree_shift', function () {
    it('should handle empty arrays', function () {
        assert.deepEqual(tree_shift([], 0, 0), {i:0,parent_id:null,shift_real:0});
    });
    it('should handle shift to the right #1', function () {
        const nodes = tree(`
            a
            b
            c
        `);
        assert.deepEqual(tree_shift(nodes, 0, 0), {i:0,parent_id:null,shift_real:0});
        assert.deepEqual(tree_shift(nodes, 1, 1), {i:1,parent_id:'a',shift_real:1});
        assert.deepEqual(tree_shift(nodes, 1, 2), {i:1,parent_id:'a',shift_real:1});
    });
    it('should handle shift to the right #2', function () {
        const nodes = tree(`
            a
              b
            c
        `);
        assert.deepEqual(tree_shift(nodes, 0, 1), {i:0,parent_id:null,shift_real:0});
        assert.deepEqual(tree_shift(nodes, 1, 1), {i:1,parent_id:'a',shift_real:0});
        assert.deepEqual(tree_shift(nodes, 2, 1), {i:2,parent_id:'a',shift_real:1});
        assert.deepEqual(tree_shift(nodes, 2, 2), {i:2,parent_id:'b',shift_real:2});
        assert.deepEqual(tree_shift(nodes, 2, 3), {i:2,parent_id:'b',shift_real:2});
    });
    it('should handle shift to the right #3', function () {
        const nodes = tree(`
            a
              b
              c
            d
            e
        `);
        assert.deepEqual(tree_shift(nodes, 3, 1), {i:3,parent_id:'a',shift_real:1});
        assert.deepEqual(tree_shift(nodes, 3, 2), {i:3,parent_id:'c',shift_real:2});
    });
    it('should handle shift to the right #4 (i)', function () {
        const nodes = [
            {id:'a',parent_id:null},
            {id:'c',parent_id:null},
            {id:'b',parent_id:'a'},
        ];
        assert.deepEqual(tree_shift(nodes, 1, 1), {i:3,parent_id:'a',shift_real:1});
    });
    it('should handle shift to the right #5', function () {
        const nodes = [
            {id:'a',parent_id:null},
            {id:'b',parent_id:null},
            {id:'c',parent_id:'a'},
            {id:'d',parent_id:'a'},
            {id:'e',parent_id:'a'},
        ];
        assert.deepEqual(tree_shift(nodes, 1, 1), {i:5,parent_id:'a',shift_real:1});
        assert.deepEqual(tree_shift(nodes, 1, 2), {i:5,parent_id:'e',shift_real:2});
        assert.deepEqual(tree_shift(nodes, 1, 3), {i:5,parent_id:'e',shift_real:2});
    });
    it('should handle shift to the left #1', function () {
        const nodes = tree(`
            a
              b
                c
        `);
        assert.deepEqual(tree_shift(nodes, 0, -1), {i:0,parent_id:null,shift_real:0});
        assert.deepEqual(tree_shift(nodes, 1, -1), {i:1,parent_id:null,shift_real:-1});
        assert.deepEqual(tree_shift(nodes, 1, -2), {i:1,parent_id:null,shift_real:-1});
        assert.deepEqual(tree_shift(nodes, 2, -1), {i:2,parent_id:'a',shift_real:-1});
        assert.deepEqual(tree_shift(nodes, 2, -2), {i:2,parent_id:null,shift_real:-2});
        assert.deepEqual(tree_shift(nodes, 2, -3), {i:2,parent_id:null,shift_real:-2});
    });
    it('should handle shift to the left #2', function () {
        const nodes = tree(`
            a
              b
              c
              d
            e
            f
        `);
        assert.deepEqual(tree_shift(nodes, 2, -2), {i:2,parent_id:'a',shift_real:0});
    });
    it('should handle shift to the left #3', function () {
        const nodes = [
            {id:'a',parent_id:null},
            {id:'b',parent_id:null},
            {id:'c',parent_id:'a'},
            {id:'d',parent_id:'a'},
        ];
        assert.deepEqual(tree_shift(nodes, 3, -1), {i:1,parent_id:null,shift_real:-1});
    });
});

function tree(text)
{
    const out = tree_flatten(tree_from_string(text));
    out.forEach(v => delete v.name);
    return out;
}
