
let count=0;
const counterText=document.querySelector(".js-counter-text");
const incrementText=document.querySelector(".js-increment-btn");
const decrementText=document.querySelector(".js-decrement-btn");

incrementBtn.addEventListener("click",function(){
    count++;
    counterText.textContent=count;
});
decrementBtn.addEventListener("click",function(){
    count--;
    counterText.textContent=count;
});


const ageInput=document.querySelector("js-age-input");
const calculateBtn=document.querySelector("js-calculate-btn");
const resultText=document.querySelector("js-result");
calaculateBtn.addEventListener("click",function(){
    

}
