function tree_walk_preorder2(ctx)
{
    ctx.stack = [];
    ctx.retval = null; // By default `null` will be returned
    tree_walk_preorder2_int(ctx);
    return ctx.retval;
}

function tree_walk_preorder2_int(ctx)
{
    let visit = true;
    let walk = true;
    let end = false;

    ctx.stack.push(ctx.node);

    if (typeof ctx.enter == 'function') {
        ctx.enter_retval = ctx.enter(ctx);
        switch (ctx.enter_retval) {
        case 'END':
            visit = false;
            walk = false;
            end = true;
            break;
        case 'SKIP':
            visit = false;
            walk = false;
            break;
        }
    }

    if (visit && typeof ctx.visit == 'function') {
        ctx.visit_retval = ctx.visit(ctx);
        switch (ctx.visit_retval) {
        case 'END':
            walk = false;
            end = true;
            break;
        case 'SKIP':
            walk = false;
            break;
        }
    }

    if (walk) {
        const children = ctx.node.children;
        for (let i = 0, ii = children.length; i < ii; ++i) {
            ctx.node = children[i];
            if (tree_walk_preorder2_int(ctx)) {
                end = true;
                break;
            }
        }
    }

    if (typeof ctx.leave == 'function') {
        ctx.leave_retval = ctx.leave(ctx);
        // noinspection EqualityComparisonWithCoercionJS
        if (ctx.leave_retval == 'END') {
            end = true;
        }
    }

    ctx.node = ctx.stack.pop();
    return end;
}

export default tree_walk_preorder2;
