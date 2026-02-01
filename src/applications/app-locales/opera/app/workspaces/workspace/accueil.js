import Workspace from "../workspace.js";

export let accueil = new Workspace("workspace_accueil");
import {page_presentation} from "../../pages/page/page_presentation.js"
accueil.insert_page(page_presentation);

import {page_cv} from "../../pages/page/page_cv.js"
accueil.insert_page(page_cv);

for (const key of accueil._listes_page._liste.keys()) {accueil._listes_page._actuel = accueil._listes_page._liste.get(key);break;}