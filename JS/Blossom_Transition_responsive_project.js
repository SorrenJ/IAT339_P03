

const flightPath2 = {
    curviness:1,
    autoRotate: true,
    values: [
        {x: 100, y: -20},
        {x:300, y:10}, 
{x: 500, y:100}, {x:750, y:-100, scale: 10},
{x:350, y:-50},{x:600, y:100},{x:800, y:200},
{x:window.innerWidth, y:-120}
    ]
}

const flightPath3 = {
    curviness:1.25,
    autoRotate: true,
    values: [  {x: 5, y: -20},
        {x: 5, y: -20},
        {x:-10, y:10}, 
{x: -50, y:100}, {x:-150, y:-100, scale: 10},
{x:-35, y:-50},{x:14, y:100},{x:10, y:0},
{x:window.innerWidth, y:-250}
    ]
}
const tween1  = new TimelineLite();

if ($(window).width() > 800){


tween1.add(
    TweenLite.to('.blossom-anime2',1, {
        bezier: flightPath2,
        ease: Power1.easeInOut
    })

    
    );
    // console.log("desktop");             
        
const controller1 = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
    triggerElement: ".animation_project",
    duration:3000,
    triggerHook:0
})
.setTween(tween1)

// .addIndicators()
.setPin('.animation_project')//forces animation to finish
.addTo(controller1);

}
