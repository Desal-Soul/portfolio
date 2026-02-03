import {AbstractManager} from "../../../../../classes/abstractManager.js";
import {nouvel_onglet_page_corp} from "./page/nouvel_onglet.js";
import {Page} from "./page.js";

export class PagesManager extends AbstractManager {
    constructor() {
        super();
        this._enTraitementOuverture = false;
        this.initRechercheListener();
    }

    initRechercheListener() {
        // Utiliser once: false mais avec un flag pour éviter les duplications
        if (!window._pagesManagerListenerInitialized) {
            window._pagesManagerListenerInitialized = true;

            document.addEventListener("ouvrir-page-recherche", (e) => {
                // Empêcher les appels multiples avec un flag
                if (this._enTraitementOuverture) {
                    return;
                }

                this._enTraitementOuverture = true;

                // Utiliser setTimeout pour éviter les conflits de timing
                setTimeout(() => {
                    this.remplacerOngletParPage(e.detail.pageData);
                    this._enTraitementOuverture = false;
                }, 10);
            });

        }
    }

    remplacerOngletParPage(pageData) {
        if (this._actuel && this._actuel._name === "nouvel onglet") {
            const nom = pageData.nom || pageData[0];
            let contenu = pageData.contenue || pageData[1];
            const tags = pageData.tag || pageData[2] || [];
            contenu = contenu.cloneNode(true);
            // Retirer la classe selected avant de supprimer
            if (this._actuel._logo) {
                this._actuel._logo.classList.remove("selected");
            }

            // Supprimer l'onglet actuel
            const ongletActuelId = this._actuel.onglet_id();

            if (this._actuel._content && this._actuel._content.parentNode) {
                this._actuel._content.remove();
            }
            if (this._actuel._logo && this._actuel._logo.parentNode) {
                this._actuel._logo.remove();
            }

            this._liste.delete(ongletActuelId);

            // Créer la nouvelle page
            const nouvellePage = new Page(nom, contenu, tags);
            this.insert(nouvellePage);
            this._actuel = nouvellePage;
            nouvellePage.ouvrir();
            this.bind(nouvellePage, nouvellePage.onglet_id());
            nouvellePage.afficher();
        } else {
            const nom = pageData.nom || pageData[0];
            let contenu = pageData.contenue || pageData[1];
            const tags = pageData.tag || pageData[2] || [];
            contenu = contenu.cloneNode(true);
            const nouvellePage = new Page(nom, contenu, tags);
            this.insert(nouvellePage);

            if (this._actuel) { this._actuel.cacher(); }

            this._actuel = nouvellePage;
            nouvellePage.ouvrir();
            this.bind(nouvellePage, nouvellePage.onglet_id());
            this.toggle(nouvellePage.onglet_id());
        }
    }

    page_new() {
        let page = new Page(nouvel_onglet_page_corp[0], nouvel_onglet_page_corp[1], nouvel_onglet_page_corp[2]);
        this.insert(page);

        if (this._actuel) { this._actuel.cacher(); }

        this._actuel = page;
        page.ouvrir();
        this.bind(page, page.onglet_id());
        this.toggle(page.onglet_id());
    }

    insert(contenue) {
        this._liste.set(contenue.onglet_id(), contenue);
    }

    afficher(contenue) {
        if (contenue === undefined || contenue === null) {return;}
        if (contenue !== this._actuel) {
            this.cacher();
            this._actuel = contenue;
        } this._actuel.afficher();
    }

    toggle(nom) { this.afficher(this._liste.get(nom)); }

    bind(contenue, tag) { contenue.get_logo().addEventListener('click', (event) => { this.toggle(tag); });

        contenue._logo.getElementsByClassName("fermer")[0].addEventListener("click", (e) => {
            e.stopPropagation();
            let keys = Array.from(this._liste.keys());
            if (contenue === this._actuel && keys.length > 1) {
                let num = keys.indexOf(tag);
                if (num !== 0) { num = num - 1; }
                let new_tag = keys[num];
                this.toggle(new_tag);
            }
            document.getElementById("onglet_"+contenue.onglet_id()).remove()
            document.getElementById("contenu_"+contenue.onglet_id()).remove()
            this._liste.delete(tag);
            if (this._liste.size === 0) { this.page_new(); }
        });
    }

    cacher() { if (this._actuel != null) { this._actuel.cacher(); } }
    reouvrir() { for (var [key, value] of this._liste) { value.afficher_onglet(); } }
    fermer() { for (var [key, value] of this._liste) { value.fermer(); } }
}
