import { btnCerrarNotificaciones } from "../notifications.js";

const panel = document.getElementById("notificationPanel");

export function observarEtiquetas() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            // Verificar si se agregaron nodos al panel
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach((node) => {
                    // Verificar si el nodo es un elemento (nodeType === 1)
                    if (node.nodeType === 1) {
                        const texto = node.textContent;

                        // Detectar el último elemento de Proyectos (Proyecto2)
                        if (texto.includes("Proyecto2")) {
                            console.log("✅ Detectado: Proyecto2");
                            btnCerrarNotificaciones();
                        }

                        // Detectar el último elemento de Documentación (Unreal-Engine)
                        if (texto.includes("Unreal-Engine-Crear-VideoJuego")) {
                            console.log("✅ Detectado: Unreal-Engine-Crear-VideoJuego");
                            btnCerrarNotificaciones();
                        }
                    }
                });
            }
        });
    });

    // Observar cambios en el panel (solo childList para agregar/remover elementos)
    observer.observe(panel, { 
        childList: true,
        subtree: true
    });

    console.log("🔍 Observer iniciado en panel de notificaciones");

    // Retornar el observer por si necesitas detenerlo después
    return observer;
}
