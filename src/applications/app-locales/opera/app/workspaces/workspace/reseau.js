import Workspace from "../workspace.js";

export let reseau = new Workspace("workspace_reseau");
import {page_reseau} from "../../pages/page/page_reseau.js";
page_reseau._content.id = 'reseau_'+page_reseau._name

reseau.insert_page(page_reseau);

reseau._listes_page._actuel = page_reseau;