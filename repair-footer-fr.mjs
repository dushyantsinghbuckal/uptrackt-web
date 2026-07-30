import fs from "node:fs";

const filePath = "messages/fr.json";

try {
  const messages = JSON.parse(fs.readFileSync(filePath, "utf8"));

  messages.Footer = {
    taglineLine1: "Des informations l\u00e0 o\u00f9",
    taglineLine2: "les d\u00e9cisions se prennent.",
    product: "Produit",
    platform: "Plateforme",
    howItWorks: "Fonctionnement",
    capabilities: "Fonctionnalit\u00e9s de la plateforme",
    features: "Fonctionnalit\u00e9s",
    about: "\u00c0 propos",
    resources: "Ressources",
    privacy: "Politique de confidentialit\u00e9",
    terms: "Conditions d'utilisation",
    refund: "Politique de remboursement",
    getStarted: "Commencer",
    getStartedDescription:
      "D\u00e9couvrez comment Uptrackt vous aide \u00e0 transformer les retours en croissance.",
    copyright: "\u00a9 2026 Uptrackt. Tous droits r\u00e9serv\u00e9s."
  };

  fs.writeFileSync(
    filePath,
    JSON.stringify(messages, null, 2) + "\n",
    "utf8"
  );

  console.log("French footer repaired.");
} catch (error) {
  console.error(error);
  process.exit(1);
}