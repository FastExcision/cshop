import snowFill from "../img/snow-fill.svg"
import snowUnfill from "../img/snow-unfill.svg"

const modalContainer = document.getElementById("cards-container-modal");

const createCardModal = (element) => {
    const imgModal = document.createElement("img");
    const cardContainerDescriptionModal = document.createElement("div");
    imgModal.src = loadImg(element).src;
    modalContainer.appendChild(cardContainerDescriptionModal);
    modalContainer.appendChild(imgModal);
    cardContainerDescriptionModal.classList.add("cards-container-modal_description-container");
    cardContainerDescriptionModal.appendChild(firstChild(element));
}

const firstChild = (element) => {
    const titleCategory = document.createElement("h4");
    const titleName = document.createElement("h3");
    const description = document.createElement("p");
    const titleSuperpowers = document.createElement("h3");
    const containerSuperpowers = document.createElement("div");
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
        titleCategory.classList.add("cards-for-work");
    } else if (element.category === "For Health") {
        titleCategory.classList.add("cards-for-health");
    } titleCategory.classList.add("cards-for-harmony");
}

const superpowersContent = (element,containerSuperpowers) => {
    const superpowersName = ["Live","Create","Love","Dream"];
    const superpowerContentArr = [element.superpowers.live, element.superpowers.create, element.superpowers.love, element.superpowers.dream]
    for (let i = 0; i < superpowersName.length; i++) {
        const superpower = document.createElement("p");
        const superpowerContent = document.createElement("p");
        const superpowerIconContainer = document.createElement("div");
        containerSuperpowers.appendChild(superpower);
        containerSuperpowers.appendChild(superpowerContent);
        containerSuperpowers.appendChild(superpowerIconContainer);
        superpower.textContent = superpowersName[i];
        superpowerContent.textContent = superpowerContentArr[i];
        for (let i = 0; i < (superpowerContentArr[i]/100); i++) {
            superpowerIconContainer.appendChild(document.createElement("img").src = snowFill);
        }
        for (let i = 5 - superpowerContentArr[i]/100; i < 5; i++) {
            superpowerIconContainer.appendChild(document.createElement("img").src = snowUnfill);
        }
    }
}

//     <div className="SUPERPOWERS-container-modal">
//         <p>Live </p><p></p>
//         <div id="modal-superpower-live_icon"></div>
//         <p>Create</p><p></p>
//         <div id="modal-superpower-create_icon"></div>
//         <p>Love</p><p></p>
//         <div id="modal-superpower-love_icon"></div>
//         <p>Dream</p><p></p>
//         <div id="modal-superpower-dream_icon"></div>
//     </div>


// <img className="card-image" alt="card image" id="modal-cards-image"/>
// <div className="cards-container-modal_description-container">
//     <h4></h4>
//     <h3></h3>
//     <p></p>
//     <h3>ADDS SUPERPOWERS TO:</h3>

// </div>

const toggleDisplay = () => {
    cardModal.classList.toggle("display-none");
    popover.classList.toggle("display-none");
}