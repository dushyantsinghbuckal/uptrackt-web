$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

function Write-Utf8NoBom {
    param(
        [string]$Path,
        [string]$Content
    )

    $fullPath = Join-Path $PWD $Path
    [System.IO.File]::WriteAllText($fullPath, $Content, $utf8NoBom)
}

# =========================================================
# Translation files
# =========================================================

$en = @'
{
  "Navbar": {
    "platform": "Platform",
    "solutions": "Solutions",
    "pricing": "Pricing",
    "testimonials": "Testimonials",
    "resources": "Resources",
    "collaborate": "Let's Collaborate",
    "openMenu": "Open navigation menu",
    "closeMenu": "Close navigation menu",
    "language": "Language",
    "english": "English",
    "french": "Français"
  },
  "Home": {
    "badge": "Customer Experience Intelligence",
    "heroTitleLine1": "Capture customer feedback at critical moments",
    "heroTitleLine2": "across the journey.",
    "heroSubtitle": "Identify friction, act faster, and drive measurable growth.",
    "unifiedView": "We bring together Feedback + Behavior + Intent under one unified view.",
    "enterpriseTitle": "Enterprise-ready Customer Experience Intelligence",
    "enterpriseDescription": "Capture customer feedback at critical moments across the retail and e-commerce journey. Identify friction, act faster, and drive measurable growth.",
    "discoveryTitle": "Not sure where to start?",
    "discoveryHighlight": "We're here to tailor a solution just for you.",
    "discoveryDescription": "Book a discovery call, and let's explore the possibilities together.",
    "collaborate": "Let's Collaborate"
  },
  "Capabilities": {
    "title": "Platform Capabilities",
    "momentTitle": "Moment-based Surveys",
    "momentDescription": "Capture feedback at the exact moment customers experience friction or intent.",
    "journeyTitle": "Journey Analytics",
    "journeyDescription": "Understand where customers drop off across touchpoints.",
    "frictionTitle": "Customer Friction Detection",
    "frictionDescription": "Identify blockers before they impact conversions.",
    "insightsTitle": "Actionable CX Insights",
    "insightsDescription": "Turn feedback into clear, prioritized actions for CX teams.",
    "alertsTitle": "Real-time Alerts",
    "alertsDescription": "Get notified instantly when experience degrades.",
    "securityTitle": "Enterprise-ready Security",
    "securityDescription": "Built with privacy, compliance, and scale in mind."
  },
  "FinalCTA": {
    "title": "Turn Customer Feedback into Growth",
    "description": "Start capturing insights at the moments that truly matter.",
    "button": "Request a Demo"
  },
  "HowItWorks": {
    "capture": "CAPTURE",
    "analyze": "ANALYZE",
    "act": "ACT",
    "captureDescription": "Capture feedback at the moments that shape customer decisions.",
    "analyzeDescription": "Analyze friction, sentiment, and drop-offs as they happen.",
    "actDescription": "Act instantly with insights your teams can't ignore."
  },
  "TestimonialsPreview": {
    "intro": "That's how our customers uncover hidden drop-offs, understand true intent,",
    "introHighlight": "and turn feedback into real business outcomes.",
    "testimonial1": "We Finally Understood Why Customers Didn't Buy",
    "testimonial2": "Captured Feedback From Anonymous Visitors",
    "testimonial3": "Plugged Cleanly Into Our Existing Stack",
    "testimonial4": "Turned Drop-Off Feedback Into Revenue Impact"
  },
  "TrustedBy": {
    "title": "Integrate Your Essential Tools"
  },
  "WhyUptrackt": {
    "title": "Why Uptrackt",
    "description": "Uptrackt helps teams understand where users struggle in real time, so you can remove friction earlier and improve the customer journey faster.",
    "actTitle": "Act Faster",
    "actDescription": "Real-time insights let your team respond immediately to user feedback, reducing decision latency and accelerating iteration cycles.",
    "frictionTitle": "Fix Friction Earlier",
    "frictionDescription": "Identify pain points before they escalate. Our moment-based approach highlights friction points early, so you can smooth the user journey.",
    "growTitle": "Grow Smarter",
    "growDescription": "Data-driven decisions become your competitive advantage. Leverage insights that matter to scale efficiently and delight users."
  },
  "Faq": {
    "title": "Common questions before getting started",
    "items": {
      "item1": {
        "question": "What is Uptrackt?",
        "answer": "Uptrackt is a customer decision intelligence platform that helps businesses understand why users hesitate or drop off at critical moments in their digital journey. Instead of relying solely on behavioral analytics, Uptrackt captures structured, in-context feedback at high-intent decision points—turning uncertainty into actionable insight. This enables product, growth, and CX teams to prioritize improvements based on real customer reasoning, not assumptions."
      },
      "item2": {
        "question": "What problem does Uptrackt solve?",
        "answer": "Uptrackt solves the gap between what users do and why they do it. Traditional analytics show where users drop off, but not the reasoning behind their hesitation. Uptrackt captures structured, decision-point feedback that helps teams identify real conversion blockers, prioritize high-impact fixes, and make smarter, revenue-focused optimization decisions."
      },
      "item3": {
        "question": "Where can Uptrackt be used?",
        "answer": "Uptrackt can be applied across critical customer touchpoints such as pricing pages, checkout flows, sign-up journeys, onboarding sequences, product comparisons, renewals, and application processes. It works wherever users make high-intent decisions, especially at moments where hesitation, drop-off, or friction directly impacts conversion and revenue."
      },
      "item4": {
        "question": "Does Uptrackt require users to log in or share personal data?",
        "answer": "No. Uptrackt works without forcing user logins or collecting personally identifiable information. Feedback is gathered in a lightweight, privacy-conscious way that encourages honest responses while maintaining compliance standards. This approach increases participation rates and improves the quality and reliability of insights without disrupting the user experience."
      },
      "item5": {
        "question": "What kind of insights does Uptrackt provide?",
        "answer": "Uptrackt surfaces structured insights such as common hesitation themes, conversion blockers, trust gaps, pricing confusion, usability friction, and drop-off triggers at key decision points. It helps teams understand not just where users leave, but why—enabling clearer prioritization and smarter optimization decisions across the funnel."
      },
      "item6": {
        "question": "Is Uptrackt difficult to implement or use?",
        "answer": "No. Uptrackt is designed to be easy to adopt and manage, without requiring deep technical expertise. The interface is intuitive and built for cross-functional use, meaning product, growth, CX, and leadership teams can access insights without relying on analysts or developers. Structured reports, categorized hesitation themes, and prioritized friction points are presented in a clear format that supports fast decision-making."
      }
    }
  },
  "Footer": {
    "taglineLine1": "Insights where",
    "taglineLine2": "decisions happen.",
    "product": "Product",
    "platform": "Platform",
    "howItWorks": "How It Works",
    "capabilities": "Platform Capabilities",
    "features": "Features",
    "about": "About",
    "resources": "Resources",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service",
    "refund": "Refund Policy",
    "getStarted": "Get Started",
    "getStartedDescription": "See how Uptrackt helps you turn feedback into growth.",
    "copyright": "© 2026 Uptrackt. All rights reserved."
  }
}
'@

