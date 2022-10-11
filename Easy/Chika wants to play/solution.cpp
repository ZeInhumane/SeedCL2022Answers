//
// Created by 寒词 ZhuoFan on 2022/2/27.
//

#include <iostream>

using namespace std;

int main(){
    char str[500];
    cin.getline(str,500);
    int start=0,end=0;
    for (int i=0;i<strlen(str);i++){
        if (str[i]==' '){
            end=i-1;
            for (int j=end;j>=start;j--){
                cout<<str[j];
            }
            cout<<' ';
            start=i+1;
        }
    }
    for (int j=strlen(str)-1;j>=start;j--){
        cout<<str[j];
    }
}
