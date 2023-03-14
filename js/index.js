const arrImage = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
]

const sliderRow = document.querySelector("#slider-row");
const slider = document.querySelector("#slider-row div:nth-child(1)");
const sliderThumbs = document.querySelector("#slider-row div:nth-child(2)");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let currentIndex = 0;
let slide = "";
let thumbs = "";


for(let i = 0; i < arrImage.length; i++){
    slide += `  
            <div class="card border-0 slider">
              <img src="${arrImage[i]}" alt="${i}">
            </div> `
    thumbs += `<div class="card border-0 slider thumbs-container active">
                 <img src="${arrImage[i]}" alt="${[i]}">
               </div>`
}
slider.innerHTML += slide;
sliderThumbs.innerHTML += thumbs;
console.log(sliderThumbs)
document.querySelectorAll(".slider")[currentIndex].classList.add("active");
document.querySelectorAll(".thumbs-container")[currentIndex].classList.add("border");



next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

function nextSlide(){
    document.querySelectorAll(".slider")[currentIndex].classList.remove("active");
    document.querySelectorAll(".thumbs-container")[currentIndex].classList.remove("border");

    if(currentIndex === arrImage.length - 1){
        currentIndex = 0;
    } else{
        currentIndex++;
    }
    document.querySelectorAll(".slider")[currentIndex].classList.add("active");
    document.querySelectorAll(".thumbs-container")[currentIndex].classList.add("border");
}
function prevSlide(){
    document.querySelectorAll(".slider")[currentIndex].classList.remove("active");
    document.querySelectorAll(".thumbs-container")[currentIndex].classList.remove("border");
    if(currentIndex === 0){
        currentIndex = arrImage.length - 1;
    } else{
        currentIndex--;
    }
    document.querySelectorAll(".slider")[currentIndex].classList.add("active");
    document.querySelectorAll(".thumbs-container")[currentIndex].classList.add("border");
}



