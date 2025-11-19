import {Page} from "../page.js";

let contenue = document.createElement("div");
contenue.innerHTML =
    "<iframe src='ressources/documents/train.html'>" +
    "</iframe>"
const nom = "train";
const tag = ["java", "jeu", "sae", "projet"];
export const train_page_corp = [nom, contenue, tag]