const menu = document.getElementById("menuW");
const panelMenu = document.getElementById("panelMenu");

menu.addEventListener("click",()=>{
    panelMenu.classList.toggle("active");
});
