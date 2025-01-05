import cards from "../gifts.json";
import forWorkImg from "../img/gift-for-work.png";
import forHealthImg from "../img/gift-for-health.png";
import forHarmImg from "../img/gift-for-harmony.png";
import snowFill from "../img/snow-fill.svg"
import snowUnfill from "../img/snow-unfill.svg"
import closeButtonImg from "../img/State=Close.svg"

const html = document.getElementsByTagName("html")[0];
const giftCont = document.getElementById("best-gifts-container")
const modalContainer = document.getElementById("cards-container-modal");
const popover = document.getElementById("popover");

const createCardModal = (element) => {
    toggleDisplay()
    const imgModal = document.createElement("img");
    const closeButtonModal = document.createElement("img");
    const cardContainerDescriptionModal = document.createElement("div");
    imgModal.src = loadImg(element).src;
    closeButtonModal.src = closeButtonImg;
    closeButtonModal.classList.add("close-button-modal");
    cardContainerDescriptionModal.classList.add("cards-container-modal_description-container");
    modalContainer.appendChild(closeButtonModal);
    modalContainer.appendChild(imgModal);
    modalContainer.appendChild(cardContainerDescriptionModal);
    firstChild(element, cardContainerDescriptionModal);
    closeButtonModal.addEventListener("click", toggleDisplay);
}

const firstChild = (element, cardContainerDescriptionModal) => {
    const titleCategory = document.createElement("h4");
    const titleName = document.createElement("h3");
    const description = document.createElement("p");
    const titleSuperpowers = document.createElement("h4");
    const containerSuperpowers = document.createElement("div");
    cardContainerDescriptionModal.appendChild(titleCategory);
    cardContainerDescriptionModal.appendChild(titleName);
    cardContainerDescriptionModal.appendChild(description);
    cardContainerDescriptionModal.appendChild(titleSuperpowers);
    cardContainerDescriptionModal.appendChild(containerSuperpowers);
    containerSuperpowers.classList.add("SUPERPOWERS-container-modal");
    categoryInner(element, titleCategory);
    titleName.textContent = element.name;
    description.textContent = element.description;
    titleSuperpowers.textContent = "ADDS SUPERPOWERS TO:";
    superpowersContent(element, containerSuperpowers);
}

const categoryInner = (element, titleCategory) => {
    titleCategory.textContent = element.category;
    if (element.category === "For Work") {
        titleCategory.classList.add("categories-for-work");
    } else if (element.category === "For Health") {
        titleCategory.classList.add("categories-for-health");
    } else titleCategory.classList.add("categories-for-harmony");
}

const superpowersContent = (element, containerSuperpowers) => {
    const superpowersName = ["Live","Create","Love","Dream"];
    const superpowerContentArr = [element.superpowers.live, element.superpowers.create, element.superpowers.love, element.superpowers.dream]
    for (let i = 0; i < superpowersName.length; i++) {
        const superpower = document.createElement("p");
        const superpowerContent = document.createElement("p");
        const superpowerIconContainer = document.createElement("div");
        superpowerIconContainer.classList.add("superpower-icon-container");
        containerSuperpowers.appendChild(superpower);
        containerSuperpowers.appendChild(superpowerContent);
        containerSuperpowers.appendChild(superpowerIconContainer);
        superpower.textContent = superpowersName[i];
        superpowerContent.textContent = superpowerContentArr[i];
        for (let l = 0; l < (superpowerContentArr[i]/100); l++) {
            superpowerIconContainer.appendChild(document.createElement("img")).src = snowFill;
        }
        for (let l = (superpowerContentArr[i]/100); l < 5; l++) {
            superpowerIconContainer.appendChild(document.createElement("img")).src = snowUnfill;
        }
    }
}

const loadDescription = (element) => {
    const DescCont = document.createElement("div");
    DescCont.classList.add("cards-container_description-container");
    DescCont.innerHTML = (element.category === "For Work") ? `<h4 class="categories-for-work">${element.category}</h4>`:
                         (element.category === "For Health") ? `<h4 class="categories-for-health">${element.category}</h4>`:
                        `<h4 class="categories-for-harmony">${element.category}</h4>`;
    DescCont.innerHTML += `<h3>${element.name}</h3>`;
    return DescCont;
}

const loadImg = (element) => {
    const imgCont = document.createElement("img");
    imgCont.classList.add("cards-image");
    imgCont.src = (element.category === "For Work") ? forWorkImg:
                  (element.category === "For Health") ? forHealthImg:
                  forHarmImg;
    return imgCont;
}

const loadCards = (element) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("cards-container");
    giftCont.appendChild(cardContainer);
    cardContainer.appendChild(loadImg(element));
    cardContainer.appendChild(loadDescription(element));
    cardContainer.addEventListener("click",() => createCardModal(element));
}

const start = (qty) => {
    const randomNumber = [];
    while (randomNumber.length < qty) {
        let gen = Math.floor(Math.random() * cards.length);
        if (!randomNumber.includes(gen)) {
            randomNumber.push(gen);
        }
    }
    for (let n = 0; n < qty; n++) {
        loadCards(cards[randomNumber[n]]);
    }
}

const toggleDisplay = () => {
    html.classList.toggle("disable-scroll");
    modalContainer.classList.toggle("display-none");
    popover.classList.toggle("display-none");
    modalContainer.replaceChildren()
}


start(4);

popover.addEventListener("click", toggleDisplay);
