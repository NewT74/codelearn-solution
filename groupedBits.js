function groupedBits(n) {
    try {
        return n.toString(2).match(/1+/g).length;
    }
    catch {
        return 0;
    }
}
