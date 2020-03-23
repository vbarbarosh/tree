import tree_flatten from './tree_flatten';
import tree_from_string2 from './tree_from_string2';
import tree_insert from './tree_insert';

describe('tree_insert', function () {
    it('should handle empty arrays', function () {
        const tmp = [];
        tree_insert(tmp, []);
        assert.deepEqual(tmp, []);
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
