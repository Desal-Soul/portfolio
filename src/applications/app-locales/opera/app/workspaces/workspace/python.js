import Workspace from "../workspace.js";

export let python = new Workspace("workspace_python");
import {page_no_game_no_life} from "../../pages/page/page_no_game_no_life.js";

python.insert_page(page_no_game_no_life);

for (const key of python._listes_page._liste.keys()) {python._listes_page._actuel = python._listes_page._liste.get(key);break;}