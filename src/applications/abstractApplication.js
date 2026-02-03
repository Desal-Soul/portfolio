export class AbstractApplication {
    _name;
    _container;
    _lienRessources;
    constructor(name) {
        if (this.constructor === AbstractApplication) { console.error("AbstractApplication est une classe abstraite"); return;}
        this._name = name;
        this._container = this.init();
        this._lienRessources = "ressources/images/"+name+"/"
        this.init_interface()
        this._affichage_console_reussite()

    }

    _affichage_console_reussite(){/*console.log(" + Creation de l'application "+this._name)*/}

    init() {
        /** INITIALISATION DE L'APPLICATION SUR L'ÉCRAN**/
        let doc = document.createElement("div");
        document.getElementById("desktop").append(doc);
        /** INITIALISATION DES VARIABLES DE L'APPLICATION **/
        doc.id = "app_"+this._name;
        doc.classList.add("hidden");
        doc.classList.add("app");

        return doc;
    }

    init_interface(){
        if (this.constructor === AbstractApplication) { console.error("AbstractApplication est une classe abstraite"); return;}
    }

    toggle() {
        if (this._container.classList.contains('hidden')){ this.afficher();}
        else {this.cacher();}
    }

    ouvrir() {
        this.afficher();
    }

    afficher() {
        if (!this._container.classList.contains("selected")) {this._container.classList.add("selected");}
        if (this._container.classList.contains("hidden")) {this._container.classList.remove("hidden");}
    }

    cacher() {
        if (this._container.classList.contains("selected")) {this._container.classList.remove("selected");}
        if (!this._container.classList.contains("hidden")) {this._container.classList.add("hidden");}
    }

    fermer() {
        this.cacher();
    }
}