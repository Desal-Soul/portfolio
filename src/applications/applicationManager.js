class ApplicationManager {
    constructor() {
        this.applications = []
        this.application_active = null;
    }

    insert_app(application) {
        this.applications.includes(application);
    }

    afficher_app(application) {
        if (this.application_active !== application) {
            this.application_active.cacher()
            this.application_active = application;
        }
    }

    cacher_app(){
        this.application_active.cacher();
        this.application_active = null;
    }
}

export let app_manager = new ApplicationManager();