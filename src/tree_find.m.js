import tree_find from './tree_find';
import tree_flatten from './tree_flatten';
import tree_from_string2 from './tree_from_string2';

describe('tree_find', function () {
    xit('should handle basic input', function () {
        assert.deepEqual(tree_find([], null, 0, 0), {i: 0, parent_id: null});
    });
    xit('should handle after #1', function () {
        const nodes = tree(`
            a
            b
            c
        `);
        assert.deepEqual(tree_find(nodes, nodes[0], 0), {i: 0, parent_id: null});
        assert.deepEqual(tree_find(nodes, nodes[0], 1), {i: 1, parent_id: null});
    });
    xit('should handle after #2', function () {
        const nodes = tree(`
            a
              b
            c
        `);
        assert.deepEqual(tree_find(nodes, nodes[0], 0), {i: 0, parent_id: null});
        assert.deepEqual(tree_find(nodes, nodes[0], 1), {i: 1, parent_id: 'a'});
    });
    xit('should handle after #3', function () {
        const nodes = tree(`
            a
              b
            c
        `);
        assert.deepEqual(tree_find(nodes, nodes[1], 0), {i: 1, parent_id: 'a'});
        assert.deepEqual(tree_find(nodes, nodes[1], 1), {i: 2, parent_id: 'a'});
    });
    it('should handle shift #1', function () {
        const nodes = tree(`
            a
            b
            c
        `);
        assert.deepEqual(tree_find(nodes, nodes[0], 1, 0), {i: 1, parent_id: null});
        assert.deepEqual(tree_find(nodes, nodes[0], 1, 1), {i: 1, parent_id: 'a'});
    });
    it('should handle shift #2', function () {
        const nodes = tree(`
            a
              b
            c
        `);
        assert.deepEqual(tree_find(nodes, nodes[0], 1, 0), {i: 1, parent_id: 'a'});
        assert.deepEqual(tree_find(nodes, nodes[0], 1, 1), {i: 1, parent_id: 'a'});
        assert.deepEqual(tree_find(nodes, nodes[0], 1, 2), {i: 1, parent_id: 'a'});
        assert.deepEqual(tree_find(nodes, nodes[1], 1, 0), {i: 2, parent_id: 'a'});
        assert.deepEqual(tree_find(nodes, nodes[1], 1, 1), {i: 2, parent_id: 'b'});
        // assert.deepEqual(tree_find(nodes, nodes[1], 1, 2), {i: 2, parent_id: 'b'});
        // assert.deepEqual(tree_find(nodes, nodes[2], 0, 1), {i: 2, parent_id: 'a'});
        // assert.deepEqual(tree_find(nodes, nodes[2], 0, 2), {i: 2, parent_id: 'b'});
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
