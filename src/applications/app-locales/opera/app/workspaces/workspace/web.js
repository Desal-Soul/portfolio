import Workspace from "../workspace.js";

export let web = new Workspace("workspace_web");
import {page_ctfd_2024} from "../../pages/page/page_ctfd_2024.js";
import {page_ctfd_2025} from "../../pages/page/page_ctfd_2025.js";

web.insert_page(page_ctfd_2025);
web.insert_page(page_ctfd_2024);


for (const key of web._listes_page._liste.keys()) {web._listes_page._actuel = web._listes_page._liste.get(key);break;}