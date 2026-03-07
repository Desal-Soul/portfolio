import {jeu, python} from "./tags/liste_de_tag.js";

let contenue = document.createElement("div");
contenue.innerHTML =
    "<iframe src='ressources/documents/dame.html'>" +
    "</iframe>"

let tag = python.concat("lycee", "nsi", "2022/2021").concat(jeu);
export let page_dame = ["dame", contenue, tag]