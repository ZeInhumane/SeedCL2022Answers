#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int d, n;
    cin >> d >> n;
    vector<int> health(n);
    for (auto &c : health) {
        cin >> c;
    }
    int ans = 0;
    for (int ele : health) {
        ans += (ele + (d - 1)) / d;
    }
    cout << ans << "\n";
    return 0;
}