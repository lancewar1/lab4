document.addEventListener('DOMContentLoaded', init);

function init(){
const back_btn = document.querySelector(".back-btn");
const next_btn = document.querySelector(".next-btn");
const frame = document.querySelector(".frame");
const slides = frame.querySelectorAll("img");

slides.forEach((slide) => {
    slide.classList.add("hide");
  });


  slides[0].classList.remove("hide");

  next_btn.addEventListener("click",changeSlide);
  back_btn.addEventListener("click", changeSlide);
}

function changeSlide(e){

    e.preventDevault();

    const frame = document.querySelector(".frame");
    const slides = frame.querySelectorAll("img");
    let showing = document.querySelector(".current");
    let nextUp = "";

    if(e.target.className == 'next-btn') {
        nextUp = showing.nextElementSibling;
      }
    
      if(e.target.className == 'back-btn') {
        nextUp = showing.previousElementSibling;
      }
      
     
      showing.classList.toggle("hide");
      showing.classList.toggle("current");
      
     
      if (!nextUp) {
        nextUp = slides[slides.length - 1];
      }
    
      if (nextUp.nodeName !== "IMG") {
        nextUp = slides[0];
      }
    
     
      nextUp.classList.toggle("hide");
      nextUp.classList.toggle("current");

}
