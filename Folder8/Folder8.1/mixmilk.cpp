/*
ID: schaudhary
TASK: mixmilk
LANG: C++
*/
#include <iostream>
#include<fstream>
#include<string>

using namespace std;

int main() {
    int pre, nex, sum;
    ofstream fout("mixmilk.out");
    ifstream fin("mixmilk.in");
    // int cap[3], am[3];
    int all[3][2];
    // fin >> cap[0] >> am[0] >> cap[1] >> am[1] >> cap[2] >> am[2]; // √
    fin >> all[0][0] >> all[0][1] >> all[1][0] >> all[1][1] >> all[2][0] >> all[2][1];
    // int i = 0;
    // cout << all[i%3][1] + all[(i+1)%3][1];
    for (int i = 0; i < 100; i++) {
        pre = i%3;
        nex = (i+1)%3;
        sum = all[pre][1] + all[nex][1];
        if (sum > all[nex][0]) {
            all[pre][1] = sum-all[nex][0];
            all[nex][1] = all[nex][0];
        } else {
            all[nex][1] += all[pre][1];
            all[pre][1] = 0;
        }
    }
    fout << all[0][1] << "\n" << all[1][1] << "\n" << all[2][1] << "\n";
}