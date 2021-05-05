const slider = document.querySelector(".slider input");
const dragLine = document.querySelector(".slider .drag");
const img = document.querySelector(".images .img2");

slider.oninput = () => {
  let sliderVal = slider.value;
  dragLine.style.left = sliderVal + "%";
  img.style.width = sliderVal + "%";
};
