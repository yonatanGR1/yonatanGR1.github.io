import { t } from "../i18n/languageManager.js";

const infoPerfil = document.getElementById("infoPerfil");
let experience = [
    "Experience_1",
    "Experience_2"
];


export function fnExperiencia(){
    localStorage.setItem("currentSection", "Experience");

    const experiencia = document.createElement("div");
    const list = document.createElement("ul");

    
    experience.forEach(key=>{
        const li = document.createElement("li");
        li.textContent = t(key);

        list.appendChild(li);
    });

    infoPerfil.textContent = "";
    experiencia.appendChild(list);
    infoPerfil.appendChild(experiencia);
}