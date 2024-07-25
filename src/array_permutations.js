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

module.exports = array_permutations;
