import fs from "node:fs";

const enPath = "messages/en.json";
const frPath = "messages/fr.json";

function readJson(path) {
  return JSON.parse(fs.readFileSync(path, "utf8"));
}

function writeJson(path, value) {
  fs.writeFileSync(path, JSON.stringify(value, null, 2) + "\n", "utf8");
}

const en = readJson(enPath);
const fr = readJson(frPath);

en.ResourcesPage = {
  title: "Resources",
  description:
    "Practical insight for teams optimizing high-impact customer moments across checkout, pricing, payments, and the post-purchase experience.",

  featuredLabel: "Benchmark Tool",
  featuredTitle: "Calculate ROI",
  featuredDescription:
    "See how much revenue you are losing to checkout friction. Get clear, actionable fixes.",
  featuredButton: "Calculate your impact",

  cards: {
    playbooks: {
      title: "CX Playbooks",
      description:
        "Structured, step-by-step frameworks for diagnosing and resolving friction at critical revenue stages, including checkout abandonment, pricing hesitation, payment instability, and early churn signals. Each playbook connects customer feedback directly to measurable optimization actions.",
      badge1: "Actionable Framework",
      badge2: "Detailed Templates"
    },
    benchmarks: {
      title: "Retail Benchmarks",
      description:
        "Industry-level insight into common abandonment drivers, pricing perception gaps, payment reliability themes, and post-purchase friction patterns. Benchmark your performance against broader market behavior and identify structural opportunity areas.",
      badge1: "Industry Insights",
      badge2: "Interactive Dashboard"
    },
    updates: {
      title: "Product Updates",
      description:
        "Platform enhancements, new feedback triggers, reporting improvements, and workflow automation capabilities designed to strengthen visibility at commercially sensitive journey moments and accelerate revenue recovery.",
      badge1: "Latest Release",
      badge2: "New Features"
    },
    studies: {
      title: "Case Studies",
      description:
        "Detailed real-world examples showing how organizations identified friction, implemented targeted corrective action, and achieved measurable improvements in conversion, trust, and long-term retention.",
      badge1: "Real Examples",
      badge2: "Success Stories"
    },
    implementation: {
      title: "Implementation Guides",
      description:
        "Practical deployment guidance covering trigger timing, workflow configuration, feedback routing, and cross-functional adoption to ensure insight capture strengthens rather than disrupts the customer experience.",
      badge1: "Technical Guide",
      badge2: "Best Practices"
    },
    research: {
      title: "Research Briefings",
      description:
        "Executive-level summaries highlighting emerging friction trends, behavioral shifts, pricing sensitivity signals, and payment-related trust concerns across industries.",
      badge1: "Trend Analysis",
      badge2: "Executive Summary"
    }
  },

  ctaTitle: "Cannot find what you are looking for?",
  ctaDescription:
    "Our team can create custom resources tailored to your specific industry and use case.",
  ctaButton: "Talk to an Expert"
};

fr.ResourcesPage = {
  title: "Ressources",
  description:
    "Des informations pratiques pour les équipes qui optimisent les moments clés du parcours client, du paiement et de la tarification jusqu'à l'expérience après-achat.",

  featuredLabel: "Outil d'analyse comparative",
  featuredTitle: "Calculez votre retour sur investissement",
  featuredDescription:
    "Découvrez le chiffre d'affaires que vous perdez en raison des frictions lors du paiement et obtenez des recommandations claires et exploitables.",
  featuredButton: "Calculer votre impact",

  cards: {
    playbooks: {
      title: "Guides pratiques CX",
      description:
        "Des cadres structurés, étape par étape, pour diagnostiquer et résoudre les frictions aux étapes critiques génératrices de revenus, notamment l'abandon de panier, l'hésitation face aux prix, l'instabilité des paiements et les premiers signes d'attrition. Chaque guide relie directement les retours clients à des actions d'optimisation mesurables.",
      badge1: "Cadre exploitable",
      badge2: "Modèles détaillés"
    },
    benchmarks: {
      title: "Référentiels du commerce de détail",
      description:
        "Des informations sectorielles sur les principales causes d'abandon, les écarts de perception des prix, la fiabilité des paiements et les frictions après l'achat. Comparez vos performances au marché et identifiez les opportunités d'amélioration structurelles.",
      badge1: "Informations sectorielles",
      badge2: "Tableau de bord interactif"
    },
    updates: {
      title: "Mises à jour du produit",
      description:
        "Découvrez les améliorations de la plateforme, les nouveaux déclencheurs de retours, les évolutions des rapports et les fonctions d'automatisation conçues pour renforcer la visibilité aux moments commerciaux sensibles et accélérer la récupération des revenus.",
      badge1: "Dernière version",
      badge2: "Nouvelles fonctionnalités"
    },
    studies: {
      title: "Études de cas",
      description:
        "Des exemples concrets montrant comment des organisations ont identifié les frictions, mis en œuvre des actions correctives ciblées et obtenu des améliorations mesurables en matière de conversion, de confiance et de fidélisation à long terme.",
      badge1: "Exemples concrets",
      badge2: "Histoires de réussite"
    },
    implementation: {
      title: "Guides de mise en œuvre",
      description:
        "Des conseils pratiques sur le moment de déclenchement, la configuration des flux de travail, l'acheminement des retours et l'adoption interfonctionnelle, afin que la collecte d'informations améliore l'expérience client sans la perturber.",
      badge1: "Guide technique",
      badge2: "Bonnes pratiques"
    },
    research: {
      title: "Notes de recherche",
      description:
        "Des synthèses destinées aux dirigeants mettant en évidence les nouvelles tendances de friction, les évolutions comportementales, les signaux de sensibilité aux prix et les préoccupations liées à la confiance dans les paiements.",
      badge1: "Analyse des tendances",
      badge2: "Synthèse pour dirigeants"
    }
  },

  ctaTitle: "Vous ne trouvez pas ce que vous recherchez ?",
  ctaDescription:
    "Notre équipe peut créer des ressources personnalisées adaptées à votre secteur et à votre cas d'utilisation.",
  ctaButton: "Parler à un expert"
};

writeJson(enPath, en);
writeJson(frPath, fr);

console.log("Resources translations added successfully.");