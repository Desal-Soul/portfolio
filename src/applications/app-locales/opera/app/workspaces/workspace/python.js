import Workspace from "../workspace.js";

export let python = new Workspace("workspace_python");
import {page_no_game_no_life} from "../../pages/page/page_no_game_no_life.js";
page_no_game_no_life._content.id = 'python_'+page_no_game_no_life._name

python.insert_page(page_no_game_no_life);

python._listes_page._actuel = page_no_game_no_life;