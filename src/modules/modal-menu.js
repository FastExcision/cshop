const menuButton = document.querySelectorAll(".nav-button");
const modalButton = document.querySelectorAll(".nav-menu-ref-modal");
const modalMenu = document.getElementById("nav-menu-modal-toggle");
const html = document.getElementsByTagName("html")[0];
const buttonImgDefault = document.getElementById("nav-button_img-default")
const buttonImgClose = document.getElementById("nav-button_img-close")




const scrollBlock = () => {
    html.classList.toggle("disable-scroll");
    return;
}

const animationTopToBottom = () => {
    modalMenu.classList.toggle("transform-menu-modal");
    return;
}

const changeButtonSvg = () => {
    buttonImgDefault.classList.toggle("display-none");
    setTimeout(() => {buttonImgDefault.classList.toggle("opacity-disable")}, 0);
    buttonImgClose.classList.toggle("display-none");
    setTimeout(() => {buttonImgClose.classList.toggle("opacity-disable")}, 0);
    return;
}

const toggleHidden = () => {
    window.scrollTo(0, 0);
    modalMenu.classList.toggle("display-none");
    changeButtonSvg();
    setTimeout(() => {animationTopToBottom()}, 0);
    scrollBlock();
    return;
}


menuButton.forEach((element) => {element.addEventListener("click", toggleHidden)});
modalButton.forEach((element) => {element.addEventListener("click", toggleHidden)});



