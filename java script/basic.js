
// print statement
console.log("soumya");
// alert & prompt

alert("hey this is a warning");//it gives a waring
let num = prompt("enter a number"); //it give a alert with input feature


//condinal statement

if(num<10){
    console.log(num);

}
else{
    console.log ("try again");
    
}

// loops in java script
//for loop
for(let i=1;i<=5;i++){
    console.log("hii soumya"); //5 times execute
}

//while loop
let i=1
while(i>1){
    console.log("hii");
    i+=1;
}

//do while loop
do{
    //work
}
while(i<1){
    //work
}

//for of loop
let str ="soumya"
for (let val of str){
    console.log(i);//automatic updation of i
    //print the characters of string
    //no condition to stop, automatic stop after string is over

}

//for in loop
let student={
    name:"soumya mittal",
    class:"btech cse",
    number:"9753721777"
}
for (let i in student){
    console.log(i);
    //it will give the key of object student like
    // name ,class,numbers

}
