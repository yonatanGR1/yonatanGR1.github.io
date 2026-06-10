import { fnProyectos } from "./fnNotifications/fnProyectos.js";
import { fnDocumentacion } from "./fnNotifications/fnDocumentacion.js";

export function switchNotification(element){
    console.log("Entra al switch");
    console.log("Mostrando texto para element" , element);
    switch (element) {
        case "Projects 🔝": 
        case "Proyectos 🔝":
                console.log("Ejecutando Projects")
                fnProyectos()
            break;
        case "Documentation 🔝":
        case "Documentacion 🔝":
                console.log("Ejecutando Documentacion")
                fnDocumentacion();
            break;
        case "Habilidades":
            
            break;
        case "Experiencia":
            
            break;
        case "Contacto":
            
            break;
    
        default:
            console.log("No hay función para:", element);
            break;
    }
};