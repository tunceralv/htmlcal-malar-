const carouselslide=document.querySelector('.carousel_slide');
const carouselimg=document.querySelectorAll('.carousel_slide img');

//butonlar


const backbtn=document.querySelector('#backbtn');
const nextbtn=document.querySelector('#nextbtn');

//counter

let counter=1;
const size=carouselimg[0].clientWidth;

carouselslide.style.transform='translateX(' + (-size*counter) + 'px)';

//butonefect

nextbtn.addEventListener('click', ()=> {
if(counter>=carouselimg.length-1) return;
carouselslide.style.transition='transform 0.9s ease-in-out';
counter++;
carouselslide.style.transform='translateX(' + (-size*counter) + 'px)';


});

backbtn.addEventListener('click', ()=> {
if(counter<=0) return;
    carouselslide.style.transition='transform 0.9s ease-in-out';
    counter--;
    carouselslide.style.transform='translateX(' + (-size*counter) + 'px)';
});

carouselslide.addEventListener('transitionend',()=>{

if(carouselimg[counter].id==='son'){
    carouselslide.style.transition="none";
    counter=carouselimg.length-2;
    carouselslide.style.transform='translateX(' + (-size*counter) + 'px)';

}
if(carouselimg[counter].id==='ilk'){
    carouselslide.style.transition="none";
    counter=carouselimg.length-counter;
    carouselslide.style.transform='translateX(' + (-size*counter) + 'px)';
}

});
 



