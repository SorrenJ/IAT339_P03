


const flightPath = {
    curviness:1,
    autoRotate: true,
    values: [
        {x: 100, y: -20},
        {x:300, y:10}, 
{x: 500, y:100}, {x:750, y:-100, scale: 10},
{x:350, y:-50},{x:600, y:100},{x:800, y:200},
{x:window.innerWidth+1000, y:-120}
    ]
}

const flightPath1 = {
    curviness:1.25,
    autoRotate: true,
    values: [  {x: 50, y: -20},
        {x: 100, y: -20},
        {x:300, y:10}, 
{x: 500, y:100}, {x:750, y:-100, scale: 10},
{x:350, y:-50},{x:600, y:100},{x:800, y:0},
{x:window.innerWidth+100, y:-250}
    ]
}
const tween  = new TimelineLite();

tween.add(
    TweenLite.to('.blossom-anime',1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })

    // TweenLite.to('.blossom-anime1',  1, {
    //     bezier: flightPath1,
    //     ease: Power1.easeInOut
    // })


    // TweenLite.to('.blossom-anime1', 2, {
    //     bezier: flightPath1,
    //     ease: Power1.easeInOut
    // })

    );


    // tween.add(
    //     TweenLite.to('.blossom-anime1',  1, {
    //         bezier: flightPath1,
    //         ease: Power1.easeInOut
    //     }),
    

    
    //     );

        // tween.add(
        //     TweenLite.to('.blossom-anime2',  2, {
        //         bezier: flightPath,
        //         ease: Power1.easeInOut
        //     }),
        
    
        
        //     );
    
            // tween.add(
            //     TweenLite.to('.blossom-anime3',  1, {
            //         bezier: flightPath,
            //         ease: Power1.easeInOut
            //     }),
            
        

            //     );

                // tween.add(
                //     TweenLite.to('.blossom-anime4',  1, {
                //         bezier: flightPath,
                //         ease: Power1.easeInOut
                //     }),
                
            
                
                //     );
                    // tween.add(
                    //     TweenLite.to('.blossom-anime5',  1, {
                    //         bezier: flightPath,
                    //         ease: Power1.easeInOut
                    //     }),
                    
                
                    
                    //     );
                
        
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration:3000,
    triggerHook:0
})
.setTween(tween)

.addIndicators()
.setPin('.animation')//forces animation to finish
.addTo(controller);