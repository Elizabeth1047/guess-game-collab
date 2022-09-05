const shape = document.querySelectorAll(".shape");
for (let i = 0; i < shape.length; i++) {
  shape[i].addEventListener("click", () => {
    console.log("i got clicked");
  });
}
