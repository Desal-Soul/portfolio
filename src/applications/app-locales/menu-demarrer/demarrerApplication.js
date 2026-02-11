import {AbstractApplicationAvecLogo} from "../../abstractApplicationAvecLogo.js";
import {AbstractApplication} from "../../abstractApplication.js";

class demarrerApplication extends AbstractApplication {
    constructor() {
        super("demarrer", true);
        this._logo = document.getElementById("bMenuWindows")

        this._logo.addEventListener("click", (e) => {
            this.toggle();
        });
        /**window.focus();

        window.addEventListener("blur", (event) => {
            setTimeout(() => {
                if(document.activeElement.tagName === "IFRAME") {
                    if (!document.getElementById('app_demarrer').classList.contains("hidden")){
                        const window_logo = document.getElementById('bMenuWindows');
                        const menu = document.getElementById('app_demarrer');
                        if (!menu.contains(event.target) && !window_logo.contains(event.target)) {
                            demarrer.toggle()
                        }
                    }
                    console.log("Clic détecté dans une iframe");
                }
            }, 0);
        });*/
        var iframewatcher = setInterval(function(){
            var activeE = document.activeElement;
            if(activeE && activeE.tagName == 'IFRAME'){
                if (!document.getElementById('app_demarrer').classList.contains("hidden")){ demarrer.toggle() }
                window.focus();
        } }, 100);

        document.addEventListener('click', function(event) {
            if (!document.getElementById('app_demarrer').classList.contains("hidden")){
                const window_logo = document.getElementById('bMenuWindows');
                const menu = document.getElementById('app_demarrer');
                if (!menu.contains(event.target) && !window_logo.contains(event.target)) {
                    demarrer.toggle()
                }
            }
        });
    }

    init() {
        let doc = super.init();
        doc.innerHTML = "" +
            "<div id='app_demarrer_top'></div>" +
            "<div id='app_demarrer_mid'></div>"+
            "<div id='app_demarrer_bot'></div>"
        return doc;
    }
}

export let demarrer = new demarrerApplication();