$fr = @'
{
  "Navbar": {
    "platform": "Plateforme",
    "solutions": "Solutions",
    "pricing": "Tarifs",
    "testimonials": "Témoignages",
    "resources": "Ressources",
    "collaborate": "Collaborons ensemble",
    "openMenu": "Ouvrir le menu de navigation",
    "closeMenu": "Fermer le menu de navigation",
    "language": "Langue",
    "english": "English",
    "french": "Français"
  },
  "Home": {
    "badge": "Intelligence de l'expérience client",
    "heroTitleLine1": "Recueillez les retours clients aux moments clés",
    "heroTitleLine2": "de leur parcours.",
    "heroSubtitle": "Identifiez les points de friction, agissez plus vite et générez une croissance mesurable.",
    "unifiedView": "Nous réunissons les retours, le comportement et l'intention dans une vue unifiée.",
    "enterpriseTitle": "Une intelligence de l'expérience client conçue pour les entreprises",
    "enterpriseDescription": "Recueillez les retours clients aux moments clés du parcours de vente au détail et de commerce électronique. Identifiez les points de friction, agissez plus rapidement et générez une croissance mesurable.",
    "discoveryTitle": "Vous ne savez pas par où commencer ?",
    "discoveryHighlight": "Nous concevons une solution adaptée à vos besoins.",
    "discoveryDescription": "Réservez un appel de découverte et explorons ensemble les possibilités.",
    "collaborate": "Collaborons ensemble"
  },
  "Capabilities": {
    "title": "Fonctionnalités de la plateforme",
    "momentTitle": "Enquêtes déclenchées au bon moment",
    "momentDescription": "Recueillez les retours au moment précis où les clients rencontrent une difficulté ou manifestent une intention.",
    "journeyTitle": "Analyse du parcours client",
    "journeyDescription": "Comprenez à quels points de contact les clients abandonnent leur parcours.",
    "frictionTitle": "Détection des points de friction",
    "frictionDescription": "Identifiez les obstacles avant qu'ils n'affectent les conversions.",
    "insightsTitle": "Informations CX exploitables",
    "insightsDescription": "Transformez les retours en actions claires et prioritaires pour les équipes CX.",
    "alertsTitle": "Alertes en temps réel",
    "alertsDescription": "Soyez immédiatement informé lorsque l'expérience client se dégrade.",
    "securityTitle": "Sécurité adaptée aux entreprises",
    "securityDescription": "Conçue pour garantir la confidentialité, la conformité et l'évolutivité."
  },
  "FinalCTA": {
    "title": "Transformez les retours clients en croissance",
    "description": "Commencez à recueillir des informations aux moments qui comptent vraiment.",
    "button": "Demander une démonstration"
  },
  "HowItWorks": {
    "capture": "RECUEILLIR",
    "analyze": "ANALYSER",
    "act": "AGIR",
    "captureDescription": "Recueillez les retours aux moments qui influencent les décisions des clients.",
    "analyzeDescription": "Analysez les frictions, le sentiment et les abandons au moment où ils se produisent.",
    "actDescription": "Agissez immédiatement grâce à des informations que vos équipes ne peuvent ignorer."
  },
  "TestimonialsPreview": {
    "intro": "Voici comment nos clients détectent les abandons cachés, comprennent les véritables intentions",
    "introHighlight": "et transforment les retours en résultats commerciaux concrets.",
    "testimonial1": "Nous avons enfin compris pourquoi les clients n'achetaient pas",
    "testimonial2": "Nous avons recueilli les retours de visiteurs anonymes",
    "testimonial3": "Une intégration fluide à notre infrastructure existante",
    "testimonial4": "Les retours sur les abandons ont produit un impact sur le chiffre d'affaires"
  },
  "TrustedBy": {
    "title": "Intégrez vos outils essentiels"
  },
  "WhyUptrackt": {
    "title": "Pourquoi choisir Uptrackt",
    "description": "Uptrackt aide les équipes à comprendre en temps réel les difficultés rencontrées par les utilisateurs, afin de supprimer plus tôt les points de friction et d'améliorer plus rapidement le parcours client.",
    "actTitle": "Agissez plus rapidement",
    "actDescription": "Les informations en temps réel permettent à votre équipe de répondre immédiatement aux retours des utilisateurs, de réduire les délais de décision et d'accélérer les cycles d'amélioration.",
    "frictionTitle": "Corrigez les frictions plus tôt",
    "frictionDescription": "Identifiez les difficultés avant qu'elles ne s'aggravent. Notre approche fondée sur les moments clés met rapidement en évidence les points de friction afin de fluidifier le parcours utilisateur.",
    "growTitle": "Développez-vous intelligemment",
    "growDescription": "Les décisions fondées sur les données deviennent votre avantage concurrentiel. Exploitez les informations réellement utiles pour vous développer efficacement et satisfaire vos utilisateurs."
  },
  "Faq": {
    "title": "Questions fréquentes avant de commencer",
    "items": {
      "item1": {
        "question": "Qu'est-ce qu'Uptrackt ?",
        "answer": "Uptrackt est une plateforme d'intelligence décisionnelle client qui aide les entreprises à comprendre pourquoi les utilisateurs hésitent ou abandonnent à des moments critiques de leur parcours numérique. Au lieu de s'appuyer uniquement sur l'analyse comportementale, Uptrackt recueille des retours structurés et contextualisés aux points de décision à forte intention, transformant ainsi l'incertitude en informations exploitables. Les équipes produit, croissance et CX peuvent alors prioriser les améliorations en fonction du raisonnement réel des clients plutôt que d'hypothèses."
      },
      "item2": {
        "question": "Quel problème Uptrackt résout-il ?",
        "answer": "Uptrackt comble l'écart entre ce que font les utilisateurs et les raisons qui motivent leurs actions. Les outils d'analyse traditionnels indiquent où les utilisateurs abandonnent, mais pas pourquoi ils hésitent. Uptrackt recueille des retours structurés aux points de décision pour aider les équipes à identifier les véritables obstacles à la conversion, à prioriser les corrections les plus importantes et à prendre des décisions d'optimisation plus efficaces, axées sur le chiffre d'affaires."
      },
      "item3": {
        "question": "Où peut-on utiliser Uptrackt ?",
        "answer": "Uptrackt peut être utilisé aux points de contact essentiels du parcours client, notamment sur les pages tarifaires, dans les processus de paiement, les parcours d'inscription, les séquences d'intégration, les comparaisons de produits, les renouvellements et les processus de candidature. Il est particulièrement utile partout où les utilisateurs prennent des décisions à forte intention et où l'hésitation, l'abandon ou la friction ont un impact direct sur la conversion et le chiffre d'affaires."
      },
      "item4": {
        "question": "Uptrackt exige-t-il que les utilisateurs se connectent ou partagent des données personnelles ?",
        "answer": "Non. Uptrackt fonctionne sans imposer de connexion aux utilisateurs ni recueillir d'informations permettant de les identifier personnellement. Les retours sont collectés de manière légère et respectueuse de la vie privée, ce qui encourage des réponses sincères tout en respectant les exigences de conformité. Cette approche augmente les taux de participation et améliore la qualité et la fiabilité des informations sans perturber l'expérience utilisateur."
      },
      "item5": {
        "question": "Quels types d'informations Uptrackt fournit-il ?",
        "answer": "Uptrackt fait ressortir des informations structurées telles que les motifs d'hésitation récurrents, les obstacles à la conversion, les problèmes de confiance, les incompréhensions tarifaires, les difficultés d'utilisation et les déclencheurs d'abandon aux principaux points de décision. Les équipes comprennent ainsi non seulement où les utilisateurs abandonnent, mais aussi pourquoi, ce qui facilite la priorisation et l'optimisation de l'ensemble du parcours."
      },
      "item6": {
        "question": "Uptrackt est-il difficile à mettre en œuvre ou à utiliser ?",
        "answer": "Non. Uptrackt est conçu pour être facile à adopter et à gérer, sans nécessiter d'expertise technique approfondie. Son interface intuitive convient à différentes fonctions : les équipes produit, croissance, CX et de direction peuvent consulter les informations sans dépendre d'analystes ou de développeurs. Les rapports structurés, les thèmes d'hésitation classés et les points de friction prioritaires sont présentés clairement afin de faciliter une prise de décision rapide."
      }
    }
  },
  "Footer": {
    "taglineLine1": "Des informations là où",
    "taglineLine2": "les décisions se prennent.",
    "product": "Produit",
    "platform": "Plateforme",
    "howItWorks": "Fonctionnement",
    "capabilities": "Fonctionnalités de la plateforme",
    "features": "Fonctionnalités",
    "about": "À propos",
    "resources": "Ressources",
    "privacy": "Politique de confidentialité",
    "terms": "Conditions d'utilisation",
    "refund": "Politique de remboursement",
    "getStarted": "Commencer",
    "getStartedDescription": "Découvrez comment Uptrackt vous aide à transformer les retours en croissance.",
    "copyright": "© 2026 Uptrackt. Tous droits réservés."
  }
}
'@

