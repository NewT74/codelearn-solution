function playList(arr) {
    let list = new Map(),
        result = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (i == arr.length || list.has(arr[i])) {
            i = list.get(arr[i]);
            result = Math.max(list.size, result);
            list.clear();
        } else list.set(arr[i], i);
    }
    return result;
}
