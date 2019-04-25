#include <iostream>
#include <fstream>
#include <vector>
#include <string>
// I mean, I'm assuming we'll be using fstream for, like, reading the files and everything...
using namespace std;

// Hey, Sarah... do you want to use a CLASS???

// All the functions we plan to use:
/*vector<vector<string> >*/ void lexer(vector<string>); 
// The output format: {{"token", "value"}, {"token", "value"}, ... , {"token", "value"}};
// The input is just a vector of each line? I'm doing each line because it seems easier... I'll work for now till you show up...

void /*vector<vector<string> >*/ lexer(vector<string> code) {
    // So... we can't quite use a .split as far as I can tell... Let's do it more basically...
    // Um... I sort of want you when determining the syntax...
    for (int i = 0; i < code.size(); ++i) {
        cout << code[i];
    }
    vector<vector<string> > key = {{"variable", "set", "sar"}, {"function", ""}};
}

int main() {
    vector<string> code;
    string path, data;
    cout << "Enter the file path: ";
    cin >> path;
    ifstream fin(path);
    while (getline(fin, data)) {
        // cout << data << endl;
        code.push_back(data);
    }
    lexer(code);
    // for (int i = 0; i < code.size(); ++i) cout << code[i] << endl;
}