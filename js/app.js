import { loadLanguage } from "./i18n/languageManager.js";

window.addEventListener("DOMContentLoaded", ()=>{

    const savedLanguage =
        localStorage.getItem("language") || "en";

    loadLanguage(savedLanguage);
});