

export function downloadMP3(){
    console.log("Descargando Imagen");

    // Crear enlace temporal
    const link = document.createElement("a");
    link.href = "/assets/archivos/ReproductorMP3.exe"; // ruta del archivo
    link.download = "ReproductorMP3.exe";              // nombre sugerido al guardar

    // Simular click en el enlace
    link.click();
}