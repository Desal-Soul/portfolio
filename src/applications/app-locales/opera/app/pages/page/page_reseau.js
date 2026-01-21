import {Page} from "../page.js";

let contenue = document.createElement("div");
contenue.innerHTML =
    "<iframe credentialless='true' src='ressources/documents/cv.pdf'>" +
    "</iframe>"
export let page_reseau = new Page("reseau", contenue, [])