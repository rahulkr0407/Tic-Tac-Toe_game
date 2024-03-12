let num1=8
let num2=4

document.getElementById("num1").textContent=num1;
document.getElementById("num2").textContent=num2;

let sumEl=document.getElementById("sum")
function Add(){
    let res=num1+num2
    sumEl.textContent= "Sum: " + res;

}
function Sub(){
    let res=num1-num2
    sumEl.textContent= "Sub: " + res;
    
}
function Multiply(){
    let res=num1*num2
    sumEl.textContent= "Multiply: " + res;
    
}
function Div(){
    let res=num1/num2
    sumEl.textContent= "Div: " + res;
    
}