Write-Utf8NoBom "messages\en.json" $en
Write-Utf8NoBom "messages\fr.json" $fr

# =========================================================
# app/page.tsx
# =========================================================

$page = @'
import TestimonialsPreview from "./components/home/TestimonialsPreview";
import TrustedBy from "./components/home/TrustedBy";
import HowItWorksSection from "./components/home/HowItWorksSection";
import Capabilities from "./components/home/Capabilities";
import WhyUptrackt from "./components/home/WhyUptrackt";
import FaqSection from "./components/FaqSection";
import FinalCTA from "./components/home/FinalCTA";
import {HeroGeometric} from "./components/UI/shape-landing-hero";
import {getTranslations} from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Home");

  return (
    <>
      <HeroGeometric badge={t("badge")}>
        <h1 className="mx-auto max-w-[1200px] text-balance text-center text-4xl font-bold leading-[1.2] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {t("heroTitleLine1")}
          <br />
          {t("heroTitleLine2")}
        </h1>

        <p className="mx-auto mt-20 max-w-[1200px] text-center text-2xl font-semibold text-white md:text-3xl">
          {t("heroSubtitle")}
        </p>
      </HeroGeometric>

      <div className="mx-auto mt-8 max-w-7xl px-4 text-center text-2xl font-bold leading-tight tracking-tight text-gray-300 sm:px-6 sm:text-3xl md:text-4xl">
        {t("unifiedView")}
      </div>

      <main className="bg-white px-4 sm:px-6">
        <TestimonialsPreview />
      </main>

      <main className="bg-white px-4 sm:px-6">
        <section className="mx-auto max-w-6xl pb-28 pt-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t("enterpriseTitle")}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base text-gray-600 sm:text-lg">
            {t("enterpriseDescription")}
          </p>
        </section>

        <TestimonialsPreview />

        <section className="py-16">
          <TrustedBy />
        </section>

        <HowItWorksSection />

        <section className="py-20">
          <WhyUptrackt />
        </section>

        <section className="bg-black pb-28 pt-16">
          <Capabilities />
        </section>

        <FaqSection />

        <section className="mx-auto max-w-6xl px-2 py-11 text-center">
          <div className="mx-auto mb-16 h-px w-24 bg-gray-300" />

          <h2 className="text-5xl font-semibold leading-tight tracking-tight text-gray-900 md:text-6xl">
            {t("discoveryTitle")}{" "}
            <span className="text-gray-400">
              {t("discoveryHighlight")}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-400 md:text-2xl">
            {t("discoveryDescription")}
          </p>

          <div className="mt-14">
            <a
              href="/request-demo"
              className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-2xl font-semibold text-white transition hover:bg-gray-900"
            >
              {t("collaborate")}
            </a>
          </div>

          <div className="mx-auto mt-12 h-px w-24 bg-gray-300" />
        </section>

        <FaqSection />
        <FinalCTA />
      </main>
    </>
  );
}
'@

