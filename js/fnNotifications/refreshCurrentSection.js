import { fnProyectos } from "./fnProyectos.js";
import { fnDocumentacion } from "./fnDocumentacion.js";
import { fnConocimientos } from "./fnConocimientos.js";
import { fnExperiencia } from "./fnExperiencia.js";
import { fnContactos } from "./fnContactos.js";

export function refreshCurrentSection(){
    const currentSection = localStorage.getItem("currentSection");
     
    console.log("Mostrando current sections" , currentSection);
    switch(currentSection){
        case "Profile":
            break;
        case "Projects":
            fnProyectos();
            break;
        case "Documentation":
            fnDocumentacion();
            break;
        case "Skill":
            fnConocimientos();
            break;
        case "Experience":
            fnExperiencia();
            break;
        case "Contact":
            fnContactos();
            break;
        default:
            console.log("Cambiando idioma default");
            break;

    }
}