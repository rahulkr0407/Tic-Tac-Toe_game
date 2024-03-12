// const author="rahul"
// let author="annjdsjdas"
//console.log("Hey guys welcome to my javascript session")
// let a ="Rahul"
// console.log(a)
//  a=23
// console.log(a) 
// console.log("var,let,const")
// const rahul_age=23;
// // console.log(rahul_age)

// let a=null;
// let b=345;
// let c=true;
// let d=BigInt("34567")
// let e="Rahul"
// let f=Symbol("I am a nice person")
// let g

// console.log(a,b,c,d,e,f)
// console.log(typeof g)

// const student = {
//     name :"Rahul",
//     idNo : 12018767,
//     "company":undefined    
// }
// console.log(student["company"])

//PRACTISE SET1 *****************************PRACTISE SET1

// Q1.create a string and try to add a number----------------

//   let a="Rahul"
//  let b=4
//  console.log(a+b)

//Q2.find type of operator using typeof operator function-----------------

//  console.log(typeof (a+b))

//Q3.create const object -------------------------------

// const c={
//     name:"rahul",
//     rollno:69,
   
// }
// c="Kumar"  //can't do this 


//Q4.Add a new key in Q3.----------------------

// c['friend']="manish"//we can change the object but cant create and  add new object.
// c['name']="anuj"
// can not do this c=45.
// console.log(c)


//Q5. write a js program for word meaning dictionary.-----------------

// const dict={
//     ataraxia:"a state of freedom from emotional  disturbance and anxiety",
//      yakka:"hard work"

// }
// console.log(dict.yakka)  // to access the object .
//OR
//console.log(dict['yakka'])

///***************LECTURE-SIX(6)***********///////////

// console.log("operators in js")

//Arithmetic operator
// let a=25;
// let b=4;
// console.log("a + b =", a+b)
// console.log("a - b =", a-b)
// console.log("a / b =", a/b)
// console.log("a ** b =", a**b)
// console.log("a % b =", a%b)
// console.log("++a = ", ++a)
// console.log("a++ = ", a++)
// console.log("a = ", a)
// console.log("a-- =", a--)
// console.log("--a =", --a) 

//Assingement Operators
// let a =8;
// a+=7;
// console.log(a)
// a-=2;
// console.log(a)
// a*=3;
// console.log(a)
// a/=2;
// console.log(a)
// a%=2;
// console.log(a)
// a**=2;
// console.log(a)

//Comparsion operator

// let a1=6;
// let a2=7;
// console.log(a1 == a2)
// console.log(a1 != a2)
// console.log(a1 === a2)
// console.log(a1 !== a2)

//Logical Operators

//  let x=5;
//  let y=7;
//  console.log(x<y && x==5)
//  console.log(x>y || x==5)
//  console.log(!false)
//  console.log(!true)

// prompt("Hey, what's your age?");
// /*m = Number.parseInt(m);