Write-Utf8NoBom "app\page.tsx" $page

# =========================================================
# Capabilities
# =========================================================

$capabilities = @'
import {getTranslations} from "next-intl/server";
import {
  GlobeLockIcon,
  RouteIcon,
  ClockAlertIcon,
  MessageSquareTextIcon,
  BookUserIcon,
  FileAlertIcon
} from "../icons/FeatureIcons";

export default async function Capabilities() {
  const t = await getTranslations("Capabilities");

  return (
    <div className="mx-auto max-w-7xl px-6">
      <h2 className="mb-16 text-center text-5xl font-semibold text-white md:text-6xl">
        {t("title")}
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
        <div className="relative col-span-1 rounded-3xl bg-neutral-400 p-12 md:col-span-3">
          <BookUserIcon className="absolute right-6 top-6 h-15 w-15 text-black" />
          <h3 className="text-5xl font-semibold text-black">{t("momentTitle")}</h3>
          <p className="mt-6 text-lg font-semibold leading-relaxed text-white md:text-xl">
            {t("momentDescription")}
          </p>
        </div>

        <div className="relative col-span-1 rounded-3xl bg-neutral-400 p-12 md:col-span-2">
          <RouteIcon className="absolute right-6 top-6 h-15 w-15 text-black" />
          <h3 className="text-4xl font-semibold text-black">{t("journeyTitle")}</h3>
          <p className="mt-6 text-lg font-semibold leading-relaxed text-white md:text-xl">
            {t("journeyDescription")}
          </p>
        </div>

        <div className="relative col-span-1 rounded-3xl bg-neutral-400 p-10 md:col-span-2">
          <FileAlertIcon className="absolute right-6 top-6 h-13 w-13 text-black" />
          <h3 className="text-4xl font-semibold text-black">{t("frictionTitle")}</h3>
          <p className="mt-6 text-lg font-semibold leading-relaxed text-white md:text-xl">
            {t("frictionDescription")}
          </p>
        </div>

        <div className="relative col-span-1 rounded-3xl bg-neutral-400 p-12 md:col-span-3">
          <MessageSquareTextIcon className="absolute right-6 top-6 h-15 w-15 text-black" />
          <h3 className="text-5xl font-semibold text-black">{t("insightsTitle")}</h3>
          <p className="mt-6 text-lg font-semibold leading-relaxed text-white md:text-xl">
            {t("insightsDescription")}
          </p>
        </div>

        <div className="relative col-span-1 rounded-3xl bg-neutral-400 p-12 md:col-span-2">
          <ClockAlertIcon className="absolute right-6 top-6 h-12 w-12 text-black" />
          <h3 className="text-4xl font-semibold text-black">{t("alertsTitle")}</h3>
          <p className="mt-6 text-lg font-semibold leading-relaxed text-white md:text-xl">
            {t("alertsDescription")}
          </p>
        </div>

        <div className="relative col-span-1 rounded-3xl bg-neutral-400 p-12 md:col-span-2">
          <GlobeLockIcon className="absolute right-6 top-6 h-10 w-10 text-black" />
          <h3 className="text-4xl font-semibold text-black">{t("securityTitle")}</h3>
          <p className="mt-6 text-lg font-semibold leading-relaxed text-white md:text-xl">
            {t("securityDescription")}
          </p>
        </div>
      </div>
    </div>
  );
}
'@

