import "./app.js";
import "./notifications.js";

import "./i18n/languageManager.js";
import "./app.js";

import "./menu.js"
import "./language.js";

import "./fnNotifications/removeFns.js";
import "./fnNotifications/fnExperiencia.js";
import "./fnNotifications/fnConocimientos.js";
import "./fnNotifications/fnDocumentacion.js";
import "./fnNotifications/fnProyectos.js";
import "./fnNotifications/fnContactos.js";
import { observarEtiquetas } from "./fnNotifications/observerEtiquetas.js";
import "./switchNotification.js";
import "./insertElements.js";

observarEtiquetas();

console.log("Se cargo main.js");
