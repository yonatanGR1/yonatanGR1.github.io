import { removeFns } from "./removeFns.js";
import { downloadMP3 } from "./MP3/download.js";
export let status;

const panel = document.getElementById("notificationPanel");
export const array = [];

function time(callback, delay = 2000) {
    setTimeout(callback, delay);
}

export function fnStatus (value){
    status = value;
}

export function getStatus(){
    return {status};
}

export function fnProyectos(){
    fnStatus(true); 

    const farmacia = document.createElement("a");
    const spanFarmacia = document.createElement("span");

    // Configurar enlace
    farmacia.setAttribute("class" , "nProyectos");

    farmacia.href = "https://desarrollo-w-farmacia.vercel.app/";
    farmacia.target = "_blank";   // abre en nueva pestaña
    farmacia.rel = "noopener noreferrer"; // buena práctica de seguridad

    // Configurar contenido
    spanFarmacia.textContent = "Farmacia";
    farmacia.appendChild(spanFarmacia);
    
    time(() => {
        panel.appendChild(farmacia);
    }, 1000);

    const MP3 = document.createElement("a")
    const imageDowload = document.createElement("img");
    const spanMP3 = document.createElement("a");

    //Configurar Contenido 
    MP3.setAttribute("class" , "nProyectos");
    imageDowload.src = "/assets/icons/download.svg";
    imageDowload.setAttribute("id" , "downloadMP3");

    MP3.target = "_blank";   // abre en nueva pestaña
    MP3.rel = "noopener noreferrer"; // buena práctica de seguridad
    spanMP3.textContent = "ReproductorMP3";
    spanMP3.href = "https://github.com/yonatanGR1/MP3Player";
    spanMP3.target = "_blank";   // abre en nueva pestaña
    spanMP3.rel = "noopener noreferrer"; // buena práctica de seguridad
    MP3.appendChild(spanMP3);

    MP3.appendChild(imageDowload);
    
    time(() => {
        panel.appendChild(MP3);
    }, 2000);

    const proyecto1 = document.createElement("a");
    const spanProyecto1 = document.createElement("span");

    // Configurar enlace
    proyecto1.setAttribute("class" , "nProyectos");

    proyecto1.href = "/proyecto1/index.html";
    proyecto1.target = "_blank";   // abre en nueva pestaña
    proyecto1.rel = "noopener noreferrer"; // buena práctica de seguridad

    // Configurar contenido
    spanProyecto1.textContent = "Proyecto1";
    proyecto1.appendChild(spanProyecto1);
    
    time(() => {
        panel.appendChild(proyecto1);
    }, 3000);

    const proyecto2 = document.createElement("a");
    const spanProyecto2 = document.createElement("span");

    // Configurar enlace
    proyecto2.setAttribute("class" , "nProyectos");

    proyecto2.href = "/proyecto2/index.html";
    proyecto2.target = "_blank";   // abre en nueva pestaña
    proyecto2.rel = "noopener noreferrer"; // buena práctica de seguridad

    // Configurar contenido
    spanProyecto2.textContent = "Proyecto2";
    proyecto2.appendChild(spanProyecto2);
    
    time(() => {
        panel.appendChild(proyecto2);
    }, 4000);

    array.push(farmacia, MP3 , proyecto1 , proyecto2);
    imageDowload.addEventListener("click" , downloadMP3);
}

