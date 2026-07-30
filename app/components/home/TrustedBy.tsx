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