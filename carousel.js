const nextButton = document.querySelector('.carousel_button--right');
const previousButton = document.querySelector('.carousel_button--left');
const carousel_track= document.querySelector('.carousel_track');
const slides = Array.from(carousel_track.children);
const slideWidth = slides[0].getBoundingClientRect().width;
var currentSlide_index = 0;

//Take all the slides and put them next to each other
const setSlidePostion = (slide, index)=>{
    slide.style.left = slideWidth * index  + 'px';
};

const moveSlide = (carousel_track, currentSlide,targetSlide, index )=>{
    carousel_track.style.transform = 'translateX(-'+ targetSlide.style.left +' )';  
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');

    displayButton(index, slides.length-1);
     
}

slides.forEach(setSlidePostion);

nextButton.addEventListener('click', ()=>{
  const currentSlide = carousel_track.querySelector('.current_slide');
  const nextSlide = currentSlide.nextElementSibling;
  currentSlide_index +=1;
  moveSlide(carousel_track, currentSlide, nextSlide, currentSlide_index);


});

previousButton.addEventListener('click', ()=>{
    const currentSlide = carousel_track.querySelector('.current_slide');
    const previousSlide = currentSlide.previousElementSibling;
    currentSlide_index -=1;
    moveSlide(carousel_track, currentSlide, previousSlide, currentSlide_index);
    
});


const displayButton=(index, nSlides) => {
  
    if(index== 0){
        previousButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
    if(index > 0 && index < nSlides-1 ){
        previousButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');

    }

    if(index == nSlides){
        previousButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }
}


