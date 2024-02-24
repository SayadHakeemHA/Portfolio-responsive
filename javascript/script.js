
let bars=document.getElementById('bars');
let header=document.querySelector(".header");

bars.addEventListener("click",()=>{
    bars.classList.toggle("fa-times");
    header.classList.toggle("toggle");
})

// Autotyping

const exampleText = ['React Developer', 'Js Developer', 'Front-end Developer'];
const exampleTyping = new AutoTyping('.example-selector', exampleText, {
  typeSpeed: 50,
  deleteSpeed: 50,
  waitBeforeDelete: 2000,
  waitBetweenWords: 500,
});
exampleTyping.start()