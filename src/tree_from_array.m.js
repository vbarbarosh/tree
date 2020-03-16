import tree_flatten from './tree_flatten';
import tree_from_array from './tree_from_array';

// tree_flatten(tree_from_string(tree_random()).children))
const valid = [
    [{"id":"root","parent_id":null},{"id":"eius","parent_id":"root"},{"id":"autem","parent_id":"eius"},{"id":"dolore","parent_id":"autem"},{"id":"blanditiis","parent_id":"autem"},{"id":"aliquid","parent_id":"autem"},{"id":"voluptatem","parent_id":"eius"},{"id":"tenetur","parent_id":"voluptatem"},{"id":"sint","parent_id":"voluptatem"},{"id":"ut","parent_id":"voluptatem"},{"id":"amet","parent_id":"eius"},{"id":"fugit","parent_id":"amet"},{"id":"unde","parent_id":"amet"},{"id":"quis","parent_id":"amet"},{"id":"aut","parent_id":"amet"},{"id":"architecto","parent_id":"amet"},{"id":"accusantium","parent_id":"root"},{"id":"eos","parent_id":"accusantium"},{"id":"vero","parent_id":"eos"},{"id":"voluptate","parent_id":"eos"},{"id":"veniam","parent_id":"eos"},{"id":"illo","parent_id":"eos"},{"id":"omnis","parent_id":"eos"},{"id":"consequatur","parent_id":"accusantium"},{"id":"quo","parent_id":"consequatur"},{"id":"sapiente","parent_id":"accusantium"},{"id":"illum","parent_id":"sapiente"},{"id":"reprehenderit","parent_id":"sapiente"},{"id":"iste","parent_id":"accusantium"},{"id":"officia","parent_id":"iste"},{"id":"natus","parent_id":"iste"},{"id":"quas","parent_id":"iste"},{"id":"sit","parent_id":"iste"},{"id":"qui","parent_id":"root"},{"id":"neque","parent_id":"qui"},{"id":"rerum","parent_id":"neque"},{"id":"fugiat","parent_id":"neque"},{"id":"enim","parent_id":"neque"},{"id":"in","parent_id":"neque"},{"id":"dolorem","parent_id":"qui"},{"id":"voluptas","parent_id":"dolorem"},{"id":"possimus","parent_id":"qui"},{"id":"cumque","parent_id":"possimus"},{"id":"facilis","parent_id":"possimus"},{"id":"asperiores","parent_id":"possimus"},{"id":"impedit","parent_id":"possimus"},{"id":"rem","parent_id":"qui"},{"id":"dicta","parent_id":"rem"},{"id":"et","parent_id":"rem"},{"id":"inventore","parent_id":"rem"},{"id":"vel","parent_id":"rem"},{"id":"voluptatum","parent_id":"root"},{"id":"laboriosam","parent_id":"voluptatum"},{"id":"magni","parent_id":"laboriosam"},{"id":"aspernatur","parent_id":"laboriosam"},{"id":"alias","parent_id":"laboriosam"},{"id":"dolor","parent_id":"laboriosam"},{"id":"beatae","parent_id":"voluptatum"},{"id":"sunt","parent_id":"beatae"},{"id":"ipsa","parent_id":"voluptatum"},{"id":"animi","parent_id":"ipsa"},{"id":"quia","parent_id":"root"},{"id":"laudantium","parent_id":"quia"},{"id":"sed","parent_id":"laudantium"},{"id":"est","parent_id":"laudantium"},{"id":"reiciendis","parent_id":"laudantium"},{"id":"repudiandae","parent_id":"laudantium"},{"id":"perspiciatis","parent_id":"quia"},{"id":"nisi","parent_id":"perspiciatis"}],
    [{"id":"root","parent_id":null},{"id":"eum","parent_id":"root"},{"id":"est","parent_id":"eum"},{"id":"et","parent_id":"est"},{"id":"deserunt","parent_id":"est"},{"id":"rerum","parent_id":"est"},{"id":"quod","parent_id":"eum"},{"id":"iste","parent_id":"quod"},{"id":"labore","parent_id":"eum"},{"id":"ducimus","parent_id":"labore"},{"id":"aut","parent_id":"eum"},{"id":"autem","parent_id":"aut"},{"id":"soluta","parent_id":"aut"},{"id":"atque","parent_id":"eum"},{"id":"dolorum","parent_id":"atque"},{"id":"delectus","parent_id":"atque"},{"id":"voluptas","parent_id":"atque"},{"id":"commodi","parent_id":"atque"},{"id":"quia","parent_id":"atque"},{"id":"eaque","parent_id":"root"},{"id":"ratione","parent_id":"eaque"},{"id":"repellendus","parent_id":"ratione"},{"id":"quasi","parent_id":"ratione"},{"id":"consequatur","parent_id":"ratione"},{"id":"voluptatem","parent_id":"ratione"},{"id":"itaque","parent_id":"root"},{"id":"omnis","parent_id":"itaque"},{"id":"quam","parent_id":"omnis"},{"id":"nisi","parent_id":"omnis"},{"id":"asperiores","parent_id":"omnis"},{"id":"magnam","parent_id":"omnis"},{"id":"qui","parent_id":"itaque"},{"id":"aliquid","parent_id":"qui"},{"id":"dolorem","parent_id":"qui"},{"id":"id","parent_id":"qui"},{"id":"iure","parent_id":"qui"},{"id":"ullam","parent_id":"qui"},{"id":"eos","parent_id":"itaque"},{"id":"quaerat","parent_id":"eos"},{"id":"velit","parent_id":"itaque"},{"id":"hic","parent_id":"velit"},{"id":"debitis","parent_id":"velit"},{"id":"odit","parent_id":"velit"},{"id":"in","parent_id":"velit"},{"id":"fugit","parent_id":"velit"},{"id":"iusto","parent_id":"root"},{"id":"fuga","parent_id":"iusto"},{"id":"numquam","parent_id":"fuga"},{"id":"quo","parent_id":"fuga"},{"id":"facilis","parent_id":"fuga"},{"id":"incidunt","parent_id":"fuga"},{"id":"cumque","parent_id":"root"},{"id":"sed","parent_id":"cumque"},{"id":"similique","parent_id":"sed"},{"id":"deleniti","parent_id":"sed"},{"id":"nesciunt","parent_id":"sed"},{"id":"explicabo","parent_id":"cumque"},{"id":"non","parent_id":"explicabo"},{"id":"expedita","parent_id":"explicabo"},{"id":"dolores","parent_id":"explicabo"},{"id":"sint","parent_id":"explicabo"},{"id":"accusamus","parent_id":"cumque"},{"id":"natus","parent_id":"accusamus"},{"id":"impedit","parent_id":"accusamus"},{"id":"molestias","parent_id":"accusamus"},{"id":"sequi","parent_id":"accusamus"},{"id":"ut","parent_id":"cumque"},{"id":"aliquam","parent_id":"ut"},{"id":"esse","parent_id":"ut"},{"id":"quae","parent_id":"ut"},{"id":"nihil","parent_id":"ut"},{"id":"officiis","parent_id":"cumque"},{"id":"ipsum","parent_id":"officiis"},{"id":"sapiente","parent_id":"officiis"},{"id":"temporibus","parent_id":"officiis"}],
    [{"id":"root","parent_id":null},{"id":"quam","parent_id":"root"},{"id":"nemo","parent_id":"quam"},{"id":"voluptate","parent_id":"nemo"},{"id":"numquam","parent_id":"nemo"},{"id":"qui","parent_id":"nemo"}],
    [{"id":"root","parent_id":null},{"id":"quam","parent_id":"root"},{"id":"quam2","parent_id":"root"},{"id":"nemo","parent_id":"quam"},{"id":"voluptate","parent_id":"nemo"},{"id":"numquam","parent_id":"nemo"},{"id":"qui","parent_id":"nemo"}],
];
Object.freeze(valid);

