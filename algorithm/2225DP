#include <iostream>
#include <string>
#include <vector>
#include <queue>
#include <deque>
#include <algorithm>
#include <tuple>
#include <cmath>
using namespace std;
int N, K;
long long d[201][201];

long long dynamic(int n, int k) {
	if (d[n][k] == 0) {
		for (int i = 0; i <= n; i++) {
			d[n][k] = (d[n][k] + dynamic(n - i, k - 1)) % 1000000000;
		}
	}
	return d[n][k];
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);

	cin >> N >> K;

	for (int i = 0; i <= N; i++) {
		d[i][1] = 1;
	}

	cout << dynamic(N, K);

}
