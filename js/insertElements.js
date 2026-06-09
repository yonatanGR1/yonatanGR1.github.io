import { switchNotification } from "./switchNotification.js";
import { removeFns } from "./fnNotifications/removeFns.js";
import { fnConocimientos } from "./fnNotifications/fnConocimientos.js";
import { fnExperiencia } from "./fnNotifications/fnExperiencia.js";
import { fnContactos } from "./fnNotifications/fnContactos.js";

const iconProyectos = document.querySelector("#iconProyectos");
const badge = document.querySelector(".badge");
const notifSound = document.querySelector("#notifSound");
export let count;

iconProyectos.addEventListener("click",()=>{
    event.preventDefault();
    removeFns();

    count = "1";
    badge.textContent = count;
    notifSound.play();

    //Obtener el texto del span oculto
    const spanText = iconProyectos.querySelector(".icon-text-hidden").textContent;

    switchNotification(spanText);
});

const iconDocumentacion = document.querySelector("#iconDocumentacion");

iconDocumentacion.addEventListener("click",()=>{
    event.preventDefault();
    removeFns();

    count = "1";
    badge.textContent = count;
    notifSound.play();

    //Obtener el texto del span oculto
    const spanText = iconDocumentacion.querySelector(".icon-text-hidden").textContent;

    switchNotification(spanText);
});

const iconHabilidades = document.querySelector("#iconHabilidades");
iconHabilidades.addEventListener("click", ()=>{
    event.preventDefault();
    badge.textContent = count;
    notifSound.play();
    fnConocimientos();
});

const iconExperiencia = document.querySelector("#iconExperiencia");
iconExperiencia.addEventListener("click", ()=>{
    event.preventDefault();
    badge.textContent = count;
    notifSound.play();

    //Obtener el texto del span oculto
    const spanText = iconDocumentacion.querySelector(".icon-text-hidden").textContent;

    fnExperiencia(spanText);
});

const iconContactos = document.querySelector("#iconContactos"); 

iconContactos.addEventListener("click", ()=>{
    event.preventDefault();
    removeFns();
    count = "1";
    badge.textContent = count;
    notifSound.play();
    fnContactos();
});


