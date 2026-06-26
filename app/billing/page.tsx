"use client";

import { useState } from "react";

const API_BASE_URL = "https://track.uptrackt.com";

export default function BillingPage() {
  const [apiKey, setApiKey] = useState("");
  const [billing, setBilling] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loadBilling = async () => {
    try {
      setLoading(true);
      setError("");
      setBilling(null);

      const response = await fetch(`${API_BASE_URL}/api/billing/status`, {
        headers: {
          "x-api-key": apiKey,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not load billing status");
      }

      setBilling(data.billing);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const openPortal = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_BASE_URL}/api/billing/portal`, {
        method: "POST",
        headers: {
          "x-api-key": apiKey,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not open billing portal");
      }

      const portalUrl = data.portal?.data?.urls?.general?.overview;

      if (!portalUrl) {
        throw new Error("Portal URL not found");
      }

      window.open(portalUrl, "_blank");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Billing
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        View your current Uptrackt plan and manage your subscription.
      </p>

      <div className="border border-black rounded-xl p-6 bg-white mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Client API Key
        </label>

        <input
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Paste your Uptrackt API key"
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm mb-4"
        />

        <button
          onClick={loadBilling}
          disabled={!apiKey || loading}
          className="inline-flex justify-center rounded-md bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition disabled:opacity-50"
        >
          {loading ? "Loading..." : "Load Billing"}
        </button>
      </div>

      {error && (
        <div className="border border-red-300 bg-red-50 rounded-xl p-4 text-red-700 mb-6">
          {error}
        </div>
      )}

      {billing && (
        <div className="border border-black rounded-xl p-6 bg-white">
          <h2 className="text-2xl font-semibold mb-6">
            Current Subscription
          </h2>

          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <div>
              <p className="text-sm text-gray-500">Client</p>
              <p className="font-semibold">{billing.name}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Plan</p>
              <p className="font-semibold capitalize">{billing.subscription_plan}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p className="font-semibold capitalize">{billing.subscription_status}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Renewal Date</p>
              <p className="font-semibold">
                {billing.renewal_at
                  ? new Date(billing.renewal_at).toLocaleDateString()
                  : "Not available"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Journey Stage Limit</p>
              <p className="font-semibold">{billing.stage_limit}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Monthly Insight Limit</p>
              <p className="font-semibold">
                {billing.insight_limit >= 999999 ? "Unlimited" : billing.insight_limit}
              </p>
            </div>
          </div>

          <button
            onClick={openPortal}
            disabled={loading}
            className="inline-flex justify-center rounded-md bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition disabled:opacity-50"
          >
            Manage Subscription
          </button>
        </div>
      )}
    </main>
  );
}
