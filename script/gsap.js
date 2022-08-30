//  const timeline = gsap.timeline({ default: { duration: 2 } });
//  timeline.to(".close", {
//    opacity: 1,
//    y: "0%",
//    ease: "bounce",
//  });
gsap.to(".btn", {
      opacity: 1,
      y: "0%",
      ease: "bounce", 
      duration: 2.2,
    });




//target element
const modal = document.querySelector("#modal__container");
const openModal = document.querySelector("#open");
const closeModal = document.querySelector("#close");
const inp = document.querySelector("#inp");
//functinality
openModal.addEventListener("click", () => {
 modal.showModal();

});
closeModal.addEventListener("click", () => {
  modal.close();
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


