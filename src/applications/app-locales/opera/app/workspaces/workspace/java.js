import Workspace from "../workspace.js";

export let java = new Workspace("workspace_java");
import {page_train} from "../../pages/page/page_train.js";
page_train._content.id = 'java_'+page_train._name
java.insert_page(page_train);

java._listes_page._actuel = page_train;