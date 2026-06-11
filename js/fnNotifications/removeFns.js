import { array } from "./fnProyectos.js";

export function removeFns(){

    array.forEach(element => {
        element.remove();
    });

    array.length = 0;

    const closeNotification = document.getElementById("closeNotification");

    if(closeNotification){
        console.log("Mostrando elemento de closeNotification" , closeNotification);
        closeNotification.remove();
    }
}