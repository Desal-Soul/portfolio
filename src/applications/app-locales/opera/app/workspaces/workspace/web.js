import Workspace from "../workspace.js";

export let web = new Workspace("workspace_web");
import {page_ctfd_2024} from "../../pages/page/page_ctfd_2024.js";
import {page_ctfd_2025} from "../../pages/page/page_ctfd_2025.js";
import {page_metall_und_pulver} from "../../pages/page/page_metall_und_pulver.js";
import {page_ndi_2025} from "../../pages/page/page_ndi_2025.js";
import {page_ndi_2024} from "../../pages/page/page_ndi_2024.js";
import {page_gate_k} from "../../pages/page/page_gate_k.js"


web.insert_page(page_ctfd_2025);
web.insert_page(page_ctfd_2024);
web.insert_page(page_gate_k)
web.insert_page(page_ndi_2025);
web.insert_page(page_ndi_2024);
web.insert_page(page_metall_und_pulver);


for (const key of web._listes_page._liste.keys()) {web._listes_page._actuel = web._listes_page._liste.get(key);break;}