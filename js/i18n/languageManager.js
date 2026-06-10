let translations = {};
let currentLanguage = "en";

function applyTranslations(){
    document.querySelectorAll("[data-i18n]")
        .forEach(element => {
            const key = element.dataset.i18n;
            element.textContent = t(key);
        });
}

export async function loadLanguage(lang) {
    const response = await fetch(`/js/i18n/${lang}.json`);

    translations = await response.json();

    currentLanguage = lang

    localStorage.setItem("language", lang);

    const language = document.getElementById("language");
    if(language){
        console.log("Mostrando lang" , lang);
        if(lang === "en"){
            language.querySelector("span").textContent ="Eng";

            language.querySelector("img").src =
                "/assets/icons/english.svg"
        }else{
            language.querySelector("span").textContent ="Es";

            language.querySelector("img").src = 
                "/assets/icons/es.svg";
        }
    }

    applyTranslations();
}

export function t(key){
    return translations[key] || key;
}

export function getCurrenntLaguage(){
    return currentLanguage;
}