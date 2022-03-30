#include <iostream>
using namespace std;
int parent[201];
int N, M;

int Find(int a) {
	if (parent[a] == a)return a;
	return parent[a] = Find(parent[a]);
}

void Union(int a, int b) {
	a = Find(a); b = Find(b);
	if (a == b) return;
	else if (a < b) parent[b] = a;
	else parent[a] = b;
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);

	cin >> N >> M;
	for (int i = 0; i <= N; i++) parent[i] = i;
	for (int i = 1; i <= N; i++) {
		for (int j = 1; j <= N; j++) {
			int t;
			cin >> t;
			if (t == 1) Union(i, j);
		}
	}
	int sta, des;
	bool canTrip = true;
	cin >> sta;
	for (int i = 1; i < M; i++) {
		cin >> des;
		if (!canTrip) break;
		if (Find(sta) != Find(des)) canTrip = false;
		des = sta;
	}

	if (canTrip) cout << "YES";
	else cout << "NO";
}
