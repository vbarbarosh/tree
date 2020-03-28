/**
 *
 * @param nodes
 * @param i
 * @param shift
 * @return {{i, parent_id}}
 */
function tree_shift(nodes, i, shift)
{
    if (nodes.length == 0) {
        return {i,parent_id:null};
    }

    let parent_id = nodes[i].parent_id;
    let reti = i;

    while (shift > 0) {
        // смещение вправо (только для не первого потомка)
        // войти внутрь предыдущего элемента и стать его последним потомком
        let j = reti;
        while (--j >= 0) {
            if (nodes[j].parent_id == parent_id) {
                // previous sibling was found
                parent_id = nodes[j].id;
                for (let ii = nodes.length; --ii >= 0; ) {
                    if (nodes[ii].parent_id == parent_id) {
                        reti = ii + 1;
                        break;
                    }
                }
                --shift;
                break;
            }
        }
        if (j == -1) {
            break;
        }
    }

    while (shift < 0) {
        let end = false;
        // смещение влево (только для последних потомков)
        // поменять родителя на деда и обновить позицию так, чтобы быть после своего текущего родителя
        for (let j = reti; ++j < nodes.length; ) {
            if (nodes[j].parent_id == parent_id) {
                end = true;
                break;
            }
        }
        if (end) {
            break;
        }
        end = true;
        for (let j = 0; j < nodes.length; ++j) {
            if (nodes[j].id == parent_id) {
                ++shift;
                if (j < reti) {
                    parent_id = nodes[j].parent_id;
                    end = false;
                    break;
                }
                reti = j + 1;
                parent_id = nodes[j].parent_id;
                end = false;
                break;
            }
        }
        if (end) {
            break;
        }
    }

    return {i: reti, parent_id};
}

export default tree_shift;
