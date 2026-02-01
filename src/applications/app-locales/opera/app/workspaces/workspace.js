import {PagesManager} from "../pages/pagesManager.js";
import {Page} from "../pages/page.js";

class Workspace {
    _listes_page;
    _name;
    _logo;
    constructor(name) {
        this._listes_page = new PagesManager();
        this._name = name;
        console.log("initialisation du workspace : "+name)
    }

    insert_page(page) {
        let temp = new Page(page[0], page[1].cloneNode(true), page[2])
        this._listes_page.insert(temp)
    }

    ouvrir(){
        let workspaces = document.getElementById("workspaces");
        this._logo = document.createElement("img");
        workspaces.append(this._logo);
        this._logo.id = "workspace_"+this._name;
        this._logo.src = "ressources/images/opera/workspaces/"+ this._name +".png";
        this._logo.classList.add("icon_workspace");
    }
    afficher(){
        console.log('afficher '+this._name);
        if (!this._logo.classList.contains("selected")) {this._logo.classList.add("selected");}
        this._listes_page.reouvrir()
        this._listes_page.afficher(this._listes_page._actuel);
    }
    cacher(){
        if (this._logo.classList.contains("selected")) {this._logo.classList.remove("selected");
            this._listes_page.cacher();
        }
    }
    fermer_onglets() {
        this._listes_page.fermer()
    }

    get_logo(){ return this._logo; }

}

export default Workspace