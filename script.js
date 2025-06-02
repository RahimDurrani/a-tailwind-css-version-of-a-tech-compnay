
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});



var tl = gsap.timeline()
tl.from("#h2",{
    y: -30,
    duration : 1.5,
    opacity:0,
    stagger:0.3,
    delay:1
})

gsap.from("#img",{
    opacity:0,
    duration:2,
    delay:2
})

gsap.registerPlugin(ScrollTrigger);

    let lt = gsap.timeline({
      scrollTrigger: {
        trigger: "#two",
        start: "50% 50%",
        end: "120% 50%",
        scrub: 1,
        markers: true
      }
    });

    lt.to("#mig", {
 rotateY:360,
 duration:2,
    });

   