const circular = [
    [{id: 1, parent_id: 1}],
    [{id: 1, parent_id: 2}, {id: 2, parent_id: 1}],
    [{id: 1}, {id: 2, parent_id: 2}],
    [{id: 1}, {id: 2, parent_id: 3}, {id: 3, parent_id: 2}],
    [{id: 1}, {id: 2, parent_id: 3}, {id: 3, parent_id: 4}, {id: 4, parent_id: 2}],
    [{id: 1}, {id: 2, parent_id: 3}, {id: 3, parent_id: 4}, {id: 4, parent_id: 5}, {id: 5, parent_id: 2}],
];
Object.freeze(circular);

describe('tree_from_array', function () {
    it('should accept no arguments', function () {
        assert.deepEqual(tree_from_array(), []);
    });
    it('should accept empty array', function () {
        assert.deepEqual(tree_from_array([]), []);
    });
    it('should handle basic input №1', function () {
        const input = [{id: 1}, {id: 2, parent_id: 1}];
        const node1 = {id: 1, parent_id: null, parent: null, children: []};
        const node2 = {id: 2, parent_id: 1, parent: node1, children: []};
        node1.children.push(node2);
        assert.deepEqual(tree_from_array(input), [node1]);
    });
    it('should handle basic input №2', function () {
        const input = [{id: 2, parent_id: 1}, {id: 1}];
        const node1 = {id: 1, parent_id: null, parent: null, children: []};
        const node2 = {id: 2, parent_id: 1, parent: node1, children: []};
        node1.children.push(node2);
        assert.deepEqual(tree_from_array(input), [node1]);
    });
    it('should pass random test', function () {
        for (let i = 0, end = valid.length; i < end; ++i) {
            const t1 = obj_clone(valid[i]).sort(fcmp_nodes_id);
            const t2 = tree_flatten(tree_from_array(obj_clone(valid[i]))).sort(fcmp_nodes_id);
            assert.deepEqual(t1, t2);
        }
    });
    it('should throw "Circular dependency detected"', function () {
        for (let i = 0, end = circular.length; i < end; ++i) {
            const perm = array_permutations(circular[i]);
            for (let j = 0, jj = perm.length; j < jj; ++j) {
                assert.throws(() => tree_from_array(obj_clone(perm[j])), /Circular dependency detected/);
            }
        }
    });
    it('should throw "All rows should have unique ids" exception', function () {
        assert.throws(() => tree_from_array([{id: 1}, {id: 1}]), /All rows should have unique ids/);
    });
});

function fcmp_nodes_id(a, b)
{
    return String(a.id).localeCompare(b.id);
}

function obj_clone(object)
{
    return JSON.parse(JSON.stringify(object));
}

// https://stackoverflow.com/a/37580979/1478566
function array_permutations(items)
{
    const end = items.length;
    const result = [items.slice()];
    const c = new Array(end).fill(0);
    let i = 1;

    while (i < end) {
        if (c[i] < i) {
            const k = i % 2 && c[i];
            const p = items[i];
            items[i] = items[k];
            items[k] = p;
            ++c[i];
            i = 1;
            result.push(items.slice());
        }
        else {
            c[i] = 0;
            ++i;
        }
    }
    return result;
}
