#include <iostream>
#include <string>
#include <vector>
#include <queue>
#include <deque>
#include <algorithm>
#include <tuple>
#include <cmath>
using namespace std;
int N;
int S[20][20];
int visit[20] = { 0, };
int mini = -1;

void team(int idx, int n) {
	if (n == N / 2) {
		vector<int> ta; int suma = 0;
		vector<int> tb; int sumb = 0;
		for (int i = 0; i < N; i++) {
			if (visit[i] == 0) tb.push_back(i);
			else ta.push_back(i);
		}

		for (int i = 0; i < N/2; i++) {
			for (int j = 0; j < N/2; j++) {
				suma += S[ta[i]][ta[j]];
				sumb += S[tb[i]][tb[j]];
			}
		}

		if (mini == -1 || abs(suma - sumb) < mini) {
			mini = abs(suma - sumb);
		}
		return;
	}
	for (int i = idx; i < N; i++) {
		if (visit[i] == 0) {
			visit[i] = 1;
			team(i, n + 1);
			visit[i] = 0;
		}
	}
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);

	cin >> N;

	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			cin >> S[i][j];
		}
	}

	team(0,0);

	cout << mini;
}
