import { headers } from "next/headers";
import { getPricing } from "@/lib/pricing";
import PricingClient from "./pricing-client";

export default async function PricingPage() {
  const headerList = await headers();
  const country = headerList.get("x-country");

  const { symbol, prices } = getPricing(country);

  return <PricingClient symbol={symbol} prices={prices} />;
}