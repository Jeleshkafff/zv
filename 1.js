"use strict";
const num = document.getElementById('input');
const btn = document.getElementById('button');
const div = document.getElementById('div');
const btn1 = document.getElementById('button1');
let x_position;
let y_position;
let num1;
let id = 0
function timer() {

if(div.textContent>0){
    div.textContent=parseInt(div.textContent)-1
}
else{
    return

}
}
  btn.addEventListener(`click`, function (){
    if (num.value<0){
        div.textContent=0
    }
    else if (isNaN(num.value)){
        div.textContent=0
    }
    else{
    div.textContent = num.value 
    clearInterval(id)
    id = setInterval(timer, 1000);
  }})


function Kirya() {

let x_position = Math.floor(Math.random() * window.innerWidth);
if(x_position<1350){
    return x_position;
}
}
function Danya() {
    let y_position = Math.floor(Math.random() * window.innerWidth);
if(y_position<600){
        return y_position;
}
    }
function Andrey (){
    let zvezda; 
    for(var k=0; k<100; k++){
    zvezda = document.createElement("h5")
    zvezda.textContent="✡"
    zvezda.className = "h5"

    document.body.append(zvezda)

}
let array = document.querySelectorAll(`.h5`)
for(let i =0;i<array.length; i++){
    x_position = Kirya();
    y_position = Danya();
    array[i].style.top = `${y_position}px`
    array[i].style.left = `${x_position}px`
    array[i].style.position = "absolute"
    // array[i].classList.setAttribute("disabled",true)
     
}
}

btn1.addEventListener(`click`, Andrey)
