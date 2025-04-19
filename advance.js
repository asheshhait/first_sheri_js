//locomotive
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
//gssp

gsap.from(".nlink",{
    stagger:.2,
    y:10,
    opacity:0,
    duration:1.5,
    ease: Power2,
})

Shery.textAnimate("#heading h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 30,
    delay: 0.3,
    duration:1,
   
  
  });

  Shery.textAnimate("#sustain h2 " /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 20,
    delay: 0.3,
    duration:1,
   
  
  });

  gsap.from("#sustain h5 " /* Element to target.*/, {
    //Parameters are optional.
    
    x: -20,
    delay: 0.3,
    duration:1,
   
  
  });


  gsap.from(".anim2",{
    y:50,
    stagger:.3,
    opacity:0,
    ease : Expo,
    duration:1,
  })
  Shery.imageEffect("#imagetext img", {
    style: 3, 
    config:{"uFrequencyX":{"value":11.45,"range":[0,100]},"uFrequencyY":{"value":4.58,"range":[0,100]},"uFrequencyZ":{"value":25.95,"range":[0,100]},"geoVertex":{"range":[1,64],"value":18.31},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500210917067409},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.89,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
    
    preset: "./presets/wigglewobble.json",
    
  })



  Shery.imageEffect(".imgff img", {
    style: 5, 
    config:{"a":{"value":3.66,"range":[0,30]},"b":{"value":-0.83,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.5555454874954694},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.4,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    preset: "./presets/wigglewobble.json",
    
  })
  gsap.from("#imagetext img",{
    z:"7",
    opacity:0,
    duration:2,
    ease: Expo,
  })

  Shery.imageEffect("#bimg", {
    style: 5,
    config:{"a":{"value":1.37,"range":[0,30]},"b":{"value":-0.94,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.152197297074231},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.35,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":33}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.26,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
    gooey: true,
  });

  document.querySelector("#ftext button")
  .addEventListener("mouseover",function(){
    gsap.to("#future video",{
      opacity:1,
      duration:1,
      ease:Power2,
    })
    
  })

  document.querySelector("#ftext button")
  .addEventListener("mouseleave",function(){
    gsap.to("#future video",{
      opacity:0,
      duration:1,
      ease:Power2,
    })
  })