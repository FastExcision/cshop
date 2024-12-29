import cards from "../gifts.json";

const giftCont = document.getElementById("best-gifts-container");


const loadDescription = (element, divCont) => {
    const DescCont = document.createElement("div");
    DescCont.classList.add("cards-description-container");
    if (element.category == "For Work") {DescCont.innerHTML = `<h4 class="categories-for-work">${element.category}</h4>`} 
    else if (element.category == "For Health"){DescCont.innerHTML = `<h4 class="categories-for-health">${element.category}</h4>`}
    else {DescCont.innerHTML = `<h4 class="categories-for-harmony">${element.category}</h4>`}
    DescCont.innerHTML += `<h3 class="cards-description-header">${element.description}</h3>`;
    divCont.appendChild(DescCont);
}

const loadImg = (element, divCont) => {
    const imgCont = document.createElement("img");
    imgCont.classList.add("cards-image");
    if (element.category == "For Work") {imgCont.src = "img/gift-for-work.png"} 
    else if (element.category == "For Health"){imgCont.src = "img/gift-for-health.png"}
    else {imgCont.src = "img/gift-for-harmony.png"}
    divCont.appendChild(imgCont);
}

const loadCards = (element) => {
    const divCont = document.createElement("div");
    divCont.classList.add("cards-container");
    giftCont.appendChild(divCont);
    loadImg(element);
    loadDescription(element);
};

const start = (qty) => {
for (let n = 0; n < qty; n++) {
    loadCards(cards[n]);
}   
};
start(1);



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
