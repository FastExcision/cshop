import cards from "../gifts.json";
import forWorkImg from "../img/gift-for-work.png";
import forHealthImg from "../img/gift-for-health.png";
import forHarmImg from "../img/gift-for-harmony.png";

const giftCont = document.getElementById("best-gifts-container");


const loadDescription = (element, divCont) => {
    const DescCont = document.createElement("div");
    DescCont.classList.add("cards-description-container");

    if (element.category == "For Work") {DescCont.innerHTML = `<h4 class="categories-for-work">${element.category}</h4>`} 
    else if (element.category == "For Health"){DescCont.innerHTML = `<h4 class="categories-for-health">${element.category}</h4>`}
    else {DescCont.innerHTML = `<h4 class="categories-for-harmony">${element.category}</h4>`}

    DescCont.innerHTML += `<h3>${element.name}</h3>`;
    divCont.appendChild(DescCont);
}

const loadImg = (element, divCont) => {
    const imgCont = document.createElement("img");

    imgCont.classList.add("cards-image");

    if (element.category == "For Work") {imgCont.src = forWorkImg} 
    else if (element.category == "For Health"){imgCont.src = forHealthImg}
    else {imgCont.src = forHarmImg}

    divCont.appendChild(imgCont);
}

const loadCards = (element) => {
    const divCont = document.createElement("div");
    divCont.classList.add("cards-container");
    giftCont.appendChild(divCont);
    loadImg(element, divCont);
    loadDescription(element, divCont);
};

const start = (qty) => {
for (let n = 0; n < qty; n++) {
    const randomNum = Math.floor(Math.random() * cards.length)
    loadCards(cards[randomNum]);
}   
};
start(4);



// const test = {
//     name: "Bug Magnet",
//     description: "Able to find bugs in code like they were placed there on purpose.",
//     category: "For Work",
//     superpowers: {
//       live: "+500",
//       create: "+500",
//       love: "+200",
//       dream: "+400"
//     }
// }
