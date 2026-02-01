import Workspace from "../workspace.js";

export let java = new Workspace("workspace_java");
import {page_train} from "../../pages/page/page_train.js";
java.insert_page(page_train);

for (const key of java._listes_page._liste.keys()) {java._listes_page._actuel = java._listes_page._liste.get(key);break;}