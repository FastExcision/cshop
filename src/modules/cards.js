import cards from "../gifts.json";
import forWorkImg from "../img/gift-for-work.png";
import forHealthImg from "../img/gift-for-health.png";
import forHarmImg from "../img/gift-for-harmony.png";

const giftCont = document.getElementById("best-gifts-container")




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
    // cardContainer.addEventListener("click",() => createCardModal(element));
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

start(4);


