
//intialize the count as 0
//listen for clicks on the increment 
//increment the count variable when button is clicked
//change the count in the html to reflect the new count 

let saveEl=document.getElementById("prv")
let countEl=document.getElementById("count")//pass in argument.

console.log(countEl)

let cnt=0;

function increment(){
   cnt+=1;
   countEl.textContent=cnt;  
}

//create a function ,save() which logs out the count when its called.

function save(){
   let cntStr=cnt + " - " ;
   saveEl.textContent+=cntStr;
   countEl.textContent=0;
   cnt=0;
   console.log(cnt)

}




