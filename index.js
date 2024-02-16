const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
const myH1 = document.getElementById("myH1");
let value = 0;

increment.onclick = function(){
    value ++;
    myH1.textContent = value;
}

decrement.onclick = function(){
    value --;
    myH1.textContent = value;
}

reset.onclick = function(){
    value = 0
    myH1.textContent = value;
}