import {AbstractManager} from "../../../../../classes/abstractManager.js";
import {Page} from "../pages/page.js";
import {nouvel_onglet_page_corp} from "../pages/page/nouvel_onglet.js";

class WorkspacesManager extends AbstractManager{
    constructor() {
        super();
        console.log("initialisation des Workspaces")
        document.getElementById('btn_nouvel_onglet').addEventListener('click', () => {
            this.ajout_nouvel_onglet();
        });
    }
    toggle(nom) {
        console.log("workspace toggle")
        if (nom !== this._actuel._name){
            this._actuel.fermer_onglets()
            this.afficher(this._liste.get(nom));
        }
    }

    ajout_nouvel_onglet() {
        console.log(this._actuel._name + " nouvel onglet");
        this._actuel.insert_page(nouvel_onglet_page_corp);
        let val = Array.from(this._actuel._listes_page._liste.keys())[Array.from(this._actuel._listes_page._liste.keys()).length - 1]
        this._actuel._listes_page.afficher(val)
    }

    activation_interne(){
        for (var [key, value] of this._liste) {
            value._listes_page.activer();
        }
    }


}

export default WorkspacesManager