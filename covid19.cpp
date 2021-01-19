bool history[1000001];

vector<int> covid19(vector<vector<int>> arr) {
    vector<int> result(4);
    history[0] = true;
    unordered_set <int> f1, f2, f3, f4;
    set <int> f;
    auto found = [&](vector<int> day) -> int {
        f.clear();
        for (int &person: day) {
            if (person == 0) return 0;
            else if (f1.find(person) != f1.end()) f.insert(1);
            else if (f2.find(person) != f2.end()) f.insert(2);
            else if (f3.find(person) != f3.end()) f.insert(3);
        }
        return f.size() != 0 ? * f.begin() : -1;
    };
    for (vector<int> &day: arr) {
        int f = found(day);
        if (f != -1) {
            for (int &person: day) {
                if (!history[person]) {
                    if (f == 0) f1.insert(person);
                    else if (f == 1) f2.insert(person);
                    else if (f == 2) f3.insert(person);
                    else if (f == 3) f4.insert(person);
                    history[person] = true;
                }
            }
        }
    }
    result[0] = f1.size();
    result[1] = f2.size();
    result[2] = f3.size();
    result[3] = f4.size();
    return result;
}
