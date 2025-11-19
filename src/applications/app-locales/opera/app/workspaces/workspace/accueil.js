import Workspace from "../workspace.js";

export let accueil = new Workspace("workspace_accueil");
import {presentation_page_corp} from "../../pages/page/page_presentation.js";
accueil._listes_page.insert(presentation_page_corp);

import {cv_page_corp} from "../../pages/page/page_cv.js";
accueil._listes_page.insert(cv_page_corp);

import {nouvel_onglet_page_corp} from "../../pages/page/nouvel_onglet.js";
accueil._listes_page.insert(nouvel_onglet_page_corp)