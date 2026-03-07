import {AbstractApplicationAvecLogo} from "../../abstractApplicationAvecLogo.js"
import {OperaNav} from "./app/opera.js"
class OperaApplication extends AbstractApplicationAvecLogo {
    constructor() {
        super("opera", true);
        this.init_interface();
        this.opera_nav = new OperaNav();
        this.init_btn_cacher_listener();
        this.init_btn_fermer_listener();
    }

    init_interface() {
        this._container.innerHTML =
            "<div id='workspaces' class='collum_box'>" +
            "   <img src='ressources/images/opera/opera.png' class='icon_workspace'>" +
            "</div>"+
            "<div id='navigateur' class='collum_box'>"+
                "<div id='onglets'>" +
                    "<div id='groupe_onglets'><div id='onglets_liste'></div><div id='btn_nouvel_onglet'>+</div></div>" +
                    "<div id='btn_cacher_opera'>_</div><div id='btn_fermer_opera'>╳</div>" +
                "</div>"+
                "<div id='bar_opera'></div>"+
                "<div id='page'></div>"+
            "</div>"
    }

    init_btn_cacher_listener() {
        document.getElementById('btn_cacher_opera').addEventListener('click', () => {
            this.cacher()
        });
    }

    init_btn_fermer_listener() {
        document.getElementById('btn_fermer_opera').addEventListener('click', () => {
            this.fermer()
        });
    }
}

export let opera = new OperaApplication();