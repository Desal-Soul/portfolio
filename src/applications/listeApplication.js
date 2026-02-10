import {app_manager} from "./applicationManager.js";
import {opera} from "./app-locales/opera/operaApplication.js";
import {demarrer} from "./app-locales/menu-demarrer/demarrerApplication.js";

app_manager.insert(opera);
app_manager.activer();