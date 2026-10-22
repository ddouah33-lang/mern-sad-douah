
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Vérifier que le serveur fonctionne
app.get("/api/health", (req, res) => {
    res.status(200).json({
        message: "Le serveur fonctionne correctement",
        etudiant: "Sad Douah"
    });
});

// Liste de démonstration temporaire
app.get("/api/items", (req, res) => {
    res.status(200).json([
        { id: 1, nom: "Ordinateur" },
        { id: 2, nom: "Clavier" }
    ]);
});

// Ajouter un élément (temporairement en mémoire)
app.post("/api/items", (req, res) => {
    const { nom } = req.body;

    if (!nom || typeof nom !== "string" || !nom.trim()) {
        return res.status(400).json({
            message: "Le nom de l'élément est obligatoire"
        });
    }

    res.status(201).json({
        message: "Élément reçu avec succès",
        item: { nom: nom.trim() }
    });
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
