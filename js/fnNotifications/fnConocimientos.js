import { t } from "../i18n/languageManager.js";

const infoPerfil = document.getElementById("infoPerfil");
let conocimientos = [
    "Knowledge_1",
    "Knowledge_2",
    "Knowledge_3",
    "Knowledge_4",
    "Knowledge_5",
    "Knowledge_6"
];

export function fnConocimientos(){
    localStorage.setItem("currentSection", "Skill");

    console.log("Se ejecuto mi funcion fnConocimientos");
    const contenedor = document.createElement("div");
    const lista = document.createElement("ul");

    conocimientos.forEach(key => {
        const li = document.createElement("li");

        li.textContent = t(key);

        lista.appendChild(li);
    });

    infoPerfil.textContent = "";
    contenedor.appendChild(lista);
    infoPerfil.appendChild(contenedor);
}