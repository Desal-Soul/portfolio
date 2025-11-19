let contenue = document.createElement("div");
contenue.innerHTML =
    "<iframe src='ressources/documents/cv.pdf'>" +
    "</iframe>"
const nom = "cv"
const tag = ["presentation", "description", "cv"]
export const cv_page_corp = [nom, contenue, tag]