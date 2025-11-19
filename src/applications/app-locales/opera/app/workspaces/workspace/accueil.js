import Workspace from "../workspace.js";

export let accueil = new Workspace("workspace_accueil");
import {page_presentation} from "../../pages/page/page_presentation.js"
accueil.insert_page(page_presentation);
page_presentation._content.id = 'acceuil_'+page_presentation._name

import {page_cv} from "../../pages/page/page_cv.js"
accueil.insert_page(page_cv);
page_cv._content.id = 'acceuil_'+page_cv._name
accueil._listes_page._actuel = page_cv;