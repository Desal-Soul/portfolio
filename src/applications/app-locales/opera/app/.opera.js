import WorkspacesManager from "./workspaces/workspacesManager.js";
import {accueil} from "./workspaces/workspace/accueil.js"
import {java} from "./workspaces/workspace/java.js"
import {web} from "./workspaces/workspace/web.js"
import {python} from "./workspaces/workspace/python.js"
import {reseau} from "./workspaces/workspace/reseau.js"
import {experiences} from "./workspaces/workspace/experiences.js"
import {autre} from "./workspaces/workspace/autre.js"

export class OperaNav {
    _gestionnaire_workspace;
    constructor() {
        this._gestionnaire_workspace = new WorkspacesManager();
        this.int_workspaces()
    }

    int_workspaces() {
        this._gestionnaire_workspace.insert(accueil);
        this._gestionnaire_workspace.insert(java);
        this._gestionnaire_workspace.insert(web);
        this._gestionnaire_workspace.insert(python);
        this._gestionnaire_workspace.insert(reseau);
        this._gestionnaire_workspace.insert(experiences);
        this._gestionnaire_workspace.insert(autre);


        this._gestionnaire_workspace.activer();
        this._gestionnaire_workspace.activation_interne();
        java.fermer_onglets();
        web.fermer_onglets();
        python.fermer_onglets();
        reseau.fermer_onglets();
        experiences.fermer_onglets();
        autre.fermer_onglets();
        this._gestionnaire_workspace.afficher(accueil);
    }

}