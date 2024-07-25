const tree_flatten = require('./tree_flatten');
const tree_from_string = require('./tree_from_string');
const tree_resolve = require('./tree_resolve');

describe('tree_resolve', function () {
    it('should handle basic input', function () {
        assert.deepEqual(tree_resolve([], null, 0, 0), {i: 0, parent_id: null});
    });
    it('should handle after #1', function () {
        const nodes = tree(`
            a
            b
            c
        `);
        assert.deepEqual(tree_resolve(nodes, nodes[0], 0), {i: 0, parent_id: null});
        assert.deepEqual(tree_resolve(nodes, nodes[0], 1), {i: 1, parent_id: null});
    });
    it('should handle after #2', function () {
        const nodes = tree(`
            a
              b
            c
        `);
        assert.deepEqual(tree_resolve(nodes, nodes[0], 0), {i: 0, parent_id: null});
        assert.deepEqual(tree_resolve(nodes, nodes[0], 1), {i: 1, parent_id: 'a'});
    });
    it('should handle after #3', function () {
        const nodes = tree(`
            a
              b
            c
        `);
        assert.deepEqual(tree_resolve(nodes, nodes[1], 0), {i: 1, parent_id: 'a'});
        assert.deepEqual(tree_resolve(nodes, nodes[1], 1), {i: 2, parent_id: 'a'});
    });
    it('should handle shift #1', function () {
        const nodes = tree(`
            a
            b
            c
        `);
        assert.deepEqual(tree_resolve(nodes, nodes[0], 1, 0), {i: 1, parent_id: null});
        assert.deepEqual(tree_resolve(nodes, nodes[0], 1, 1), {i: 1, parent_id: 'a'});
    });
    it('should handle shift #2', function () {
        const nodes = tree(`
            a
              b
            c
        `);
        assert.deepEqual(tree_resolve(nodes, nodes[0], 1, 0), {i: 1, parent_id: 'a'});
        assert.deepEqual(tree_resolve(nodes, nodes[0], 1, 1), {i: 1, parent_id: 'a'});
        assert.deepEqual(tree_resolve(nodes, nodes[0], 1, 2), {i: 1, parent_id: 'a'});
        assert.deepEqual(tree_resolve(nodes, nodes[1], 1, 0), {i: 2, parent_id: 'a'});
        assert.deepEqual(tree_resolve(nodes, nodes[1], 1, 1), {i: 2, parent_id: 'b'});
        // assert.deepEqual(tree_resolve(nodes, nodes[1], 1, 2), {i: 2, parent_id: 'b'});
        // assert.deepEqual(tree_resolve(nodes, nodes[2], 0, 1), {i: 2, parent_id: 'a'});
        // assert.deepEqual(tree_resolve(nodes, nodes[2], 0, 2), {i: 2, parent_id: 'b'});
    });
    it('should handle tree with node refs to invalid nodes', function () {
        const nodes = [
            {id: 'i1', parent_id: null, text: 'a'},
            {id: 'i2', parent_id: null, text: 'aa'},
            {id: 'i6', parent_id: 'XXX', text: '22'},
            {id: 'i4', parent_id: 'XXX', text: 'c'},
            {id: 'i5', parent_id: 'i2', text: '11'},
            {id: 'i3', parent_id: 'i2', text: 'b'},
            {id: 'i7', parent_id: 'i2', text: '33'},
        ];
        assert.deepEqual(tree_resolve(nodes, {id:'i6'}, 1, 1), {i: 7, parent_id: 'i2'});
    });
});

function tree(text)
{
    const out = tree_flatten(tree_from_string(text));
    out.forEach(v => delete v.name);
    return out;
}
