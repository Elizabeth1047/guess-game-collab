gsap.to(".btn", {
      opacity: 1,
      y: "0%",
      ease: "bounce", 
      duration: 2.2,
    })

const timeline = gsap.timeline({ defaults: { duration: 1, delay: 1 } });
timeline
  .to(".modal__container", {
    opacity: 1,
    y: "0%",
    ease: "power4.inOut",
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
   duration: 1,
    delay:3
  })
  .to(".inp", {
    opacity: 1,
    x: "0%",
    ease: "power4.inOut",
  })
  .from(".shape", {
    opacity: 0,
    ease: "power4.inOut",
    stagger: 1
  })

.from(".close", {
  opacity: 0,
  ease: "power4.inOut",
  // rotation: 720,
  
  
});



//target element
const modal = document.querySelector("#modal__container");
const openModal = document.querySelector("#open");
const closeModal = document.querySelector("#close");
const inp = document.querySelector("#inp");

//functinality
openModal.addEventListener("click", () => {  
modal.showModal();
timeline.play()

});
closeModal.addEventListener("click", () => {
  modal.close();
  timeline.reverse()
  
  console.log(inp.value);
  let action = inp.value;
  let div = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.textContent = action;
  console.log(h3);
  inp.value = " ";

  div.append(h3);
  div.classList.add("action__container");
  h3.classList.add("action__text");
  //   i have no idea where to append this into the regular page (deji go run this one)
  // 
  //   document.
  
});


