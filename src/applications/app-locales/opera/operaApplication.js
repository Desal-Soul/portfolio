import {AbstractApplicationAvecLogo} from "../../abstractApplicationAvecLogo.js"
import {OperaNav} from "./app/.opera.js"
class OperaApplication extends AbstractApplicationAvecLogo {
    constructor() {
        super("opera");
        this.init_interface();
        this.opera_nav = new OperaNav();
    }

    init_interface() {
        this._container.innerHTML =
            "<div id='workspaces' class='collum_box'>" +
            "   <img src='ressources/images/opera/opera.png' class='icon_workspace'>" +
            "</div>"+
            "<div id='navigateur' class='collum_box'>"+
                "<div id='onglets'><div id='onglets_liste'></div><div id='btn_nouvel_onglet'>+</div></div>"+
                "<div id='bar_opera'></div>"+
                "<div id='page'></div>"+
            "</div>"
    }
}

export let opera = new OperaApplication();