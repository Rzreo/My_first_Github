#include <iostream>
using namespace std;
int N, M;
int num[1025][1025] = { 0, };

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);

	cin >> N >> M;

	for (int i = 1; i <= N; i++) {
		for (int j = 1; j <= N; j++) {
			int k;
			cin >> k;

			num[i][j] = num[i - 1][j] + num[i][j - 1] - num[i - 1][j - 1] + k;
			
		}
	}


	int a1, a2, b1, b2;
	for (int i = 0; i < M; i++) {
		cin >> a1 >> a2 >> b1 >> b2;

		cout << num[b1][b2] + num[a1 - 1][a2 - 1] - num[a1 - 1][b2] - num[b1][a2 - 1] << "\n";
	}

}
