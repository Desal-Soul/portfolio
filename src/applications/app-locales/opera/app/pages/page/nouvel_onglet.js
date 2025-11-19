let contenue = document.createElement("div");
contenue.classList.add("nouvel_onglet"); // juste pour ton système de pages
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
            
                 .voxtek-top-left span { color: #00e5ff; }
   
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
                    background: #05060a url("ressources/images/wallpapers/opera_wallpaper.png")
                    4.25vh 6vh/contain fixed no-repeat;
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
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    console.log("RECHERCHE "+ q)
});
const nom = "nouvel onglet"
const tag = ["vox"]
export const nouvel_onglet_page_corp = [nom, contenue, tag];