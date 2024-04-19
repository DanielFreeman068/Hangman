//Pauses the carousel
const box = document.getElementById('carousel');

box.addEventListener('mouseenter', () => {
    box.classList.add('carouselHover');
    setTimeout(() => {
        box.classList.remove('carouselHover');
    },2000);
});

//Pops up the information
$(document).ready(function(){
    $("#one").mouseenter(function(){
        $("#uno").slideDown(1000); // Slide down when mouse enters
    });
    $("#uno").mouseleave(function(){
        $("#uno").slideUp(1000); // Slide up when mouse leaves
    });
    $("#two").mouseenter(function(){
        $("#dos").slideDown(1000); // Slide down when mouse enters
    });
    $("#dos").mouseleave(function(){
        $("#dos").slideUp(1000); // Slide up when mouse leaves
    });
    $("#three").mouseenter(function(){
        $("#tres").slideDown(1000).setTimeout(5000).slideUp(1000); // Slide down when mouse enters
    });
    $("#tres").mouseleave(function(){
        $("#tres").slideUp(1000); // Slide up when mouse leaves
    });
    $("#four").mouseenter(function(){
        $("#quatro").slideDown(1000).setTimeout(5000).slideUp(1000); // Slide down when mouse enters
    });
    $("#quatro").mouseleave(function(){
        $("#quatro").slideUp(1000); // Slide up when mouse leaves
    });
});