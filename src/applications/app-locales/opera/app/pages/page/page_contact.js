import {} from "./tags/liste_de_tag.js";

let contenue = document.createElement("div");
contenue.innerHTML =
    "<iframe src='ressources/documents/contact.html'>" +
    "</iframe>"


export let page_contact = ["contact", contenue, ["contact"]]