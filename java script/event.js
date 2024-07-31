// to change in the state of an object is known as event

//inline event 
let btn1 = document.querySelectorAll("#btn1");
btn1.onclick = () => {
    console.log("button was clicked")
}
// node.addEventListener(event,callback)
btn1.addEventListener("click", () => {

})