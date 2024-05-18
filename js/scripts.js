const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLenght = slideRight.querySelectorAll('div').length;
//const sliderContainer = document.querySelector('.slider-container');
let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLenght-1)*100}vh`;
upButton.addEventListener('click',() => changesSlide('up'));
downButton.addEventListener('click',() => changesSlide('down'));

const changesSlide = (direction) =>{
        const sliderHeight = sliderContainer.clientHeight;
        //console.log (sliderHeight);
        if (direction === 'up'){
            activeSlideIndex++;
            upButton.style.border = "groove rgb(160, 124, 5)";
            if (activeSlideIndex > slidesLenght-1) {
                activeSlideIndex = 0;
            }
        } else if( direction === 'down'){
            activeSlideIndex--;
            downButton.style.border = "groove rgb(160, 124, 5)";
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesLenght-1;
            }	
        }
        slideRight.style.transform =`translateY(-${activeSlideIndex * sliderHeight}px)`;
        slideLeft.style.transform =`translateY(${activeSlideIndex * sliderHeight}px)`;
}