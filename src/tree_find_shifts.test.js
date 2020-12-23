import tree_find_shifts from './tree_find_shifts';
import tree_flatten from './tree_flatten';
import tree_from_string from './tree_from_string';

describe('tree_find_shifts', function () {
    it('should handle basic input', function () {
        assert.deepEqual(tree_find_shifts([], {}), {shift_left:[],shift_right:[]});
    });
    it('should handle input #1', function () {
        const nodes = tree(`
            a
            b
            c
        `);
        assert.deepEqual(tree_find_shifts(nodes, {i:0,parent_id:null}), {shift_left:[],shift_right:[]});
        assert.deepEqual(tree_find_shifts(nodes, {i:1,parent_id:null}), {shift_left:[],shift_right:[{i:1,parent_id:'a'}]});
        assert.deepEqual(tree_find_shifts(nodes, {i:2,parent_id:null}), {shift_left:[],shift_right:[{i:2,parent_id:'b'}]});
        assert.deepEqual(tree_find_shifts(nodes, {i:3,parent_id:null}), {shift_left:[],shift_right:[{i:3,parent_id:'c'}]});
    });
    it('should handle input #2', function () {
        const nodes = tree(`
            a
              b
            c
        `);
        assert.deepEqual(tree_find_shifts(nodes, {i:0,parent_id:null}), {shift_left:[],shift_right:[]});
        assert.deepEqual(tree_find_shifts(nodes, {i:1,parent_id:null}), {shift_left:[],shift_right:[{i:2,parent_id:'a'},{i:2,parent_id:'b'}]});
        assert.deepEqual(tree_find_shifts(nodes, {i:2,parent_id:'a'}), {shift_left:[{i:1,parent_id:null}],shift_right:[{i:2,parent_id:'b'}]});
    });
});

function tree(text)
{
    const out = tree_flatten(tree_from_string(text));
    out.forEach(v => delete v.name);
    return out;
}
