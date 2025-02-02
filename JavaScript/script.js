
const contato = document.getElementById("contato");
const drop = document.getElementById("drop");



contato.addEventListener("click", ()=>{
    drop.classList.toggle("esconder");

})

gsap.to(".elemento", { scale: 10, duration: 2 });
gsap.to(".nota", { x: 1000, duration: 3, repeat: 2 });


document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper", {
        slidesPerView: 1,   
        spaceBetween: 10,  
        loop: true,  
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
    });
});