Write-Utf8NoBom "app\components\home\Capabilities.tsx" $capabilities

# =========================================================
# Final CTA
# =========================================================

$finalCta = @'
import {getTranslations} from "next-intl/server";

export default async function FinalCTA() {
  const t = await getTranslations("FinalCTA");

  return (
    <section id="demo" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold">{t("title")}</h2>

        <p className="mt-4 text-gray-300">{t("description")}</p>

        <div className="mt-8">
          <a
            href="/request-demo"
            className="inline-block rounded-md bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-100"
          >
            {t("button")}
          </a>
        </div>
      </div>
    </section>
  );
}
'@

Write-Utf8NoBom "app\components\home\FinalCTA.tsx" $finalCta

# =========================================================
# How it works
# =========================================================

$howItWorks = @'
import {getTranslations} from "next-intl/server";

export default async function HowItWorksSection() {
  const t = await getTranslations("HowItWorks");

  return (
    <section className="bg-black py-14">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="space-y-8 font-semibold leading-none tracking-widest text-white">
          <div className="text-6xl md:text-8xl">{t("capture")}</div>
          <div className="text-6xl text-gray-500 md:text-8xl">{t("analyze")}</div>
          <div className="text-6xl md:text-8xl">{t("act")}</div>
        </h2>

        <div className="mx-auto mt-14 max-w-3xl space-y-5 text-base leading-relaxed text-white md:text-2xl">
          <p>{t("captureDescription")}</p>
          <p>{t("analyzeDescription")}</p>
          <p>{t("actDescription")}</p>
        </div>
      </div>
    </section>
  );
}
'@

