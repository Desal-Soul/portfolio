import Workspace from "../workspace.js";

export let experiences = new Workspace("workspace_experiences");

import {page_cfpo} from "../../pages/page/page_cfpo.js";

experiences.insert_page(page_cfpo);

for (const key of experiences._listes_page._liste.keys()) {experiences._listes_page._actuel = experiences._listes_page._liste.get(key);break;}