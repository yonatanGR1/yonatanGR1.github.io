import { loadLanguage } from "./i18n/languageManager.js";
import { refreshCurrentSection } from "./fnNotifications/refreshCurrentSection.js";

const language = document.getElementById("language");
const panelMenuLanguage = document.getElementById("panelMenuLanguage");
const Es = document.getElementById("Es");
const Eng = document.getElementById("Eng");

async function fnEs(){
    await loadLanguage("es");

    language.querySelector("img").src = "/assets/icons/es.svg";
    language.querySelector("span").textContent = "ES";

    refreshCurrentSection();
}

async function fnEng(){
    await loadLanguage("en");

    language.querySelector("img").src =
        "/assets/icons/english.svg";

    language.querySelector("span").textContent =
        "EN";

    refreshCurrentSection();
}

language.addEventListener("click",()=>{
    panelMenuLanguage.classList.toggle("active");

    Es.addEventListener("click", fnEs);
    Eng.addEventListener("click", fnEng);
});
