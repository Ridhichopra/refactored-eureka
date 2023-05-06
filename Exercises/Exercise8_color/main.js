let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

// 3 -- Write an event handler to change the color of the page when each square is pressed.

function switchTobtn1() {
    let body = document.querySelector("body");
    body.style.backgroundColor = 'rgb(187, 205, 142)';
    body.style.color = 'rgb(187, 205, 142)';
}
  
  function switchTobtn2() {
      let body = document.querySelector("body");
      body.style.backgroundColor = 'rgb(176, 209, 216)';
      body.style.color = 'rgb(176, 209, 216)';
    }
  
  function switchTobtn3() {
    let body = document.querySelector("body");
    body.style.backgroundColor = 'rgb(201, 186, 215)';
    body.style.color = 'rgb(201, 186, 215)';
  }
  
  function switchTobtn4() {
    let body = document.querySelector("body");
    body.style.backgroundColor = 'rgb(255, 232, 138)';
    body.style.color = 'rgb(255, 232, 138)';
  }
  // 2 -- Add an event listener to each square
  btn1.addEventListener("click", switchTobtn1);
  btn2.addEventListener("click", switchTobtn2);
  btn3.addEventListener("click", switchTobtn3);
  btn4.addEventListener("click", switchTobtn4);