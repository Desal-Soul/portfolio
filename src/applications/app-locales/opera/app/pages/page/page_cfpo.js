import {dolibarr, stage} from "./tags/liste_de_tag.js";

let contenue = document.createElement("div");
contenue.innerHTML =
    "<iframe src='ressources/documents/stage_cfpo.html'>" +
    "</iframe>"

let tag = dolibarr.concat(stage.concat(["2025"]));
export let page_cfpo = ["stage cfpo", contenue, tag]
