#include<iostream>
#include<math.h>

using namespace std;

int main(){
    int n=10;
    cout<<"enter the digit ";
    cin>>n;
    int ans=0;
    int i=0;
    while(n!=0){
        int digit = n&1;
        ans= (digit * pow(10,i)) + ans;
        n=n>>1;
        i++;
    }
    cout<<"binary of your digit is :"<<ans<<endl;

}