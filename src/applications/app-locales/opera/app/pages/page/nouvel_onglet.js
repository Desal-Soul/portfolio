import {liste_des_pages} from "./liste_des_pages.js";
import {rechercheAvecScore} from "../../../../../../classes/recherche.js";

let contenue = document.createElement("div");
contenue.classList.add("nouvel_onglet");
const shadow = contenue.attachShadow({ mode: "open" });
shadow.innerHTML = `    
    <style>
        /* Reset local comme un iframe */
        :host {
            all: initial;
            font-family: "Segoe UI", Roboto, sans-serif;
            color: #fff;
        }

        *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body, html {
            all: unset;
            width: 100vw;
            height: 100vh;
        }

        .voxtek-root {
            height: 100vh;
            display: flex;
            flex-direction: column;
            color: #fff;
            font-family: "Segoe UI", Roboto, sans-serif;
            background-color: #0a0e14;
            background-image: url("ressources/images/wallpapers/opera_wallpaper.png");
            background-repeat: no-repeat;
            background-position: center;
            background-attachment: fixed;
            background-size: 55vw auto;
        }

        .voxtek-topbar {
            height: 52px;
            display: flex;
            align-items: center;
            padding: 0 18px;
            background: rgba(5, 7, 12, 0.95);
            border-bottom: 1px solid rgba(0, 229, 255, 0.25);
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
        }

        .voxtek-top-left {
            font-weight: 800;
            letter-spacing: 3px;
            text-transform: uppercase;
        }

        .voxtek-top-left span {
            color: #00e5ff;
        }

        .voxtek-top-center {
            flex: 1;
            text-align: center;
            font-size: 13px;
            opacity: 0.6;
        }

        .voxtek-top-right {
            font-size: 18px;
            opacity: 0.7;
            cursor: pointer;
        }

        .voxtek-main {
            flex: 1;
            position: relative;
            overflow: hidden;
        }

        .voxtek-logo-bg {
            position: absolute;
            inset: 0;
            opacity: 0.12;
            filter: grayscale(10%) contrast(120%);
        }

        .voxtek-background-grid {
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
            background-size: 40px 40px;
            pointer-events: none;
            z-index: 1;
        }

        .voxtek-center {
            position: relative;
            z-index: 2;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .voxtek-search-bar {
            width: min(720px, 90vw);
            height: 54px;
            background: rgba(5, 8, 16, 0.92);
            border-radius: 8px;
            border: 1px solid rgba(0, 229, 255, 0.7);
            display: flex;
            align-items: center;
            padding: 0 18px;
            margin-bottom: 50px;
            box-shadow: 0 0 24px rgba(0, 229, 255, 0.35);
            backdrop-filter: blur(8px);
            box-sizing: border-box;
        }

        .voxtek-prompt {
            color: #00e5ff;
            margin-right: 12px;
            font-family: monospace;
        }

        .voxtek-input {
            flex: 1;
            background: transparent;
            border: none;
            outline: none;
            color: #fff;
            font-size: 15px;
        }

        .voxtek-search-icon {
            background: transparent;
            border: none;
            color: #00e5ff;
            font-size: 20px;
            cursor: pointer;
        }

        .voxtek-shortcuts {
            display: flex;
            gap: 40px;
            margin-top: 10px;
        }

        .voxtek-shortcut-item {
            text-align: center;
            cursor: pointer;
            transition: transform 0.2s;
            text-decoration: none;
            color: inherit;
        }

        .voxtek-shortcut-item:hover {
            transform: translateY(-5px);
        }

        .voxtek-hex-icon {
            width: 60px;
            height: 60px;
            background: rgba(0,0,0,0.25);
            border: 1px solid rgba(0, 229, 255, 0.3);
            clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 10px;
            transition: all 0.3s;
            box-sizing: border-box;
        }

        .voxtek-hex-icon span {
            color: #fff;
            font-size: 20px;
        }

        .voxtek-label {
            color: rgba(70,132,152,0.7);
            font-size: 11px;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-weight: 600;
        }

        /* Zone des résultats de recherche */
        .voxtek-results {
            position: relative;
            z-index: 2;
            width: min(720px, 90vw);
            max-height: 60vh;
            overflow-y: auto;
            background: rgba(5, 8, 16, 0.95);
            border: 1px solid rgba(0, 229, 255, 0.5);
            border-radius: 8px;
            margin-top: -40px;
            padding: 20px;
            backdrop-filter: blur(8px);
            display: none;
        }

        .voxtek-results.visible {
            display: block;
        }

        .voxtek-result-item {
            padding: 15px;
            margin-bottom: 12px;
            background: rgba(0, 229, 255, 0.08);
            border: 1px solid rgba(0, 229, 255, 0.3);
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s;
        }

        .voxtek-result-item:hover {
            background: rgba(0, 229, 255, 0.15);
            border-color: rgba(0, 229, 255, 0.6);
            transform: translateX(5px);
        }

        .voxtek-result-title {
            color: #00e5ff;
            font-weight: 600;
            margin-bottom: 5px;
        }

        .voxtek-result-tag {
            color: rgba(255, 255, 255, 0.5);
            font-size: 12px;
            font-family: monospace;
        }

        .voxtek-no-results {
            text-align: center;
            color: rgba(255, 255, 255, 0.5);
            padding: 30px;
        }
    </style>

    <div class="voxtek-root">
        <main class="voxtek-main">
            <div class="voxtek-logo-bg"></div>
            <div class="voxtek-background-grid"></div>

            <section class="voxtek-center">
                <form class="voxtek-search-bar">
                    <span class="voxtek-prompt"></span>
                    <input type="text" class="voxtek-input" placeholder="INITIALISER RECHERCHE..." />
                    <button type="submit" class="voxtek-search-icon">⏎</button>
                </form>

                <div class="voxtek-results"></div>

                <div class="voxtek-shortcuts">
                    <a href="https://www.linkedin.com/in/alexandre-deschanel/" class="voxtek-shortcut-item" target="_blank">
                        <div class="voxtek-hex-icon"><span>in</span></div>
                        <span class="voxtek-label">LINKEDIN</span>
                    </a>
                    <a href="https://discord.gg/7n895Akn" class="voxtek-shortcut-item" target="_blank">
                        <div class="voxtek-hex-icon"><span>🎧</span></div>
                        <span class="voxtek-label">DISCORD</span>
                    </a>
                    <a href="mailto:alexandre.deschanel.666@gmail.com" class="voxtek-shortcut-item" target="_blank">
                        <div class="voxtek-hex-icon"><span>✉</span></div>
                        <span class="voxtek-label">MAIL</span>
                    </a>
                </div>
            </section>
        </main>
    </div>
`;

