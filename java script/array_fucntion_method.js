// arrays

let marks =[97,85,96,84,74];
console.log(marks);
typeof(marks);//o/p : object

marks.length();//display length =5
//array methods
marks.push(64);
console.log(marks);//adds 64 to last 
marks.pop()//delete the last elemnets

marks.unshift(100);//add 100 to start of array
marks.shift()//delete the 1st element
marks.slice(1,3);//display 1st &2nd elemnets of marks


// Functions & methods

//block of code that performs a specfic task 

//function defination
function sum(a,b){
    //do some work
    //here a,b are parameter & local varible
    console.log(a+b);
    return a+b;
}
//function call
sum(2,3);//here a,b are arguments


//method
//str.toUppercase , here toUppercase is method 
//a callback is function which execute for each elemnt in array
//callback is a function pased as an argument to another function


let arr=[1,2,3,4,5,6];
arr.forEach(fuction printVal(val) { //val itrrates in arr
    console.log("val");
});

//forEach is higger order function/higerorder method


// more methods in array

//map 
//filter - filters out based on the condition given like display even value
//reduce - performs some opration &reduce the array to a single value
