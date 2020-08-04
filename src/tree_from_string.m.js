import tree_flatten from './tree_flatten';
import tree_from_string from './tree_from_string';

describe('tree_from_string', function () {
    it('should accept no arguments', function () {
        assert.deepEqual(tree_from_string(), {roots: [], nodes: [], nodes_map: {}});
    });
    it('should accept empty string', function () {
        assert.deepEqual(tree_from_string(''), {roots: [], nodes: [], nodes_map: {}});
    });
    it('should made ids unique', function () {
        const tree = tree_from_string(`
            foo
            foo
            foo
            bar
        `);
        const ids_map = {};
        tree.nodes.forEach(function (node) {
            assert(!ids_map[node.id]);
            ids_map[node.id] = true;
        });
    });
    it('should be no parent for root nodes', function () {
        tree_from_string(`foo\nbar\nbaz`).roots.forEach(v => assert(v.parent_id === null && v.parent === null));
    });
    it('should define parent_id for each node', function () {
        assert.deepEqual(tree_from_string(), {roots: [], nodes: [], nodes_map: {}});
    });
    it('should parse sample 1', function () {
        const input = `
            logo
                shapes
                    scale,rotate,color,layer_up,layer_down,delete
                scale
                rotate
                drop_shadow
                    enabled,distance,angle,opacity,blur
                inner_shadow
                    enabled,distance,angle,opacity,blur
            text
                scale
                rotate
                font
                color
                drop_shadow
                    enabled,distance,angle,opacity,blur
                inner_shadow
                    enabled,distance,angle,opacity,blur
                layer_up
                layer_down
                delete
            uploads
                scale
                rotate
                drop_shadow
                    enabled,distance,angle,opacity,blur
                inner_shadow
                    enabled,distance,angle,opacity,blur
                layer_up
                layer_down
                delete
            background
                transparent
                gradient_color
                solid_color
        `;
        const output = [
            {id: 'logo', parent_id: null, name: 'logo'},
            {id: 'shapes', parent_id: 'logo', name: 'shapes'},
            {id: 'scale', parent_id: 'shapes', name: 'scale'},
            {id: 'rotate', parent_id: 'shapes', name: 'rotate'},
            {id: 'color', parent_id: 'shapes', name: 'color'},
            {id: 'layer_up', parent_id: 'shapes', name: 'layer_up'},
            {id: 'layer_down', parent_id: 'shapes', name: 'layer_down'},
            {id: 'delete', parent_id: 'shapes', name: 'delete'},
            {id: 'scale2', parent_id: 'logo', name: 'scale'},
            {id: 'rotate2', parent_id: 'logo', name: 'rotate'},
            {id: 'drop_shadow', parent_id: 'logo', name: 'drop_shadow'},
            {id: 'enabled', parent_id: 'drop_shadow', name: 'enabled'},
            {id: 'distance', parent_id: 'drop_shadow', name: 'distance'},
            {id: 'angle', parent_id: 'drop_shadow', name: 'angle'},
            {id: 'opacity', parent_id: 'drop_shadow', name: 'opacity'},
            {id: 'blur', parent_id: 'drop_shadow', name: 'blur'},
            {id: 'inner_shadow', parent_id: 'logo', name: 'inner_shadow'},
            {id: 'enabled2', parent_id: 'inner_shadow', name: 'enabled'},
            {id: 'distance2', parent_id: 'inner_shadow', name: 'distance'},
            {id: 'angle2', parent_id: 'inner_shadow', name: 'angle'},
            {id: 'opacity2', parent_id: 'inner_shadow', name: 'opacity'},
            {id: 'blur2', parent_id: 'inner_shadow', name: 'blur'},
            {id: 'text', parent_id: null, name: 'text'},
            {id: 'scale3', parent_id: 'text', name: 'scale'},
            {id: 'rotate3', parent_id: 'text', name: 'rotate'},
            {id: 'font', parent_id: 'text', name: 'font'},
            {id: 'color2', parent_id: 'text', name: 'color'},
            {id: 'drop_shadow2', parent_id: 'text', name: 'drop_shadow'},
            {id: 'enabled3', parent_id: 'drop_shadow2', name: 'enabled'},
            {id: 'distance3', parent_id: 'drop_shadow2', name: 'distance'},
            {id: 'angle3', parent_id: 'drop_shadow2', name: 'angle'},
            {id: 'opacity3', parent_id: 'drop_shadow2', name: 'opacity'},
            {id: 'blur3', parent_id: 'drop_shadow2', name: 'blur'},
            {id: 'inner_shadow2', parent_id: 'text', name: 'inner_shadow'},
            {id: 'enabled4', parent_id: 'inner_shadow2', name: 'enabled'},
            {id: 'distance4', parent_id: 'inner_shadow2', name: 'distance'},
            {id: 'angle4', parent_id: 'inner_shadow2', name: 'angle'},
            {id: 'opacity4', parent_id: 'inner_shadow2', name: 'opacity'},
            {id: 'blur4', parent_id: 'inner_shadow2', name: 'blur'},
            {id: 'layer_up2', parent_id: 'text', name: 'layer_up'},
            {id: 'layer_down2', parent_id: 'text', name: 'layer_down'},
            {id: 'delete2', parent_id: 'text', name: 'delete'},
            {id: 'uploads', parent_id: null, name: 'uploads'},
            {id: 'scale4', parent_id: 'uploads', name: 'scale'},
            {id: 'rotate4', parent_id: 'uploads', name: 'rotate'},
            {id: 'drop_shadow3', parent_id: 'uploads', name: 'drop_shadow'},
            {id: 'enabled5', parent_id: 'drop_shadow3', name: 'enabled'},
            {id: 'distance5', parent_id: 'drop_shadow3', name: 'distance'},
            {id: 'angle5', parent_id: 'drop_shadow3', name: 'angle'},
            {id: 'opacity5', parent_id: 'drop_shadow3', name: 'opacity'},
            {id: 'blur5', parent_id: 'drop_shadow3', name: 'blur'},
            {id: 'inner_shadow3', parent_id: 'uploads', name: 'inner_shadow'},
            {id: 'enabled6', parent_id: 'inner_shadow3', name: 'enabled'},
            {id: 'distance6', parent_id: 'inner_shadow3', name: 'distance'},
            {id: 'angle6', parent_id: 'inner_shadow3', name: 'angle'},
            {id: 'opacity6', parent_id: 'inner_shadow3', name: 'opacity'},
            {id: 'blur6', parent_id: 'inner_shadow3', name: 'blur'},
            {id: 'layer_up3', parent_id: 'uploads', name: 'layer_up'},
            {id: 'layer_down3', parent_id: 'uploads', name: 'layer_down'},
            {id: 'delete3', parent_id: 'uploads', name: 'delete'},
            {id: 'background', parent_id: null, name: 'background'},
            {id: 'transparent', parent_id: 'background', name: 'transparent'},
            {id: 'gradient_color', parent_id: 'background', name: 'gradient_color'},
            {id: 'solid_color', parent_id: 'background', name: 'solid_color'},
        ];
        assert.deepEqual(tree_flatten(tree_from_string(input)), output);
    });
});
