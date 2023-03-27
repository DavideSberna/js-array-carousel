const arrImage = [
    {
        image: "../img/01.webp",
        title: "Spiderman",
        bgColor: "red",
        color: "white"
    },
    {
        image: "../img/02.webp",
        title: "Sonic",
        bgColor: "green",
        color: "white"
    },
    {
        image: "../img/03.webp",
        title: "star wars",
        bgColor: "yellow",
        color: "black"
    },
    {
        image: "../img/04.webp",
        title: "Gatto ninja",
        bgColor: "orange",
        color: "white"
    },
    {
        image: "../img/05.webp",
        title: "Avengers",
        bgColor: "purple",
        color: "white"
    },
   
 
];



const sliderContain = document.querySelector("#slider-row");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
let sliderImage = document.createElement("div");
sliderImage.classList.add("div-element")
let thumbsImage = document.createElement("div");



let currentIndex = 0;




function createSlider(){

    arrImage.forEach((element, index) => {
        sliderImage.innerHTML +=  `<div class="slider display-none">
                                        <img src="${element.image}" alt="image-${index}" class="slider-img">
                                        <span class = "num-slider" style="background-color: ${element.bgColor}; color: ${element.color}">${index + 1}</span>
                                        <p class = "title-img" style="background-color: ${element.bgColor}; color: ${element.color}">${element.title}</p>
                                    </div>`
        thumbsImage.innerHTML +=  `<div class="slider thumbs-container">
                                        <img src="${element.image}" alt="image-${index}" class="thumbs-img" style="border: solid 5px ${element.bgColor}">
                                    </div>`;
                                });
                                
                                
                                sliderContain.appendChild(sliderImage)
                                sliderContain.appendChild(thumbsImage)   
                                document.querySelectorAll(".slider")[currentIndex].style.display = "block";
                                document.querySelectorAll(".thumbs-img")[currentIndex].classList.add("border");
     
}







function nextButton(){
    document.querySelectorAll(".slider")[currentIndex].style.display = "none";
    document.querySelectorAll(".thumbs-img")[currentIndex].classList.remove("border");
   
    if(currentIndex === arrImage.length - 1){
        currentIndex = 0
    } else{
        currentIndex++
    }
    document.querySelectorAll(".slider")[currentIndex].style.display = "block";
    document.querySelectorAll(".thumbs-img")[currentIndex].classList.add("border");   
}

function prevButton(){
    document.querySelectorAll(".slider")[currentIndex].style.display = "none";
    document.querySelectorAll(".thumbs-img")[currentIndex].classList.remove("border");
    
    if(currentIndex === 0){
        currentIndex = arrImage.length - 1;
    } else{
        currentIndex--;
    }
    document.querySelectorAll(".slider")[currentIndex].style.display = "block";
    document.querySelectorAll(".thumbs-img")[currentIndex].classList.add("border");
}



let interval;
function startSlide(){
    interval = setInterval(nextButton, 1000)

}
function stopSlide(){
    clearInterval(interval)
}



createSlider()
sliderContain.addEventListener("mouseover", stopSlide);
sliderContain.addEventListener("mouseout", startSlide);
btnNext.addEventListener("click", nextButton)
btnPrev.addEventListener("click", prevButton)