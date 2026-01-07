document.body.classList.add('loading');
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('hide');
    document.body.classList.remove('loading');
});
const navButton = document.querySelector(".navButton");
const nav = document.querySelector(".mobileNav");
const sctollToTop = document.querySelector(".scrollToTop");

navButton.addEventListener("click",(event) =>{
    event.stopPropagation();
    nav.classList.toggle("show");
     navButton.classList.toggle("active");
});
nav.addEventListener("click",(event) =>{
    event.stopPropagation();
});
document.addEventListener("click",()=>{
    nav.classList.remove("show");
    navButton.classList.remove("active");
});
document.addEventListener("scroll",()=>{
    navButton.classList.remove("active");
    nav.classList.remove("show");
});

window.addEventListener("scroll",() =>{
    if (window.scrollY > 300){
        sctollToTop.classList.add("show");
    }
    else {
        sctollToTop.classList.remove("show");
    }
});

sctollToTop.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const track = document.querySelector(".carouselTrack");
let slide = Array.from(track.children);

let currentIndex = 0;

function updateSlide(){
    const slideWidth = slide[0].offsetWidth;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

next.addEventListener('click',()=>{
    currentIndex = (currentIndex + 1) % slide.length;
    updateSlide()
});
prev.addEventListener('click',()=>{
        currentIndex = (currentIndex - 1 + slide.length) % slide.length;
        updateSlide();
    }
);