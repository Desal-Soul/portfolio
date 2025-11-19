import {AbstractManager} from "../classes/abstractManager.js";

class ApplicationManager extends AbstractManager{
    constructor() { super() }
}

export let app_manager = new ApplicationManager();