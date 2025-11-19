import {AbstractManager} from "../../../../../classes/abstractManager.js";
import {Page} from "./page.js";
import {nouvel_onglet_page_corp} from "./page/nouvel_onglet.js";

export class PagesManager extends AbstractManager{
    constructor() { super(); }
    insert(contenue){
        const page = new Page(contenue[0],contenue[1],contenue[2]);
        this._liste.set(page._id(), page);
        if (this._actuel === null){ this._actuel = page; }
    }

    afficher(contenue) {
        if (contenue) console.log("affichage page "+contenue._name);
        if (contenue === undefined || contenue === null) {
            console.warn("Contenue null" )
        } else if (contenue !== this._actuel) {
            this.cacher();
            this._actuel = contenue;
        }
        this._actuel.afficher();
    }

    toggle(nom) {
        this.afficher(this._liste.get(nom))
    }

    bind(contenue, tag) {
        contenue.get_logo().addEventListener('click', (event) => {
            this.toggle(tag);
        });

        contenue._logo.getElementsByClassName("fermer")[0].addEventListener("click", (e) => {
            e.stopPropagation(); // Empêche le clic de se propager au logo parent

            console.log("SUPPRESSION " + contenue._id());
            let keys = Array.from(this._liste.keys());


            if (contenue === this._actuel && keys.length > 1) {
                let num = keys.indexOf(tag);
                if (num !== 0) {
                    num = num - 1;
                }
                let new_tag = keys[num];
                console.log('LOG : ' + this._liste.get(new_tag)._id());
                this.toggle(new_tag);
            }

            contenue._content.remove();
            contenue._logo.remove();
            this._liste.delete(tag);
            if (this._liste.size === 0) {
                let nouvel_onglet = new Page(nouvel_onglet_page_corp[0], nouvel_onglet_page_corp[1], nouvel_onglet_page_corp[2])
                this.insert(nouvel_onglet);
                this.afficher(nouvel_onglet)
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