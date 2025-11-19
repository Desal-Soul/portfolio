import {Page} from "../page.js"
let contenue = document.createElement("div");
contenue.innerHTML =
    "<iframe src='ressources/documents/presentation.html'>" +
    "</iframe>"
export let page_presentation = new Page("presentation", contenue, ["page", "presentation", "description"])
