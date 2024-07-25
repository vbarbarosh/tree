const tree_walk_preorder = require('./tree_walk_preorder');
const tree_walk_preorder_prefix = require('./tree_walk_preorder_prefix');

// noinspection NonAsciiCharacters
const prefix4 = {
    '├': '├── ',
    '│': '│   ',
    '└': '└── ',
    ' ': '    ',
};

function tree_print({roots})
{
    return tree_walk_preorder({
        retval: '',
        roots,
        visit: function (ctx) {
            ctx.retval += tree_walk_preorder_prefix(ctx).map(v => prefix4[v]).join('') + (ctx.node.title||ctx.node.id) + '\n';
        },
    });
}

module.exports = tree_print;
