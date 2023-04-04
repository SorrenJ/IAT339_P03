const flightPath = {
    curviness:1.25,
    autoRotate: true,
    values: [
        {x: 100, y: -20},
        {x:300, y:10}, 
{x: 500, y:100}, {x:750, y:-100, scale: 10},
{x:350, y:-50},{x:600, y:100},{x:800, y:0},
{x:window.innerWidth, y:-250}
    ]
}

const flightPath1 = {
    curviness:1.25,
    autoRotate: true,
    values: [
        {x: 150, y: -10},
        {x:200, y:100}, 
{x: 400, y:200}, {x:650, y:0},
{x:250, y:50},{x:500, y:150},{x:800, y:20},
{x:window.innerWidth, y:-250}
    ]
}
const tween  = new TimelineLite();

tween.add(
    TweenLite.to('.blossom-anime',  1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    }),

    // TweenLite.to('.blossom-anime1', 2, {
    //     bezier: flightPath1,
    //     ease: Power1.easeInOut
    // })

    );


    tween.add(
        TweenLite.to('.blossom-anime1',  1, {
            bezier: flightPath,
            ease: Power1.easeInOut
        }),
    
        // TweenLite.to('.blossom-anime1', 2, {
        //     bezier: flightPath1,
        //     ease: Power1.easeInOut
        // })
    
        );



const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration:4000,
    triggerHook:0
})
.setTween(tween)

.addIndicators()
.setPin('.animation')//forces animation to finish
.addTo(controller);