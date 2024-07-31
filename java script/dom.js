// window object - pre build object


// DOM - document is availble in window object
//complete html is present in dom

console.dir(document); // complete document is access

// with the help of dom we can dynamically change every elment 

// Dom Manipulation or DOM selection

//selecting by id , we need to put #
document.getElementById("#001");

//selecting by class we need to put .
document.getElementsByClassName(".heading")

//selecting by tag name
document.getElementsByTagName("h1");

//all method combine . for class # for id
document.querySelectorAll()

//execution
let h =document.getElementsByClassName("heading");
console.dir(h);
console.log(h);
