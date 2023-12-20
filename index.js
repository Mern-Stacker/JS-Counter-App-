let increment = document.querySelector(".btn1");
let decrement = document.querySelector(".btn2");
let add = document.querySelector(".number");
let sub = 0;
let reset = document.querySelector(".btnr");

increment.addEventListener("click", function(){
    document.querySelector(".number").style.color = "rgb(35, 29, 29)";
    sub += 1;
    add.innerHTML = sub;
    
});

decrement.addEventListener("click", function(){
    document.querySelector(".number").style.color = "rgb(149, 162, 30)";

    sub -= 1;
    add.innerHTML = sub;
});


reset.addEventListener("click", function(){
    
    sub=0;
    add.innerHTML =sub;
});