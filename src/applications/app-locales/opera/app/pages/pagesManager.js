import {AbstractManager} from "../../../../../classes/abstractManager.js";
import {nouvel_onglet_corp} from "./page/nouvel_onglet_corp.js";

export class PagesManager extends AbstractManager{
    constructor() {
        super();
        console.log("initialisation des Pages");

    }

    page_new(){
        this.insert(nouvel_onglet_corp);
    }

    afficher(contenue) {
        console.log(contenue);
        if (contenue === undefined || contenue === null) {
            console.warn("Tentative d'affichage d'un élément inexistant");
            return;
        }
        if (contenue !== this._actuel) {
            this.cacher();
            this._actuel = contenue;
        }
        this._actuel.afficher();
    }

    toggle(nom) {
        console.log("#nom = "+nom)
        this.afficher(this._liste.get(nom))
    }

    bind(contenue, tag) {
        contenue.get_logo().addEventListener('click', (event) => {
            this.toggle(tag);
        });

        contenue._logo.getElementsByClassName("fermer")[0].addEventListener("click", (e) => {
            e.stopPropagation(); // Empêche le clic de se propager au logo parent

            console.log("SUPPRESSION " + contenue._name);
            let keys = Array.from(this._liste.keys());


            if (contenue === this._actuel && keys.length > 1) {
                let num = keys.indexOf(tag);
                if (num !== 0) {
                    num = num - 1;
                }
                let new_tag = keys[num];
                console.log('LOG : ' + this._liste.get(new_tag)._name);
                this.toggle(new_tag);
            }

            contenue._content.remove();
            contenue._logo.remove();
            this._liste.delete(tag);
            if (this._liste.size === 0) {
                no
            }
        });
    }

    cacher(){
        if (this._actuel != null) {
            this._actuel.cacher();
        }
    }
    reouvrir() {
        for (var [key, value] of this._liste) {
            value.afficher_onglet()
        }
    }
    fermer() {
        for (var [key, value] of this._liste) {
            value.fermer()
        }
    }
}