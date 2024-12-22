const button = document.querySelector(".top-scroll-button");


const showButton = () => {
    if (window.scrollY === 0) {
        button.classList.add("display-none")
        return;
    }
    button.classList.remove("display-none");
    return;
}

const scrollTop = () => {
    window.scroll(0, 0);
    return;
}

window.addEventListener("scroll", showButton);
button.addEventListener("click", scrollTop);