const form = shadow.querySelector(".voxtek-search-bar");
const input = shadow.querySelector(".voxtek-input");
const resultsContainer = shadow.querySelector(".voxtek-results");
const shortcuts = shadow.querySelector(".voxtek-shortcuts");

function effectuerRecherche(query) {
    const q = query.trim();

    if (!q) {
        resultsContainer.classList.remove("visible");
        resultsContainer.innerHTML = "";
        shortcuts.style.display = "flex";
        return;
    }

    console.log("RECHERCHE: " + q);
    const resultats = rechercheAvecScore(liste_des_pages, q);
    console.log(resultats);

    afficherResultats(resultats);
}

function afficherResultats(resultats) {
    resultsContainer.innerHTML = "";
    shortcuts.style.display = "none";

    if (!resultats || resultats.length === 0) {
        resultsContainer.innerHTML = '<div class="voxtek-no-results">AUCUN RÉSULTAT TROUVÉ</div>';
        resultsContainer.classList.add("visible");
        return;
    }

    resultats.forEach((resultat, index) => {
        const item = document.createElement("div");
        item.classList.add("voxtek-result-item");

        const nom = resultat.nom || resultat[0] || `Page ${index + 1}`;

        let tag;
        if (resultat[2] != []){
            tag = "Tag"
            if (resultat[2] < 0) tag = tag + "s";
            tag = tag + " : "
            resultat[2].forEach((res) => {
                tag = tag + res + ", "
            });
            tag = tag.substring(0,tag.length-2);
        } else tag = "Aucun tag trouvé";

        item.innerHTML = `
            <div class="voxtek-result-title">${nom}</div>
            <div class="voxtek-result-score">${tag}</div>
        `;

        item.addEventListener("click", () => {
            console.log("Clic sur résultat:", resultat);
            ouvrirPageDepuisResultat(resultat);
        });

        resultsContainer.appendChild(item);
    });

    resultsContainer.classList.add("visible");
}

function ouvrirPageDepuisResultat(resultat) {
    // Utiliser stopImmediatePropagation pour éviter les duplications
    const event = new CustomEvent("ouvrir-page-recherche", {
        bubbles: true,
        composed: true,
        detail: {
            pageData: resultat
        }
    });

    // Dispatch directement sur document pour éviter les multiples listeners
    document.dispatchEvent(event);
    console.log("Event dispatché:", resultat);
}

input.addEventListener("input", (e) => {
    effectuerRecherche(e.target.value);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    effectuerRecherche(input.value);
});

const nom = "nouvel onglet";
const tag = ["vox"];
export const nouvel_onglet_page_corp = [nom, contenue, tag];
