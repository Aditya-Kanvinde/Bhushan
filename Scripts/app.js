window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
controller = new ScrollMagic.Controller();

$(document).ready(function () {
    $(document).click(function (event) {
        var click = $(event.target);
        var _open = $(".navbar-collapse").hasClass("show");
        if (_open === true && !click.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});
var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
    threshold:500,
  });

const mediaQuery = window.matchMedia('min-width:768px');
if(!mediaQuery.matches)
    {
        gsap.fromTo('.full',{opacity:0} , {opacity:1 ,duration:5,ease:'easeIn'});
    }
//Navbar Animation Blur Effect


//Logo Animation
gsap.to(".b" , {opacity:1 , x:130, duration:3,ease: "back.out(1)"})
gsap.to(".h" , {opacity:1 , x:-130, duration:3,ease: "back.out(1)"})
gsap.to(".n" ,{opacity:1 , duration:1,ease: "Circ.easeIn" ,delay:0.5})
gsap.to(".d", {opacity:1 , duration:1,ease: "Circ.easeIn" ,delay:0.7})






//Parallax Scene
let Scene1 = new ScrollMagic.Scene({
        triggerElement: '.parallax-back',
        triggerHook: 0,
        duration: '50%',
        addIndicator:true

    })
    .setTween(TweenMax.fromTo('.parallax-wrapper', 2, { y:850}, { y:0  ,  ease: "power1.out" }))
    .setPin('.parallax-back')
    .addTo(controller);



//Carousel Animation

