gsap.to(".btn", {
  opacity: 1,
  y: "0%",
  ease: "bounce",
  duration: 2.2,
});

const timeline = gsap.timeline({ defaults: { duration: 1, delay: 1 } });
timeline
  .to(".modal__container", {
    opacity: 1,
    y: "0%",
    ease: "power4.inOut",
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 1,
    delay: 3,
  })
  .to(".inp", {
    opacity: 1,
    x: "0%",
    ease: "power4.inOut",
  })
  .from(".shape", {
    opacity: 0,
    ease: "power4.inOut",
    stagger: 1,
  })

  .from(".close", {
    opacity: 0,
    ease: "power4.inOut",
    // rotation: 720,
  });

//target element
const output = document.querySelector(".output__container");
const modal = document.querySelector("#modal__container");
const openModal = document.querySelector("#open");
const closeModal = document.querySelector("#close");
const inp = document.querySelector("#inp");
const select = document.querySelector("#select");
let shape = document.querySelectorAll(".shape");
let divShape;
for (let i = 0; i < shape.length; i++) {
  shape[i].addEventListener("click", () => {
    if (shape[i].classList.contains("tri")) {
      console.log("i will create a triangle");
      divShape = "triangle";
    }
    //  else if (shape[i].classList.contains("hex")) {
    //   console.log("i will create an hexagon");
    //   divShape = "hexagon";}
    else if (shape[i].classList.contains("rec")) {
      console.log("i will create a rectangle");
      divShape = "rectangle";
    }
    //  else if (shape[i].classList.contains("star-shape")) {
    //   console.log("i will create a star");
    //   divShape = "star";}
    else if (shape[i].classList.contains("round")) {
      console.log("i will create a cirlce");
      divShape = "circle";
    }
  });
}

//functinality
openModal.addEventListener("click", () => {
  modal.showModal();
  timeline.play();
});

function giveClass() {
  let div = document.createElement("div");
  div.classList.add(divShape);
  return div;
}

function createLi(newdiv) {
  let li = document.createElement("li");
  li.append(newdiv);
  return li;
}

closeModal.addEventListener("click", () => {
  modal.close();
  let div = giveClass();
  let h3 = document.createElement("h3");
  h3.textContent = inp.value;
  div.append(h3);
  let li = createLi(div);
  output.appendChild(li);
});
