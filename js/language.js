const language = document.getElementById("language");
const panelMenuLanguage = document.getElementById("panelMenuLanguage");

language.addEventListener("click",()=>{
    panelMenuLanguage.classList.toggle("active");
});