// if (!isNaN(m) &&   m > 0) {
//     alert("This is a valid age.");
// } else {
//     alert("Invalid input. Please enter a valid age as a number.");
// }

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Hey, what\'s your age? ', (answer) => {
//   let m = Number.parseInt(answer);
  
//   if (!isNaN(m) && m > 0 && m<=120) {
//     console.log("This is a valid age.");
//   } else {
//     console.log("Invalid input. Please enter a valid age as a number.");
//   }

//   rl.close();
// });

// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

/*
Questionn 1  ------------------------------------------

let age=prompt("Enter your age?") // us it on in browser javaScript.
age = Number.parseInt(age)
if(age>10 && age<20){
  console.log("Your age valid ")
}else {
  console.log("Your age is invalid ")
} */

// let age =prompt("Enter your age ?")
// switch(age){
//   case 1:
//     console.log("Your age is 10")
//     break;
//   case 2:
//     console.log("Your age is 14")
//   case 3:
//     console.log("Your age is 18")
//   case 4:
//     console.log("Your age is 22")
//   case 5:
//     console.log("Your age is 26")
//     break;
//     default:
//       console.log("Your age is  not Special")
// }

//Question 3.------------------------------------------------
/*

let num =prompt("Enter your age ?")
num = Number.parseInt(num)
if(num % 2==0 && num % 3 == 0){

  console.log("Your number is divisble by 6")
}
else{
  console.log("Your number is not divisble by 6")
}
*/

/*
let num =prompt("Enter your age ?")
num = Number.parseInt(num)
if(num % 2==0 || num % 3 == 0){

  console.log("Your number is divisble by 6")
}
else{
  console.log("Your number is not divisble by 6")
}
*/
//problem no 4_----------------------------
/*
let age=45
//using terniary operator if 1st is right print first else second one .
let a=age>18? "You can drive" : "you cannot  drive"

console.log(a) */


// loops ---------//use lops for repeated action 
//use var value 
// let sum=0;
// let n = prompt("Enter value of n")
// n=Number.parseInt(n)
// for(var i=0; i<n;i++){
//   sum+=i
  
// }
// console.log("sum of first" +n+ "natural number is " +sum)
// console.log(i)
//input 4 output 10

//************************************************* */

//use let value ********************
// let sum=0;
// let n = prompt("Enter value of n")
// n=Number.parseInt(n)
// for(let  i=0; i<n;i++){
//   sum+=i
  
// }
// console.log("sum of first" +n+ "natural number is " +sum)
// console.log(i)

//output-:i is not defiend //



// let obj = {
//   rahul :98,
//   Nikhil:80,
//   Sumit:90

// }  ---//for in loop---------//
//    for(let  a  in  obj ){
//   console.log(a +  obj[a])
// }

// //for of loop *********************
// for(let b of "rahul"){
//   console.log(b)
// }



//while loop*********************
// let n=prompt("enter a value n")
// n=Number.parseInt(n)

// let i=0;
// while(i<n)
// {
//   console.log(i)
//   // i++;
// }

//do while loop ****************************
// let n=prompt("enter a value n")
// n=Number.parseInt(n)

// let i=0;

// do
// {
//   console.log(i)
//   i++;
// }while(i<n)

// Functions --------------------------//**************** */

// const hello = () =>{// Arrow Function.
//   console.log("hey how are you .are you fine ?")
// }
// function onePlusSum(x,y){
//   console.log("Done")
//   return  1+(x+y)
// }
// const sum =(p,q)=>{
//   return p+q
// }
// let a=1;
// let b=2;
// let c=3;
// hello(); 

//  console.log("Sum of a and b is " ,onePlusSum(a,b))
//  console.log("Sum of a and b is " ,onePlusSum(b,c))
//  console.log("Sum of a and b is " ,onePlusSum(a,c))
//  console.log(sum(6,9))



//--------------------------STRINGS-------------------------------------//
//properties and method 
//String first index start from 0.
//  let name=' Rahul ' //total 6 characters it look like there are  7 characters but there are only 6
//  let name2='madhu'
 
//  console.log(name.length)
//  console.log(name.toUpperCase())
//  console.log(name.toLowerCase())
//  console.log(name.slice(2,4))
//  console.log(name.slice(2))
//  console.log(name.replace("Ra" , "Me"))
//  console.log(name.concat(" loves ", name2 ))
//  console.log(name.trim())





// Template Literals

// use backtik
// let boy1="Pramod"
// let boy2="Rahul"
// let sentence=`${boy1} is a friend of ${boy2}`
// console.log(sentence)


// Escape Sequence Charcaters

// let  fruit='Bana\'na'//escape sequence single character
// let  frui='Bana\nna'//new line
// let  fruits='Bana\tna'//tab
// let  fru='Bana\rna'//carriage return 
// console.log(fruit)
// console.log(frui)
// console.log(fruits)
// console.log(fru)

// let fr="Shiva" + "Parvati" 
// console.log(fr[0])
// console.log(fr[1])
// console.log(fr[2])
// console.log(fr[3])
// fr[3]="b"//this is not possible 
// console.log(fr[4])
// console.log(fr)
 
//------------********Array****----------------//
//mutable --> can hold more than one  value.

// let marks_class_12=[91, 87, 76, 93,false,"Not Present"]

// console.log("The length of marks_class_12 is" , marks_class_12.length)

// console.log(marks_class_12[2])
// console.log(marks_class_12[0])
// console.log(marks_class_12[1])
// console.log(marks_class_12[2])
// console.log(marks_class_12[3])
// console.log(marks_class_12[4])
// console.log(marks_class_12[5])
// console.log(marks_class_12[6]) // will be undefiend because index 6 not-defiend 
// marks_class_12[6]=89//Adding a new value to the array
// marks_class_12[0]=96
// console.log(marks_class_12)
// console.log(typeof marks_class_12)




























    

 









































