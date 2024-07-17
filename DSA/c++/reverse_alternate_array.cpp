#include<iostream>
using namespace std;

void reverse_alt(int arr[],int n){
    for(int i=0;i<n;i+=2){
        if(i+1 < n){
            swap(arr[i],arr[i+1]);
        }
    }

}

void printArray(int arr[],int n){
    for(int i=0;i<n;i++){
        cout<<arr[i]<< " ";

    }
    cout<<endl;
}


int main(){

    int arr[6]={5,6,8,9,2,1};

    reverse_alt(arr,6);

    printArray(arr,6);

}