import Workspace from "../workspace.js";

export let autre = new Workspace("workspace_autre");

import {page_global_game_jam_2026} from "../../pages/page/page_global_game_jam_2026.js";
import {page_code_game_jam_2026} from "../../pages/page/page_code_game_jam_2026.js";
import {page_train} from "../../pages/page/page_train.js";

autre.insert_page(page_train);
autre.insert_page(page_global_game_jam_2026);
autre.insert_page(page_code_game_jam_2026);


for (const key of autre._listes_page._liste.keys()) {autre._listes_page._actuel = autre._listes_page._liste.get(key);break;}