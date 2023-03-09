document.addEventListener('DOMContentLoaded', init);

function init(){
    const back = document.querySelector(".back-btn");
    const next = document.querySelector(".next_btn");
    const slides = document.querySelector(".slides");


    slides.forEach((slide) => {
        slide.classList.add("hide");
        
    });
}