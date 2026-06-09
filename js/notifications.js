import { removeFns } from "./fnNotifications/removeFns.js";
import { count } from "./insertElements.js";
import { fnStatus , getStatus } from "./fnNotifications/fnProyectos.js";
import { observarEtiquetas } from "./fnNotifications/observerEtiquetas.js";

const bell = document.getElementById("bell");
const panel = document.getElementById("notificationPanel");
const badge = document.querySelector(".badge");


export function btnCerrarNotificaciones(){
    const element = document.createElement("a"); 
    element.setAttribute("id", "closeNotification");

    const iconCerrar = document.createElement("img");
    const spanContent = document.createElement("span");

    iconCerrar.src="/assets/icons/close.svg";
    iconCerrar.alt= "Icono de cerrar";

    spanContent.textContent = "Cerrar notificaciones";

    element.appendChild(iconCerrar);
    element.appendChild(spanContent);
    

    element.addEventListener("click" ,() => closeNotification(element));
    panel.appendChild(element);
}

bell.addEventListener("click",()=>{
    const {status} = getStatus(); 

    panel.classList.toggle("active");
});

function closeNotification(element){
    fnStatus(false);
    const countValue = "0";
    panel.classList.toggle("active");
    console.log("click sobre " , element);
    
    element.remove();
    removeFns();
    badge.textContent = countValue;
    status = false;
};



