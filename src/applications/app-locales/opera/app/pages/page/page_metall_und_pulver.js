import {web_avancer} from "./tags/liste_de_tag.js";

let contenue = document.createElement("div");
contenue.innerHTML =
    "<iframe src='ressources/documents/work_in_progress.html'>" +
    "</iframe>"


export let page_metall_und_pulver = ["Metall und Pulver", contenue, web_avancer.concat("site marchand", "BUT", "2025")]