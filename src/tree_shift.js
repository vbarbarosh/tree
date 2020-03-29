/**
 * Вычисляет новое положение узла после его смещения влево либо вправо.
 *
 * @param {Array<{id:string,parent_id:string|null}>} nodes
 * @param {Number} i
 * @param {Number} shift
 * @param {Function} is_shift_allowed
 * @return {{i, parent_id}}
 */
function tree_shift(nodes, i, shift, is_shift_allowed = () => true)
{
    if (nodes.length == 0) {
        return {i,parent_id:null};
    }

    let shift_real = 0;
    let parent_id = (i==nodes.length)  ? null : nodes[i].parent_id;
    let reti = i;

    while (shift > 0) {
        // смещение вправо (только для не первого потомка)
        // войти внутрь предыдущего элемента и стать его последним потомком
        let i_sibl = reti;
        while (--i_sibl >= 0) {
            if (nodes[i_sibl].parent_id == parent_id) {
                // previous sibling was found
                if (!is_shift_allowed(i_sibl, nodes)) {
                    // its not allowed to shift into it
                    i_sibl = -1;
                    break;
                }
                parent_id = nodes[i_sibl].id;
                for (let ii = nodes.length; --ii >= 0; ) {
                    if (nodes[ii].parent_id == parent_id) {
                        reti = ii + 1;
                        break;
                    }
                }
                --shift;
                ++shift_real;
                break;
            }
        }
        if (i_sibl == -1) {
            break;
        }
    }

    // смещение влево (только для последних потомков)
    // поменять родителя на деда и обновить позицию так,
    // чтобы быть после своего текущего родителя, но перед его следующим братом
    while (shift < 0) {
        let end = false;
        // 1) нужно найти следующий элемент
        for (let j = reti; ++j < nodes.length; ) {
            if (nodes[j].parent_id == parent_id) {
                // 2) если таковой найден - конец
                end = true;
                break;
            }
        }
        if (end) {
            break;
        }
        end = true;
        // 3) нужно найти своего родителя
        // 4) если его нет - конец
        for (let i_parent = 0; i_parent < nodes.length; ++i_parent) {
            if (nodes[i_parent].id == parent_id) {
                ++shift;
                --shift_real;
                // 5) если он находится передо мной, тогда мое место остается
                //    тем же (только если его сл. брат после меня); а мой дед
                //    становится моим родителем
                if (i_parent < reti) {
                    parent_id = nodes[i_parent].parent_id;
                    // The following is just an optimization to keep reti.
                    // It is always safe to use `reti=j+1`.
                    for (let k = i_parent; ++k < reti; ) {
                        if (nodes[k].parent_id == parent_id) {
                            reti = k;
                            break;
                        }
                    }
                    end = false;
                    break;
                }
                // 6) иначе (он находится после меня), мое место будет сразу
                //    после него; а мой дед становится моим родителем
                reti = i_parent + 1;
                parent_id = nodes[i_parent].parent_id;
                end = false;
                break;
            }
        }
        if (end) {
            break;
        }
    }

    return {i: reti, parent_id, shift_real};
}

export default tree_shift;
