import { removeFns } from "./removeFns.js";
import { array } from "./fnProyectos.js";
import { fnStatus } from "./fnProyectos.js";

const panel = document.getElementById("notificationPanel");

function time(callback, delay = 2000) {
    setTimeout(callback, delay);
}

export function fnDocumentacion(){
    fnStatus(true);
    /**********************FARMACEUTICA*********************** */
    time(() => {
    const Farmaceutica = document.createElement("a");
    const spanFarmaceutica = document.createElement("span");

    // Configurar enlace
    Farmaceutica.setAttribute("class" , "nDocumentos");

    Farmaceutica.href = "/assets/documentacion/Farmaceutica/PARTE1.pdf";
    Farmaceutica.target = "_blank";   // abre en nueva pestaña
    Farmaceutica.rel = "noopener noreferrer"; // buena práctica de seguridad

    // Configurar contenido
    spanFarmaceutica.textContent = "Farmaceutica.pdf";
    Farmaceutica.appendChild(spanFarmaceutica);

    panel.appendChild(Farmaceutica);
    array.push(Farmaceutica);
    }, 1000);

    /*************************MP3******************************/
    time(() => {
    const MP3 = document.createElement("a");
    const spanMP3 = document.createElement("span");

    // Configurar enlace
    MP3.setAttribute("class" , "nDocumentos");

    MP3.href = "/assets/documentacion/MP3/DocumentacionMP3.pdf";
    MP3.target = "_blank";   // abre en nueva pestaña
    MP3.rel = "noopener noreferrer"; // buena práctica de seguridad

    // Configurar contenido
    spanMP3.textContent = "ReproductorMP3.pdf";
    MP3.appendChild(spanMP3);

    panel.appendChild(MP3);
    array.push(MP3);
    }, 2000);

    /*************************SERVIDORZABBIX******************************/
    time(() => {
    const ServidorZabbix = document.createElement("a");
    const spanZabbix = document.createElement("span");

    // Configurar enlace
    ServidorZabbix.setAttribute("class" , "nDocumentos");

    ServidorZabbix.href = "/assets/documentacion/MonitoreoDeServidorConZabbix.docx.pdf";
    ServidorZabbix.target = "_blank";   // abre en nueva pestaña
    ServidorZabbix.rel = "noopener noreferrer"; // buena práctica de seguridad

    // Configurar contenido
    spanZabbix.textContent = "ServidorAWS-Ubuntu-Zabbix.pdf";
    ServidorZabbix.appendChild(spanZabbix);

    panel.appendChild(ServidorZabbix);
    array.push(ServidorZabbix);
    }, 3000);

    /*************************ARQUITECTURA******************************/
    time(() => {
    const ArquitecturaC = document.createElement("a");
    const spanArquitecturaC = document.createElement("span");

    // Configurar enlace
    ArquitecturaC.setAttribute("class" , "nDocumentos");

    ArquitecturaC.href = "/assets/documentacion/ManualDeInstruccionesProyectoArquitecturaDeComputadoras.docx.pdf";
    ArquitecturaC.target = "_blank";   // abre en nueva pestaña
    ArquitecturaC.rel = "noopener noreferrer"; // buena práctica de seguridad

    // Configurar contenido
    spanArquitecturaC.textContent = "Servidor-Docker-Arquitectura.pdf";
    ArquitecturaC.appendChild(spanArquitecturaC);

    panel.appendChild(ArquitecturaC);
    array.push(ArquitecturaC);
    }, 4000);
    
    /*************************UNREAL ENGINE******************************/
    time(() => {
    const unrealEngine = document.createElement("a");
    const spanUnrealEngine = document.createElement("span");

    // Configurar enlace
    unrealEngine.setAttribute("class" , "nDocumentos");

    unrealEngine.href = "/assets/documentacion/UnrealEngine/ManualCreacionDeVideoJuego.pdf";
    unrealEngine.target = "_blank";   // abre en nueva pestaña
    unrealEngine.rel = "noopener noreferrer"; // buena práctica de seguridad

    // Configurar contenido
    spanUnrealEngine.textContent = "Unreal-Engine-Crear-VideoJuego";
    unrealEngine.appendChild(spanUnrealEngine);

    panel.appendChild(unrealEngine);
    array.push(unrealEngine);
    }, 5000);

}