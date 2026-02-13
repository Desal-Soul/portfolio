import {jeu} from "./tags/liste_de_tag.js";

let contenue = document.createElement("div");
contenue.innerHTML =
    "<iframe src='ressources/documents/train.html'>" +
    "</iframe>"
export let page_train = ["TRAINS", contenue, jeu.concat(["java", "javafx"])]