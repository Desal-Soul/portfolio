import {jeu, python} from "./tags/liste_de_tag.js";

let contenue = document.createElement("div");
contenue.innerHTML =
    "<iframe src='ressources/documents/work_in_progress.html'>" +
    "</iframe>"

let tag = python.concat("lycee", "nsi", "2023/2022").concat(jeu);

export let page_no_game_no_life = ["no game no life", contenue, tag]