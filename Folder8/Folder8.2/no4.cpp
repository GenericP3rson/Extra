#include <iostream>
#include <string>
#include <vector>
#include <sstream>
// #include <string.h>
using namespace std;

int has4(long int);
void go(long int);

void go(long int num) {
    char q[100];
    int t = sprintf(q, "%ld", num);
    // cout << t;
    string ans = "";
    string ori = "";
    for (int i = 0; i < t; ++i) {
        // cout << q[i] << " ";
        if (q[i] == '4') {
            ans+='1';
            ori+='3';
        } else {
            ans+='0';
            ori+=q[i];
        }
    }
    stringstream x(ans);
    int y = 0, z = 0;
    x >> y;
    stringstream j(ori);
    j >> z;
    cout << y << " " << z;
}

int main()
{
    int x, num;
    cin >> x;
    for (int i = 0; i < x; ++i)
    {
        cin >> num;
        cout << "Case #" << i+1 << ": ";
        go(num);
        cout << "\n";
    }
}