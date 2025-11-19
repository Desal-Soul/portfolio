import {Page} from "../page.js"
let contenue = document.createElement("div");
contenue.innerHTML =
    "<iframe src='ressources/documents/cv.pdf'>" +
    "</iframe>"
export let page_cv = new Page("cv", contenue, ["page", "presentation", "description"])
