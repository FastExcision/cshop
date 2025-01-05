const leftButton = document.getElementById("slider_left-button");
const rightButton = document.getElementById("slider_right-button");
const slider = document.getElementById("main-slider");

let sliderScrollWidth = (slider.scrollWidth - slider.clientWidth);
let clickTimes = 3;

const checkUserWidth = () => {
  if (window.innerWidth < 769) {
    sliderScrollWidth = (slider.scrollWidth - slider.clientWidth)
    clickTimes = 6;
  }
}
const scrollLeft = () => {
  slider.scrollLeft  -= sliderScrollWidth / clickTimes
};

const scrollRight = () => {
  slider.scrollLeft += sliderScrollWidth / clickTimes
};

const disableButton = (button) => {
  button.classList.add("slider-button-disabled");
  button.setAttribute("disabled", "true");
};

const activeButton = (button) => {
  button.classList.remove("slider-button-disabled");
  button.removeAttribute("disabled");

};

const disableScrollButton = () => {
  if (slider.scrollLeft >= sliderScrollWidth) {
    disableButton(rightButton);
    return;
  } 

  if (0 === slider.scrollLeft) {
    disableButton(leftButton);
    return;
  }

  activeButton(leftButton);
  activeButton(rightButton);
};



leftButton.onclick = scrollLeft;
rightButton.onclick = scrollRight;
window.addEventListener("resize", checkUserWidth)
slider.addEventListener("scroll", disableScrollButton);
