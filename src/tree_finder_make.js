const array_index = require('./array_index');
const tree_pointer_shift = require('./tree_pointer_shift');

function tree_finder_make(ctx)
{
    ctx.selection_map = array_index(ctx.selection, v => v.id);

    ctx.i = null;
    ctx.parent_id = null;
    ctx.shift_width = ctx.shift_width || 50;
    ctx.update = (...args) => update(ctx, ...args);
    return ctx;
}

function update(ctx, x, y, container_rect = ctx.container_rect)
{
    if (ctx.i === null) {
        // Update for the first time
        const closest = rects_closest_y(ctx.node_rects, y);
        ctx.x0 = x;
        ctx.y0 = y;
        ctx.xx0 = ctx.node_rects[closest.i].x;
        ctx.container_rect0 = container_rect;
    }

    ctx.dx = x - ctx.x0;
    ctx.dy = y - ctx.y0;
    ctx.container_rect = container_rect;

    const sx = ctx.container_rect0.x - ctx.container_rect.x;
    const sy = ctx.container_rect0.y - ctx.container_rect.y;
    x += sx;
    y += sy;

    const closest_i = numbers_closest_i_first(ctx.node_rects.map(v => v.y).concat(ctx.container_rect0.y+ctx.container_rect.h), y);
    console.log('closest_i', closest_i);
    const closest_rect = ctx.node_rects[closest_i] || {
        x: (ctx.node_rects[numbers_min_i_first(ctx.node_rects.map(v => v.y))]||ctx.container_rect0).x,
        y: ctx.container_rect0.y + ctx.container_rect.h,
        w: ctx.container_rect0.w,
        h: 0,
        node: null,
    };
    const closest_node_i = ctx.nodes.indexOf(closest_rect.node);
    const shift = Math.round((ctx.xx0 - closest_rect.x + ctx.dx)/ctx.shift_width);

    // XXX is_position_allowed should be called on each update

    const i = (closest_node_i==-1?ctx.nodes.length:closest_node_i);
    const tmp = tree_pointer_shift(ctx.nodes, ctx.selection_map, i, shift, ctx.is_shift_allowed);
    ctx.i = tmp.i;
    ctx.parent_id = tmp.parent_id;
    ctx.shift = tmp.shift_happened;

    return {
        x: closest_rect.x + ctx.shift*ctx.shift_width - sx,
        y: closest_rect.y - sy,
        w: closest_rect.w - ctx.shift*ctx.shift_width,
        h: closest_rect.h,
        before: true,
        shift: ctx.shift,
        node: ctx.nodes[closest_node_i] || null,
        i: ctx.i,
        parent_id: ctx.parent_id,
    };
}

function numbers_min_i_first(numbers)
{
    let min_d = Number.MAX_VALUE;
    let min_i = 0;
    for (let i = 0, end = numbers.length; i < end; ++i) {
        const v = numbers[0];
        if (min_d > v) {
            min_d = v;
            min_i = i;
        }
    }
    return min_i;
}

/**
 * Returns the index of the first closest number.
 *
 * @param numbers
 * @param v
 * @returns {number}
 */
function numbers_closest_i_first(numbers, v)
{
    let min_d = Number.MAX_VALUE;
    let min_i = 0;
    for (let i = 0, end = numbers.length; i < end; ++i) {
        const d = Math.abs(v - numbers[i]);
        if (min_d > d) {
            min_d = d;
            min_i = i;
        }
    }
    return min_i;
}

// Find a rectangle closest to a point.
//
// 1) Prefer those intersected by a point
// 2) Use only y coordinates
//
// +--------+
// | rect 1 |
// +--------+
// | rect 2 |
// +--------+
//
function rects_closest_y(rects, y)
{
    let inside = null;
    let outside = null;
    for (let i = 0, end = rects.length; i < end; ++i) {
        const r = rects[i];
        const top = r.y;
        const bottom = r.y + r.h;
        if (y >= top && y < bottom) {
            // Point is inside. This is preferable rectangle.
            const d1 = y - top;
            const d2 = bottom - y;
            if (inside === null) {
                if (d1 <= d2) {
                    inside = {i, r, d1, d2, top: true, bottom: false};
                }
                else {
                    inside = {i, r, d1, d2, top: false, bottom: true};
                }
                continue;
            }
            // Preferable rectangle was already found.
            // Check if this one is more suitable.
            if (d1 <= d2) {
                // Top side is closer to a cursor
                if (inside.top && inside.d1 > d1) {
                    // Top of a new rectangle is closer to a cursor
                    inside = {i, r, d1, d2, top: true, bottom: false};
                    continue;
                }
                if (inside.bottom && inside.d2 > d1) {
                    inside = {i, r, d1, d2, top: true, bottom: false};
                    continue;
                }
                // Previously found rect has border closer to a cursor
            }
            else {
                // Bottom side is closer to a cursor
                if (inside.top && inside.d1 > d2) {
                    inside = {i, r, d1, d2, top: false, bottom: true};
                    continue;
                }
                if (inside.bottom && inside.d2 > d2) {
                    inside = {i, r, d1, d2, top: false, bottom: true};
                    continue;
                }
                // Previously found rect has border closer to a cursor
            }
            continue;
        }
        if (inside !== null) {
            // Point is outside of a current rect.
            // But preferable rect was already found.
            // Ignore this one.
            continue;
        }
        const d1 = Math.abs(top - y);
        const d2 = Math.abs(bottom - y);
        if (outside === null) {
            if (d1 <= d2) {
                outside = {i, r, d1, d2, top: true, bottom: false};
            }
            else {
                outside = {i, r, d1, d2, top: false, bottom: true};
            }
            continue;
        }
        if (d1 <= d2) {
            if (outside.top && outside.d1 > d1) {
                outside = {i, r, d1, d2, top: true, bottom: false};
                continue;
            }
            if (outside.bottom && outside.d2 > d1) {
                outside = {i, r, d1, d2, top: true, bottom: false};
            }
        }
        else {
            if (outside.top && outside.d1 > d2) {
                outside = {i, r, d1, d2, top: false, bottom: true};
                continue;
            }
            if (outside.bottom && outside.d2 > d2) {
                outside = {i, r, d1, d2, top: false, bottom: true};
            }
        }
    }
    return inside || outside;
}

module.exports = tree_finder_make;
