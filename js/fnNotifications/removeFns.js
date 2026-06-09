import { array } from "./fnProyectos.js";

export function removeFns(){

    array.forEach(element => {
        element.remove();
    });

    array.length = 0;

}