export class AbstractApplication {
    _name;
    _container;
    _lienRessources;
    constructor(name) {
        if (this.constructor === AbstractApplication) {
            console.error("AbstractApplication est une classe abstraite")
            return;
        }
        this._name = name;
        this._container = this.init();
        this._lienRessources = "ressources/images/"+name+"/"
        this._affichage_console_reussite()
    }

    _affichage_console_reussite(){console.log(" + Creation de l'application "+this._name)}

    init() {
        /** INITIALISATION DE L'APPLICATION SUR L'ÉCRAN**/
        let doc = document.createElement("div");
        document.getElementById("desktop").append(doc)
        /** INITIALISATION DES VARIABLES DE L'APPLICATION **/
        doc.id = "app_"+name;
        return doc;
    }

    toggle() {
        if (this._container.classList.contains("hidden")){
            this.afficher();
        } else {
            this.cacher();
        }
    }

    ouvrir() {
        console.log("Ouverture de "+this._name);
        this.afficher();
    }

    afficher() {
        console.log("affichage de "+this._name);
        if (!this._container.classList.contains("selected")) {this._container.classList.add("selected");}
        if (this._container.classList.contains("hidden")) {this._container.classList.remove("hidden");}
    }

    cacher() {
        console.log("Masquage de "+this._name);
        if (this._container.classList.contains("selected")) {this._container.classList.remove("selected");}
        if (!this._container.classList.contains("hidden")) {this._container.classList.add("hidden");}
    }

    fermer() {
        console.log("Fermeture de "+this._name);
        this.cacher();
    }
}