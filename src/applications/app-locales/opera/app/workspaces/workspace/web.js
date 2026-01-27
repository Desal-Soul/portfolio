import Workspace from "../workspace.js";

export let web = new Workspace("workspace_web");
import {page_ctfd_2024} from "../../pages/page/page_ctfd_2024.js";
page_ctfd_2024._content.id = 'web_'+page_ctfd_2024._name

web.insert_page(page_ctfd_2024);

web._listes_page._actuel = page_ctfd_2024;