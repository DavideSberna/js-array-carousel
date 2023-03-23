const arrImage = [
    {
        image: "01.webp",
        title: "Spiderman",
        color: "red"
    },
    {
        image: "02.webp",
        title: "Sonic",
        color: "green"
    },
    {
        image: "03.webp",
        title: "star wars",
        color: "yellow"
    },
    {
        image: "04.webp",
        title: "Gatto ninja",
        color: "orange"
    },
    {
        image: "05.webp",
        title: "Avengers",
        color: "purple"
    },
   
 
]
const sliderContain = document.querySelector("#slider-row");
currentIndex = 1
function showImage(value, index){
    sliderContain.innerHTML += `<div class = "w-100 slider">
                            <div class= "position-relative d-flex justify-content-center align-items-center">
                                <img class= "w-100 slider-img" src="../img/${value.image}" alt="">

                                <span class= "num-slider" style="background-color: ${value.color}"> ${index + 1}</span>
                                <p class= "title-img"  style="background-color: ${value.color}"> ${value.title}</p>
                            </div>
                        </div>
                        `
}
arrImage.forEach(showImage)

let sliderImage = document.querySelectorAll(".slider");
sliderImage[currentIndex].classList.add("active");


let interval = setInterval(function() {
    sliderImage[currentIndex].classList.remove("active");
    
    if(currentIndex === arrImage.length - 1){
        currentIndex = 0;
    } else{
        currentIndex++;
    }
    sliderImage[currentIndex].classList.add("active");
}, 2000);




// function stopCarousel(){
//     clearInterval(interval);
// }


// sliderContain.addEventListener("mouseover",  stopCarousel);
// sliderContain.addEventListener("mouseout", interval);



