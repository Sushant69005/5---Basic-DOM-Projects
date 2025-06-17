let smallcursor = document.querySelector(".smallcursor");
let shadowcursor = document.querySelector(".shadowcursor");

let mouseX;
let mouseY;
let animationID;
let timer = null;

document.addEventListener("mousemove", function (eventobj) {
  mouseX = eventobj.clientX;
  mouseY = eventobj.clientY;
  smallcursor.style.left = mouseX + "px";
  smallcursor.style.top = mouseY + "px";

  //   shadowcursor.style.left = eventobj.clientX + "px";
  //   shadowcursor.style.top = eventobj.clientY + "px";
  if (!animationID) {
    animatecursor();
  }
  clearTimeout(timer);
  let timer = setTimeout(() => {
    cancelAnimationFrame(animationID);
  }, 2000);
  animationID = null;
});

function animatecursor() {
  let currentX = parseFloat(shadowcursor.style.left) || 0;
  let currentY = parseFloat(shadowcursor.style.top) || 0;

  let distanceX = mouseX - currentX;
  let distanceY = mouseY - currentY;

  shadowcursor.style.left = currentX + distanceX * 0.1 + "px";
  shadowcursor.style.top = currentY + distanceY * 0.1 + "px";

  animationID = requestAnimationFrame(animatecursor);
}
