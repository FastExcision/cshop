import cards from "../gifts.json";
import forWorkImg from "../img/gift-for-work.png";
import forHealthImg from "../img/gift-for-health.png";
import forHarmImg from "../img/gift-for-harmony.png";


const modal = document.getElementById("cards-section-modal");
const category = document.getElementById("cards-container_description-container_category");
const name = document.getElementById("cards-container_description-container_name");
const description = document.getElementById("cards-container_description-container_description");
const live = document.getElementById("cards-container_description-container_live");
const create = document.getElementById("cards-container_description-container_create");
const love = document.getElementById("cards-container_description-container_love");
const dream = document.getElementById("cards-container_description-container_dream");

const divContCards = document.querySelectorAll(".cards-container");

const checkName = () => {
    
    if (cards.name === divContCards.name)
}

const toggleDisplay = () => {
    
    modal.classList.toggle("display-none");
}

divContCards.addEventListener("click", toggleDisplay())