import Workspace from "../workspace.js";

export let experiences = new Workspace("workspace_experiences");

import {page_cfpo} from "../../pages/page/page_cfpo.js";
page_cfpo._content.id = 'experiences_'+page_cfpo._name

experiences.insert_page(page_cfpo);

experiences._listes_page._actuel = page_cfpo;