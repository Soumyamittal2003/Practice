#include<iostream>
using namespace std;

void printArray(int arr[],int n){
    for (int i=0;i<n;i++){
        cout<<arr[i] <<" ";
    }
    cout<<endl;
}


void reverse(int arr[],int n){
    int start =0;
    int end =n-1;
    while(start<=end){
        swap(arr[start],arr[end]);
        start++;
        end--;
    }
}


int main(){
    int arr[6]={0,4,0,5,4,15};
    int brr[5]={2,63,9,4,5};


    reverse(arr,6);
    reverse(brr,5);

    printArray(arr,6);
    printArray(brr,5);

}