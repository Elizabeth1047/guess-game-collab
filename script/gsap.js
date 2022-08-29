const timeline = gsap.timeline({ default: { duration: 2 } });
timeline
  .to(".btn", {
    opacity: 1,
    y: "0%",
    ease: "bounce", 
    duration: 2.2,
  });
  // const tmeline = gsap.timeline({ default: { duration: 2,  } });
  // tmeline.to(".pack", {
  //   opacity: 1,
  //   y: "0%",
  //   ease: "bounce",
  //   duration: 2.2,
  //   delay: 5
  // });
  
// gsap.to(".btn", {
//   ease: "bounce",
//   y: 0,
//   duration: 2.2,
// });

let button=document.querySelector(".btn")
console.log(button)
button.addEventListener("click", ()=>{
  timeline.reverse()
  gsap.to(".pack", {
    opacity: 1,
    y: "0%",
    ease: "bounce",
    duration: 2,
    delay: 2
  });
  gsap.to(".h1", {
    y: "0% ",
    ease: "power4.inOut",
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 2,
    opacity: 1,
    delay: 5,
  });
})

