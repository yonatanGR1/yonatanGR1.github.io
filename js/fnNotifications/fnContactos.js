import { t } from "../i18n/languageManager.js";
import { removeFns } from "./removeFns.js";

const infoPerfil = document.getElementById("infoPerfil");

export function fnContactos(){
    /*****************Guardar la seccion actual*************************/
    localStorage.setItem("currentSection", "Contact");


    infoPerfil.textContent = "";

    /******************************DIV PRINCIPAL*************************/
    const wrapper = document.createElement("div");
    wrapper.className = "contact-form-wrapper";

    const form = document.createElement("form");
    form.className = "contact-form";
    form.action = "https://formspree.io/f/xdavgjzk";
    form.method = "POST";

    const fields = [
        { label: t("full_name"), name: "name", type: "text", placeholder: t("your_name"), required: true },
        { label: t("email"), name: "email", type: "email", placeholder: t("email_placeholder"), required: true },
        { label: t("subject"), name: "subject", type: "text", placeholder: t("subject"), required: true }
    ];

    fields.forEach(field => {
        const fieldLabel = document.createElement("label");
        fieldLabel.textContent = field.label;

        const input = document.createElement("input");
        input.type = field.type;
        input.name = field.name;
        input.placeholder = field.placeholder;
        if (field.required) input.required = true;

        fieldLabel.appendChild(input);
        form.appendChild(fieldLabel);
    });

    const messageLabel = document.createElement("label");

    const textarea = document.createElement("textarea");
    textarea.name = "message";
    textarea.placeholder = t("message_placeholder");
    textarea.required = true;
    textarea.rows = 6;

    messageLabel.appendChild(textarea);
    form.appendChild(messageLabel);

    const replyInput = document.createElement("input");
    replyInput.type = "hidden";
    replyInput.name = "_replyto";
    form.appendChild(replyInput);

    const subjectInput = document.createElement("input");
    subjectInput.type = "hidden";
    subjectInput.name = "_subject";
    subjectInput.value = "Nuevo mensaje desde la web";
    form.appendChild(subjectInput);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = t("send_message");

    const status = document.createElement("div");
    status.className = "form-message";

    form.appendChild(submitButton);
    form.appendChild(status);

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        submitButton.disabled = true;
        submitButton.textContent = t("sending");
        status.textContent = "";

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                status.textContent = t("message_sent");
                status.classList.remove("error");
                form.reset();
            } else {
                const data = await response.json();
                status.textContent = data.error || "No se pudo enviar el mensaje. Intenta nuevamente.";
                status.classList.add("error");
            }
        } catch (error) {
            status.textContent = t("network_error");
            status.classList.add("error");
        }

        submitButton.disabled = false;
        submitButton.textContent = t("send_message");
    });

    wrapper.appendChild(form);
    infoPerfil.appendChild(wrapper);
}
