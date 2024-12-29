import cards from "../gifts.json";

const loadDescription = (element) => {
    const DescCont = document.createElement("div");
    DescCont.classList.add("cards-description-container");
    if (element.category == "For Work") {DescCont.innerHTML = `<h4 class="categories-for-work">${element.category}</h4>`} 
    else if (element.category == "For Health"){DescCont.innerHTML = `<h4 class="categories-for-health">${element.category}</h4>`}
    else {DescCont.innerHTML = `<h4 class="categories-for-harmony">${element.category}</h4>`}
    DescCont.innerHTML = `<h3 class="cards-description-header">${element.description}</h3>`;
    divCont.appendChild(DescCont);
}

const loadImg = (element) => {
    const imgCont = document.createElement("img");
    imgCont.classList.add("cards-image");
    if (element.category == "For Work") {imgCont.src("img/gift-for-work.png")} 
    else if (element.category == "For Health"){imgCont.src("img/gift-for-health.png")}
    else {imgCont.src("img/gift-for-harmony.png")}
    divCont.appendChild(imgCont);
}

const loadCards = (qty, element) => {
    for (n = 0; n < qty; n += 1) {
    const divCont = document.createElement("div");
    divCont.classList.add("cards-container");
    document.getElementById("best-gifts-container").appendChild(divCont);
    loadImg(element);
    loadDescription(element);
  }
};

cards.loadCards(4,1)
//    const template = `${item.title} ${item.description} tam pohui`;
//      divContainer.innerHTML = template;

// --<div class="cards-container">
//  -- <img class="cards-image" src="img/gift-for-work.png"/>
//  -- <div class="cards-description-container">
//       <h4 class="categories-for-work">for work</h4>
//       <h3 class="cards-description-header">console.log.guru</h3>
//  -- </div>
// --</div>

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
