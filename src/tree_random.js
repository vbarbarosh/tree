import faker from 'faker';

function tree_random(depth = 3)
{
    const used = {};
    return 'root\n' + nodes(1, depth, used);
}

function nodes(depth, end, used)
{
    const lines = [];
    for (let i = 0, ii = Math.floor(Math.random()*5) + 1; i < ii; ++i) {
        let w;
        for (let j = 0; j < 50; ++j) {
            if (!used[w = faker.lorem.word()]) {
                break;
            }
        }
        if (used[w]) {
            throw new Error('No more unique words');
        }
        used[w] = true;
        lines.push(' '.repeat(depth*4) + w);
        if (depth < end) {
            lines.push(nodes(depth + 1, end, used));
        }
    }
    return lines.join('\n');
}

export default tree_random;
