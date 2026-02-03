import {design} from "./tags/liste_de_tag.js";

let contenue = document.createElement("div");
contenue.innerHTML =
    "<iframe src='ressources/documents/work_in_progress.html'>" +
    "</iframe>"

export let page_ndi_2025 = ["ndi 2025", contenue, design.concat(["support", "ndi"])]