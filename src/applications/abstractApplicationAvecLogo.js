import {AbstractApplication} from "./abstractApplication.js"
export class AbstractApplicationAvecLogo extends AbstractApplication {
    _logo;
    constructor(name) {
        super(name);
        if (this.constructor ===  AbstractApplicationAvecLogo) {
            console.error("AbstractApplicationAvecLogo est une classe abstraite")
            return;
        }
        this._logo = this._lienRessources+this._name+".png"
        this._position_logo = document.getElementById("liste_applications")
    }
    _affichage_console_reussite() {console.log("+ Creation de l'application avec logo "+this._name)}
    afficher_logo () {

    }

    cacher_logo() {

    }

    ouvrir() {
        this.afficher_logo()
        super.ouvrir()
    }

    fermer() {
        this.cacher_logo()
        super.fermer()
    }

}

