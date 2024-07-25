function tree_random(depth = 3, random_word = () => faker.lorem.word)
{
    const used = {};
    return nodes(1, depth, used, random_word);
}

function nodes(depth, end, used, random_word)
{
    const lines = [];
    for (let i = 0, ii = Math.floor(Math.random()*5) + 1; i < ii; ++i) {
        let w;
        for (let j = 0; j < 50; ++j) {
            if (!used[w = random_word()]) {
                break;
            }
        }
        if (used[w]) {
            throw new Error('No more unique words');
        }
        used[w] = true;
        lines.push(' '.repeat(depth*4) + w);
        if (depth < end) {
            lines.push(nodes(depth + 1, end, used, random_word));
        }
    }
    return lines.join('\n');
}

module.exports = tree_random;
