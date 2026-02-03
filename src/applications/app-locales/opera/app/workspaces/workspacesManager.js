import {AbstractManager} from "../../../../../classes/abstractManager.js";
import {Page} from "../pages/page.js";

class WorkspacesManager extends AbstractManager{
    constructor() {
        super();
        document.getElementById('btn_nouvel_onglet').addEventListener('click', () => {
            this.ajout_nouvel_onglet();
        });
    }
    toggle(nom) {
        if (nom !== this._actuel._name){
            this._actuel.fermer_onglets()
            this.afficher(this._liste.get(nom));
        }
    }

    ajout_nouvel_onglet() {
        this._actuel._listes_page.page_new();
    }

    activation_interne(){
        for (var [key, value] of this._liste) {
            value._listes_page.activer();
        }
    }


}

export default WorkspacesManager