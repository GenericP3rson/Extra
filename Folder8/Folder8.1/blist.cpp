#include<iostream>
#include<fstream>
#include<string>
#include<vector>

using namespace std;

int main() {
    ifstream fin("blist.in");
    ofstream fout("blist.out");
    int iter;
    int x = 0;
    bool add;
    vector<int[3]>att;
    fin >> iter;
    int ok[iter][3];
    for (int i = 0; i < iter; i++) {
        fin >> ok[i][0] >> ok[i][1] >> ok[i][2];
        cout << ok [i][0] << ok[i][1] << ok[i][2] << endl;
    }
    // for (int i = 0; i < iter; i++) {
    //     x = 0;
    //     add = true;
    //     while (x < att.size()) {
    //         if (att[x][0] <= ok[i][0] || att[x][0] >= ok[i][0]) add = false; break;
    //         x++;
    //     }
    //     if (add) att.push_back(ok[i]);
    // }
    cout << att.size();
}