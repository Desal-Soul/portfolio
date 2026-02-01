import Workspace from "../workspace.js";

export let reseau = new Workspace("workspace_reseau");
import {page_reseau} from "../../pages/page/page_reseau.js";

reseau.insert_page(page_reseau);

for (const key of reseau._listes_page._liste.keys()) {reseau._listes_page._actuel = reseau._listes_page._liste.get(key);break;}