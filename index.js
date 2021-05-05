const slider = document.querySelector(".slider input");
const dragLine = document.querySelector(".slider .drag");

slider.oninput = () => {
  let sliderVal = slider.value;
  dragLine.style.left = sliderVal + "%";
};
