import {Page} from "../page.js";

let contenue = document.createElement("div");
contenue.innerHTML =
    "<iframe src='https://www.linkedin.com/in/alexandre-deschanel/'>" +
    "</iframe>"
export let page_reseau = new Page("reseau", contenue, [])