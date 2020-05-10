import tree_walk_preorder from './tree_walk_preorder.js';
import tree_walk_preorder_prefix from './tree_walk_preorder_prefix.js';

// noinspection NonAsciiCharacters
const prefix4 = {
    '├': '├── ',
    '│': '│   ',
    '└': '└── ',
    ' ': '    ',
};

function tree_print2({roots})
{
    return tree_walk_preorder({
        retval: '',
        roots,
        visit: function (ctx) {
            ctx.retval += tree_walk_preorder_prefix(ctx).map(v => prefix4[v]).join('') + (ctx.node.title||ctx.node.id) + '\n';
        },
    });
}

export default tree_print2;
