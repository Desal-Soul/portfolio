class TaskBar {
    constructor() {
        this.container = document.getElementById("taskbar");
        this.apps = []
        this.app_open = null;
    }

    init(){
        this.container.innerHTML =
            "<img id='bMenuWindows' class='icon_app' src='ressources/picto/menu_windows.png'>"+
            "<div id='rechercherTaskBar' class='barreRecherche'>" +
            "   <img src='ressources/picto/loupe.png' id='logo_recherche_taskBar' alt='loupe'>" +
            "   <input type='text' class='chercher' id='bar_recherche_taskBar' placeholder='Rechercher'>"+
            "</div>"+
            "<div id='liste_applications'>" +
            "   " +
            "</div>"+
            "<div id='date_heure'>" +
            "</div>";
    }
}

let task_bar = new TaskBar();
task_bar.init();
