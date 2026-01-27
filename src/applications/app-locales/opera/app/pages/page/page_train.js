import {Page} from "../page.js";

let contenue = document.createElement("div");
contenue.innerHTML =
    "<iframe src='ressources/documents/train.html'>" +
    "</iframe>"
export let page_train = new Page("train", contenue, [])