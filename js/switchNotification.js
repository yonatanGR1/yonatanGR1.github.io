import { fnProyectos } from "./fnNotifications/fnProyectos.js";
import { fnDocumentacion } from "./fnNotifications/fnDocumentacion.js";

export function switchNotification(element){
    switch (element) {
        case "Proyectos":
                fnProyectos()
            break;
        case "Documentacion":
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