function migratoryBirds(list_of_birds) {
    let birds = {},
        max = 0,
        result = [];
    for(const id of list_of_birds) {
        birds[id] === undefined ? birds[id] = 1 : birds[id]++;
        if(birds[id] > max) {
            max = birds[id];
            result = [id];
        }
        else if(birds[id] == max) {
            result.push(id);
        }
    }
    return Math.min(...result);
}
