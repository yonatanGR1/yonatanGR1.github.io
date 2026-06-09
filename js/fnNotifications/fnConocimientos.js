const infoPerfil = document.getElementById("infoPerfil");
let lsi = [
  "Mantenimiento Preventivo y Correctivo.",
  "Microsoft office (Word, Excel, PowerPoint, Access)",
  "HTML, CSS y JavaScript.",
  "PostgreSQL, Ubuntu, Windows Server.", 
  "AWS EC2, Amazon EBS, Docker. ", 
  "PHP, GitHub , Laragon, documentación Tecnica",
  "Unreal Engine 5." 
];
let li = 7;

export function fnConocimientos(){
    const conocimientos = document.createElement("div");
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
    conocimientos.appendChild(ls);
    infoPerfil.appendChild(conocimientos);
}