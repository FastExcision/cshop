const button = document.querySelector(".top-scroll-button");


const showButton = () => {
    if (window.scrollY === 0) {
        button.classList.add("top-scroll-button-inactive");
        return;
    }
    button.classList.remove("top-scroll-button-inactive");
    return;
}

const scrollTop = () => {
    window.scroll(0, 0);
    return;
}

window.addEventListener("scroll", showButton);
button.addEventListener("click", scrollTop);