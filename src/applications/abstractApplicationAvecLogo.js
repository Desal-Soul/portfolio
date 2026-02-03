import {AbstractApplication} from "./abstractApplication.js"
export class AbstractApplicationAvecLogo extends AbstractApplication {
    _logo;
    _is_pin;
    constructor(name, is_pin) {
        super(name);
        if (this.constructor ===  AbstractApplicationAvecLogo) { console.error("AbstractApplicationAvecLogo est une classe abstraite"); return;}
        this._position_logo = document.getElementById("liste_applications")
        this.init_logo()
        this._logo = document.getElementById("logo_"+this._name);
        this._is_pin = is_pin;
    }
    init_logo(){
        let img = document.createElement("img");
        this._position_logo.append(img);
        img.src = this._lienRessources+this._name+".png";
        img.alt = "logo "+this._name;
        img.classList.add("hidden");
        img.classList.add("icon_app")
        img.id = "logo_"+this._name;
    }

    get_logo () { return this._logo; }

    _affichage_console_reussite() {/*console.log("+ Creation de l'application avec logo "+this._name)*/}
    afficher_logo () {
        if (!this._logo.classList.contains("selected")) {this._logo.classList.add("selected");}
        if (this._logo.classList.contains("hidden")) {this._logo.classList.remove("hidden");}
    }

    cacher_logo() {
        if (this._logo.classList.contains("selected")) {this._logo.classList.remove("selected");}
        if (!this._is_pin) {if (!this._logo.classList.contains("hidden")) {this._logo.classList.add("hidden");}}
    }

    ouvrir() {
        this.afficher_logo();
        super.ouvrir();
    }

    afficher() {
        super.afficher();
        this.afficher_logo()
    }
    cacher() {
        super.cacher();
        if (this._logo.classList.contains("selected")) {this._logo.classList.remove("selected");}
    }

    fermer() {
        this.cacher_logo();
        super.fermer();
    }

}

