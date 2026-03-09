import Image from "next/image";

export default function TrustedBy() {
  return (
    <section className="border-t border-gray-200 py-1 -mt-16 bg-gray-50">
      <div className="max-w-10xl mx-auto px-2 text-center">
      <div className="relative inline-block">
         <p className="text-4xl md:text-4xl font-bold uppercase tracking-wider text-gray-500">
         Integrate Your Essential Tools
          </p>
         </div>

        {/* Integration Logos Grid */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          
          {/* Google Analytics */}
          <a 
            href="https://www.google.com/analytics" 
            target="_blank" 
            rel="noopener noreferrer"
            className="opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
            aria-label="Google Analytics"
          >
            <Image 
              src="/Google Analytics.svg" 
              alt="Google Analytics" 
              width={280} 
              height={120} 
              className="h-18 w-auto"
            />
          </a>

          {/* Mixpanel */}
          <a 
            href="https://mixpanel.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
            aria-label="Mixpanel"
          >
            <Image 
              src="/Mixpanel.svg" 
              alt="Mixpanel" 
              width={180} 
              height={60} 
              className="h-12 w-auto"
            />
          </a>

          {/* HubSpot */}
          <a 
            href="https://www.hubspot.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
            aria-label="HubSpot"
          >
            <Image 
              src="/Hubspot.svg" 
              alt="HubSpot" 
              width={200} 
              height={80} 
              className="h-16 w-auto"
            />
          </a>

          {/* Slack */}
          <a 
            href="https://slack.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
            aria-label="Slack"
          >
            <Image 
              src="/Slack.svg" 
              alt="Slack" 
              width={200} 
              height={80} 
              className="h-16 w-auto"
            />
          </a>

          {/* Shopify */}
          <a 
            href="https://www.shopify.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
            aria-label="Shopify"
          >
            <Image 
              src="/shopify.svg" 
              alt="Shopify" 
              width={200} 
              height={80} 
              className="h-16 w-auto"
            />
          </a>

          {/* Zendesk */}
          <a 
            href="https://www.zendesk.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
            aria-label="Zendesk"
          >
            <Image 
              src="/Zendesk.svg" 
              alt="Zendesk" 
              width={200} 
              height={80} 
              className="h-16 w-auto"
            />
          </a>

          {/* Zapier */}
          <a 
            href="https://zapier.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
            aria-label="Zapier"
          >
            <Image 
              src="/Zapier.svg" 
              alt="Zapier" 
              width={380} 
              height={220} 
              className="h-28 w-auto"
            />
          </a>

          {/* Power BI */}
          <a 
            href="https://powerbi.microsoft.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className=" opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
            aria-label="Microsoft Power BI"
          >
            <Image 
              src="/Power BI.svg" 
              alt="Power BI" 
              width={200} 
              height={80} 
              className="h-16 w-auto"
            />
          </a>
        </div>
        </div>
    </section>
  );
}