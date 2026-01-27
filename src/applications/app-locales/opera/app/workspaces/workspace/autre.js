import Workspace from "../workspace.js";

export let autre = new Workspace("workspace_autre");

import {page_autres_projets} from "../../pages/page/page_autres_projets.js";
page_autres_projets._content.id = 'autre_'+page_autres_projets._name

autre.insert_page(page_autres_projets);

autre._listes_page._actuel = page_autres_projets;