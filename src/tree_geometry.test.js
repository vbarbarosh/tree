const tree_flatten = require('./tree_flatten');
const tree_from_string = require('./tree_from_string');
const tree_geometry = require('./tree_geometry');

describe('tree_geometry', function () {
    it('should handle empty arrays', function () {
        assert.deepEqual(tree_geometry([]), {});
    });
    it('should handle a single root', function () {
        assert.deepEqual(tree_geometry([{id: 'a'}]), {a: {depth: 0, index: 0, enter: 0, exit: 1}});
    });
    it('should handle flat siblings', function () {
        const a = tree(`
            a
            b
            c
        `);
        assert.deepEqual(tree_geometry(a), {
            a: {depth: 0, index: 0, enter: 0, exit: 1},
            b: {depth: 0, index: 1, enter: 1, exit: 2},
            c: {depth: 0, index: 2, enter: 2, exit: 3},
        });
    });
    it('should handle nesting', function () {
        const a = tree(`
            a
              b
                c
              d
            e
        `);
        assert.deepEqual(tree_geometry(a), {
            a: {depth: 0, index: 0, enter: 0, exit: 4},
            b: {depth: 1, index: 0, enter: 1, exit: 3},
            c: {depth: 2, index: 0, enter: 2, exit: 3},
            d: {depth: 1, index: 1, enter: 3, exit: 4},
            e: {depth: 0, index: 1, enter: 4, exit: 5},
        });
    });
    it('should depend only on sibling order, not global order', function () {
        const a = tree(`
            a
              b
                c
              d
            e
        `);
        // children before parents, interleaved — but a still before e,
        // and b still before d, so the geometry must be identical
        const shuffled = [a[2], a[1], a[0], a[3], a[4]];
        assert.deepEqual(tree_geometry(shuffled), tree_geometry(a));
    });
    it('should preserve sibling order from input', function () {
        const a = [{id: 'b'}, {id: 'a'}, {id: 'c'}];
        assert.equal(tree_geometry(a).b.index, 0);
        assert.equal(tree_geometry(a).a.index, 1);
        assert.equal(tree_geometry(a).c.index, 2);
    });
    it('should handle forward references', function () {
        const a = [{id: 'c', parent_id: 'b'}, {id: 'b', parent_id: 'a'}, {id: 'a'}];
        assert.deepEqual(tree_geometry(a), {
            a: {depth: 0, index: 0, enter: 0, exit: 3},
            b: {depth: 1, index: 0, enter: 1, exit: 3},
            c: {depth: 2, index: 0, enter: 2, exit: 3},
        });
    });
    it('should support is_ancestor via enter/exit', function () {
        const a = tree(`
            a
              b
                c
            d
        `);
        const g = tree_geometry(a);
        const is_ancestor = (x, y) => g[x].enter < g[y].enter && g[y].exit <= g[x].exit;
        assert.equal(is_ancestor('a', 'c'), true);
        assert.equal(is_ancestor('b', 'c'), true);
        assert.equal(is_ancestor('c', 'a'), false);
        assert.equal(is_ancestor('a', 'd'), false);
        assert.equal(is_ancestor('a', 'a'), false);
    });
    it('should support descendant counts via enter/exit', function () {
        const a = tree(`
            a
              b
                c
              d
            e
        `);
        const g = tree_geometry(a);
        console.log(g);
        assert.equal(g.a.exit - g.a.enter - 1, 3);
        assert.equal(g.b.exit - g.b.enter - 1, 1);
        assert.equal(g.e.exit - g.e.enter - 1, 0);
    });
    it('should not modify input rows', function () {
        const a = tree(`
            a
              b
        `);
        const snapshot = JSON.stringify(a);
        tree_geometry(a);
        assert.equal(JSON.stringify(a), snapshot);
    });
});

function tree(text)
{
    const out = tree_flatten(tree_from_string(text));
    for (const item of out) {
        delete item.name;
    }
    return out;
}
