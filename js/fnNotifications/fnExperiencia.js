const infoPerfil = document.getElementById("infoPerfil");
let lsi = [
  "Diagnóstico y resolución de problemas de hardware y software en equipos de cómputo. Instalación y configuración de sistemas operativos, aplicaciones y periféricos. Mantenimiento preventivo y correctivo, respaldo de información y asistencia técnica a usuarios \para garantizar el correcto funcionamiento de los equipos. ",
  "Práctica Supervisada en Reparación y Mantenimiento Eléctrico y Electrónico Rodolfo Hernández Chávez.  Realización de 200 horas de práctica supervisada en mantenimiento eléctrico y electrónico."
];
let li = 2;

export function fnExperiencia(){
    const experiencia = document.createElement("div");
    const ls = document.createElement("ul");

    let i = 0;
    while(i < li){
        const liElement = document.createElement("li");

        liElement.textContent = lsi[i];

        console.log("Mostrando el contenido del li" + liElement);
        ls.appendChild(liElement);
        i++;
    }

    infoPerfil.textContent = "";
    experiencia.appendChild(ls);
    infoPerfil.appendChild(experiencia);
}