export class AbstractManager {
    _liste;
    _actuel;
    constructor() {
        this._liste = new Map();
        this._actuel = null;
    }

    insert(contenue){
        this._liste.set(contenue._name, contenue);
    }
    afficher(contenue) {
        if (this._actuel !== contenue) {
            if (this._actuel != null) { this._actuel.cacher() }
            this._actuel = contenue;
            this._actuel.afficher()
        }
    }

    cacher() {
        if (this._actuel != null) {
            this._actuel.cacher();
            this._actuel = null;
        }
    }

    toggle(nom) {
        if (this._actuel === this._liste.get(nom)) { this.cacher() }
        else {this.afficher(this._liste.get(nom))}
    }

    bind(contenue, tag) {
        contenue.get_logo().addEventListener('click', (event) => {this.toggle(tag);});
    }

    activer() {
        for (var [key, value] of this._liste) {
            value.ouvrir();
            this.bind(value, key);
            value.cacher()
        }
    }
}