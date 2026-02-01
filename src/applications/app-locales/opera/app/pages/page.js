export class Page {
    _name;
    _content;
    _tag;
    _logo;
    _date;

    constructor(name, content, tag) {
        this._name = name;
        this._content = content;
        this._tag = tag;
        this._date = Date.now()
    }
    onglet_nom(){
        return this._name;
    }
    onglet_id(){
        return this._date+"_"+this._name;
    }

    init_onglet(){
        let onglets = document.getElementById("onglets_liste");
        this._logo = document.createElement("div");
        this._logo.classList.add("onglet");
        this._logo.classList.add("selected");
        this._logo.id = "onglet_"+this.onglet_id();
        let lien_image = "<img src='ressources/images/opera/pages/logo_" + this._name.toLowerCase().replace(/ /g, '_') + ".png' onerror=\"this.onerror=null; this.src='ressources/images/opera/pages/inconnue.png'\">";
        this._logo.innerHTML = lien_image + "<p class='name'>"+ this.onglet_nom() + "</p>" + "<p class='fermer'>⨉</p>"
        onglets.append(this._logo);
    }

    ouvrir(){
        let page = document.getElementById("page");
        console.log("ouverture page" + this._name)
        page.append(this._content);
        this._content.id = "contenu_"+this.onglet_id();
        this.init_onglet()
    }
    fermer(){
        console.log("fermeture page " + this._name)
        this.cacher();
        if (!this._logo.classList.contains("hidden")) {this._logo.classList.add("hidden")}
    }
    afficher(){
        if (this._content.classList.contains("hidden")) {this._content.classList.remove("hidden"); }
        if (!this._logo.classList.contains("selected")){this._logo.classList.add("selected")}
    }
    cacher() {
        if (!this._content.classList.contains("hidden")) {this._content.classList.add("hidden"); }
        if (this._logo.classList.contains("selected")){this._logo.classList.remove("selected")}
    }
    cacher_onglet() {
        if (!this._logo.classList.contains("hidden")) {this._logo.classList.add("hidden")}
    }
    afficher_onglet() {
        if (this._logo.classList.contains("hidden")) {this._logo.classList.remove("hidden")}
    }

    toggle(){console.error('toggle pas encore implementer dans '+this._name);}
    get_logo(){return this._logo;}

    getContente(){ return this._content }
    getTag(){ return this._tag }

}