Write-Utf8NoBom "app\components\home\HowItWorksSection.tsx" $howItWorks

# =========================================================
# Testimonials preview
# =========================================================

$testimonials = @'
import {getTranslations} from "next-intl/server";
import {FloatingPaths} from "../UI/background-paths";

export default async function TestimonialsPreview() {
  const t = await getTranslations("TestimonialsPreview");

  const items = [
    {
      href: "/testimonials/we-finally-understood-why-customers-didnt-buy",
      text: t("testimonial1")
    },
    {
      href: "/testimonials/captured-feedback-from-anonymous-visitors",
      text: t("testimonial2")
    },
    {
      href: "/testimonials/plugged-cleanly-into-our-existing-stack",
      text: t("testimonial3")
    },
    {
      href: "/testimonials/turned-drop-off-feedback-into-revenue-impact",
      text: t("testimonial4")
    }
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0 translate-y-20 transform">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-0">
        <h2 className="mx-auto mt-0 max-w-4xl text-center text-4xl font-semibold leading-tight text-gray-900 dark:text-white md:text-5xl">
          {t("intro")}{" "}
          <span className="font-semibold text-black dark:text-white">
            {t("introHighlight")}
          </span>
        </h2>

        <div className="mx-auto mt-6 w-full max-w-4xl rounded-4xl bg-black/80 px-12 py-12 backdrop-blur-sm">
          <ul className="space-y-6">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block cursor-pointer text-3xl font-semibold text-white underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 hover:underline"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
'@

Write-Utf8NoBom "app\components\home\TestimonialsPreview.tsx" $testimonials

# =========================================================
# Trusted by / integrations
# =========================================================

$trustedBy = @'
import Image from "next/image";
import {getTranslations} from "next-intl/server";

const integrations = [
  {
    href: "https://www.google.com/analytics",
    src: "/Google Analytics.svg",
    alt: "Google Analytics",
    width: 280,
    height: 120,
    className: "h-18 w-auto"
  },
  {
    href: "https://mixpanel.com",
    src: "/Mixpanel.svg",
    alt: "Mixpanel",
    width: 180,
    height: 60,
    className: "h-12 w-auto"
  },
  {
    href: "https://www.hubspot.com",
    src: "/Hubspot.svg",
    alt: "HubSpot",
    width: 200,
    height: 80,
    className: "h-16 w-auto"
  },
  {
    href: "https://slack.com",
    src: "/Slack.svg",
    alt: "Slack",
    width: 200,
    height: 80,
    className: "h-16 w-auto"
  },
  {
    href: "https://www.shopify.com",
    src: "/Shopify.svg",
    alt: "Shopify",
    width: 200,
    height: 80,
    className: "h-16 w-auto"
  },
  {
    href: "https://www.zendesk.com",
    src: "/Zendesk.svg",
    alt: "Zendesk",
    width: 200,
    height: 80,
    className: "h-16 w-auto"
  },
  {
    href: "https://zapier.com",
    src: "/Zapier.svg",
    alt: "Zapier",
    width: 380,
    height: 220,
    className: "h-28 w-auto"
  },
  {
    href: "https://powerbi.microsoft.com",
    src: "/Power BI.svg",
    alt: "Microsoft Power BI",
    width: 200,
    height: 80,
    className: "h-16 w-auto"
  }
];

export default async function TrustedBy() {
  const t = await getTranslations("TrustedBy");

  return (
    <section className="-mt-16 border-t border-gray-200 bg-gray-50 py-1">
      <div className="mx-auto max-w-[1600px] px-2 text-center">
        <p className="text-4xl font-bold uppercase tracking-wider text-gray-500">
          {t("title")}
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {integrations.map((integration) => (
            <a
              key={integration.alt}
              href={integration.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 transition-all duration-200 hover:opacity-100"
              aria-label={integration.alt}
            >
              <Image
                src={integration.src}
                alt={integration.alt}
                width={integration.width}
                height={integration.height}
                className={integration.className}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
'@

Write-Utf8NoBom "app\components\home\TrustedBy.tsx" $trustedBy

# =========================================================
# Why Uptrackt
# =========================================================

$whyUptrackt = @'
import {Zap} from "lucide-react";
import {getTranslations} from "next-intl/server";

export default async function WhyUptrackt() {
  const t = await getTranslations("WhyUptrackt");

  const cards = [
    {
      title: t("actTitle"),
      description: t("actDescription")
    },
    {
      title: t("frictionTitle"),
      description: t("frictionDescription")
    },
    {
      title: t("growTitle"),
      description: t("growDescription")
    }
  ];

  return (
    <section className="relative overflow-hidden bg-white py-1">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-gray-100 opacity-30 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-gray-200 opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            {t("title")}
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-500 md:text-2xl">
            {t("description")}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="inline-flex rounded-xl bg-gray-50 p-3 text-gray-600">
                  <Zap className="h-7 w-7" strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-medium text-gray-900">
                  {card.title}
                </h3>
              </div>

              <p className="leading-relaxed text-gray-500">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
'@

Write-UtfNoBom "app\components\home\WhyUptrackt.tsx" $whyUptrackt

# Correct function name fallback
if (-not (Test-Path "app\components\home\WhyUptrackt.tsx")) {
    Write-Utf8NoBom "app\components\home\WhyUptrackt.tsx" $whyUptrackt
}

# =========================================================
# FAQ
# =========================================================

$faq = @'
"use client";

import {useState} from "react";
import {useTranslations} from "next-intl";
import {Minus, Plus} from "lucide-react";

export default function FaqSection() {
  const t = useTranslations("Faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = Array.from({length: 6}, (_, index) => {
    const item = `items.item${index + 1}`;

    return {
      question: t(`${item}.question`),
      answer: t(`${item}.answer`)
    };
  });

  return (
    <section className="mx-auto max-w-6xl px-6 pb-6 pt-10">
      <h2 className="mb-17 text-center text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
        {t("title")}
      </h2>

      <div className="mx-auto max-w-4xl space-y-8">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={faq.question} className="border-b border-gray-200 pb-6">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-left text-2xl font-semibold leading-tight text-gray-900 md:text-3xl">
                  {faq.question}
                </span>

                <span className="shrink-0 text-gray-400">
                  {isOpen ? (
                    <Minus className="h-7 w-7" aria-hidden="true" />
                  ) : (
                    <Plus className="h-7 w-7" aria-hidden="true" />
                  )}
                </span>
              </button>

              {isOpen && (
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
'@

Write-Utf8NoBom "app\components\FaqSection.tsx" $faq

# =========================================================
# Footer
# =========================================================

$footer = @'
import Link from "next/link";
import {getTranslations} from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-4">
          <div>
            <div className="flex flex-col items-start">
              <img
                src="/file.svg"
                alt="Uptrackt logo"
                className="block h-48 w-auto shrink-0"
              />
            </div>

            <p className="-mt-16 text-2xl font-normal leading-[1.2] tracking-tight text-gray-400">
              {t("taglineLine1")}
              <br />
              {t("taglineLine2")}
            </p>
          </div>

          <div>
            <h4 className="text-3xl font-semibold tracking-tight text-black">
              {t("product")}
            </h4>

            <ul className="mt-4 space-y-3 text-xl font-normal tracking-tight">
              <li>
                <Link href="/platform" className="text-gray-400 transition-colors hover:text-black">
                  {t("platform")}
                </Link>
              </li>
              <li>
                <Link href="/platform#how-it-works" className="text-gray-400 transition-colors hover:text-black">
                  {t("howItWorks")}
                </Link>
              </li>
              <li>
                <Link href="/platform#capabilities" className="text-gray-400 transition-colors hover:text-black">
                  {t("capabilities")}
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-400 transition-colors hover:text-black">
                  {t("features")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-3xl font-semibold tracking-tight text-black">
              {t("about")}
            </h4>

            <ul className="mt-4 space-y-3 text-xl font-normal tracking-tight">
              <li>
                <Link href="/resources" className="text-gray-400 transition-colors hover:text-black">
                  {t("resources")}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 transition-colors hover:text-black">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 transition-colors hover:text-black">
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-400 transition-colors hover:text-black">
                  {t("refund")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-3xl font-semibold tracking-tight text-black">
              {t("getStarted")}
            </h4>

            <p className="mt-4 text-xl font-normal tracking-tight text-gray-400">
              {t("getStartedDescription")}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-xs font-normal tracking-tight text-gray-400">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
'@

Write-Utf8NoBom "app\components\Footer.tsx" $footer

Write-Host ""
Write-Host "Homepage translation files updated successfully."
Write-Host "Now run: npm run build"