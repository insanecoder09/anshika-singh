const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var close = document.querySelector('.ri-close-line');
var menu = document.querySelector('.ri-menu-3-line');
var main = document.querySelector('.main');
var time = document.querySelector('.zoom');

let i = 1
setInterval(function(){
    time.innerHTML = i;
    i = i+1;
},15)

function firstPageAnimation(){
    var tl = gsap.timeline();

    setTimeout(function(){
        tl.to('.boundingelem',{
            translateY: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: .5
        })

        tl.from('.pic',{
            opacity: 0,
            translateY: -10,
            ease: Expo.easeInOut,
            duration: 4,
            delay: -3,
        })
    },1500)
} firstPageAnimation();

menu.addEventListener('click', function(){
    gsap.to('.menuScreen',{
        top:0,
    })
})

close.addEventListener('click', function(){
    gsap.to('.menuScreen',{
        top:-120 + "%"
    })
})

document.querySelector('.loading').style.height = window.innerHeight + "px"

function loading(){
    setTimeout(function(){
        gsap.to('.loading',{
            top: -100 + "%"
        })
    },1500)
}
loading();
