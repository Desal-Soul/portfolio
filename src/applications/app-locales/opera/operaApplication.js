import {AbstractApplicationAvecLogo} from "../../abstractApplicationAvecLogo.js"
class OperaApplication extends AbstractApplicationAvecLogo {
    constructor() {
        super("opera");
    }
}

export let opera = new OperaApplication();