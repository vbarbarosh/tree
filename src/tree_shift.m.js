import tree_flatten from './tree_flatten';
import tree_from_string2 from './tree_from_string2';
import tree_shift from './tree_shift';

describe('tree_shift', function () {
    it('should handle empty arrays', function () {
        assert.deepEqual(tree_shift([], 0, 0), {i:0,parent_id:null});
    });
    it('should handle shift to the right #1', function () {
        const nodes = tree(`
            a
            b
            c
        `);
        assert.deepEqual(tree_shift(nodes, 0, 0), {i:0,parent_id:null});
        assert.deepEqual(tree_shift(nodes, 1, 1), {i:1,parent_id:'a'});
        assert.deepEqual(tree_shift(nodes, 1, 2), {i:1,parent_id:'a'});
    });
    it('should handle shift to the right #2', function () {
        const nodes = tree(`
            a
              b
            c
        `);
        assert.deepEqual(tree_shift(nodes, 0, 1), {i:0,parent_id:null});
        assert.deepEqual(tree_shift(nodes, 1, 1), {i:1,parent_id:'a'});
        assert.deepEqual(tree_shift(nodes, 2, 1), {i:2,parent_id:'a'});
        assert.deepEqual(tree_shift(nodes, 2, 2), {i:2,parent_id:'b'});
        assert.deepEqual(tree_shift(nodes, 2, 3), {i:2,parent_id:'b'});
    });
    it('should handle shift to the right #3 (i)', function () {
        const nodes = [
            {id:'a',parent_id:null},
            {id:'c',parent_id:null},
            {id:'b',parent_id:'a'},
        ];
        assert.deepEqual(tree_shift(nodes, 1, 1), {i:3,parent_id:'a'});
    });
    it('should handle shift to the left', function () {
        const nodes = tree(`
            a
              b
                c
        `);
        assert.deepEqual(tree_shift(nodes, 0, -1), {i:0,parent_id:null});
        assert.deepEqual(tree_shift(nodes, 1, -1), {i:1,parent_id:null});
        assert.deepEqual(tree_shift(nodes, 1, -2), {i:1,parent_id:null});
        assert.deepEqual(tree_shift(nodes, 2, -1), {i:2,parent_id:'a'});
        assert.deepEqual(tree_shift(nodes, 2, -2), {i:2,parent_id:null});
        assert.deepEqual(tree_shift(nodes, 2, -3), {i:2,parent_id:null});
    });
});

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
