import {ctfd, design} from "./tags/liste_de_tag.js";

let contenue = document.createElement("div");
contenue.innerHTML =
    "<iframe src='ressources/documents/work_in_progress.html'>" +
    "</iframe>"


export let page_gate_k = ["Gate K", contenue, ctfd.concat(design).concat("centralisation")]