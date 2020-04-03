function tree_walk_preorder(ctx)
{
    ctx.stack = ctx.stack || [];
    for (let i = 0, end = ctx.roots.length; i < end; ++i) {
        ctx.node = ctx.roots[i];
        if (tree_walk_preorder_int(ctx)) {
            break;
        }
    }
    return ctx.retval;
}

function tree_walk_preorder_int(ctx)
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
            if (tree_walk_preorder_int(ctx)) {
                end = true;
                break;
            }
        }
    }

    ctx.node = ctx.stack.pop();

    if (typeof ctx.leave == 'function') {
        ctx.leave_retval = ctx.leave(ctx);
        // noinspection EqualityComparisonWithCoercionJS
        if (ctx.leave_retval == 'END') {
            end = true;
        }
    }

    return end;
}

export default tree_walk_preorder;
