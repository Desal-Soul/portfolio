import {AbstractManager} from "../../../../../classes/abstractManager.js";
import {Page} from "../pages/page.js";

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
        this._actuel._listes_page.page_new();
    }

    activation_interne(){
        for (var [key, value] of this._liste) {
            value._listes_page.activer();
        }
    }


}

export default WorkspacesManager