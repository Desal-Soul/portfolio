export function rechercheAvecScore(tableau, recherche) {
    const termeRecherche = recherche.toLowerCase().trim();

    if (!termeRecherche) return tableau;

    // Calculer le score pour chaque projet
    const resultatsAvecScore = tableau.map(projet => {
        let score = 0;
        const nom = projet[0].toLowerCase();
        const tags = projet[2].map(t => t.toLowerCase());

        // Correspondance exacte du nom : score maximum
        if (nom === termeRecherche) {
            score += 100;
        }
        // Nom commence par le terme : très bon score
        else if (nom.startsWith(termeRecherche)) {
            score += 75;
        }
        // Nom contient le terme : bon score
        else if (nom.includes(termeRecherche)) {
            score += 50;
        }

        // Recherche dans les tags
        tags.forEach(tag => {
            if (tag === termeRecherche) {
                score += 80;
            } else if (tag.startsWith(termeRecherche)) {
                score += 60;
            } else if (tag.includes(termeRecherche)) {
                score += 30;
            }
        });

        return { projet, score };
    });

    // Filtrer les résultats sans score et trier par score décroissant
    return resultatsAvecScore
        .filter(r => r.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(r => r.projet);
}