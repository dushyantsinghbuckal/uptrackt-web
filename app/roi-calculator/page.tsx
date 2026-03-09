"use client";

import { useState } from "react";
import Link from "next/link";

export default function ROICalculatorPage() {
  // Core business inputs
  const [visitors, setVisitors] = useState(50000);
  const [conversionRate, setConversionRate] = useState(2.5);
  const [aov, setAov] = useState(80);

  // Friction signals (absolute monthly counts)
  const [abandonedCheckouts, setAbandonedCheckouts] = useState(12000);
  const [paymentFailures, setPaymentFailures] = useState(500);
  const [refundOrders, setRefundOrders] = useState(200);
  const [supportTickets, setSupportTickets] = useState(100);

  // Revenue calculation
  const monthlyRevenue = visitors * (conversionRate / 100) * aov;

  // Revenue leakage calculations
  const checkoutLoss = abandonedCheckouts * aov;
  const paymentLoss = paymentFailures * aov;
  const refundLoss = refundOrders * aov;

  // Support tickets don't always mean lost orders, so discount them
  const supportImpact = supportTickets * aov * 0.3;

  const totalLoss =
    checkoutLoss + paymentLoss + refundLoss + supportImpact;

  const recoverableRevenue = totalLoss * 0.6;

  return (
    <section className="min-h-screen bg-white px-6 pt-16 pb-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-6xl mb-14">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 whitespace-nowrap">
        Conversion Revenue Analysis
         </h1>

         <p className="text-3xl text-gray-500 mt-4">
      Estimate how friction across checkout, payments, and post-purchase experience may affect your revenue.
    </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE INPUTS */}
          <div className="space-y-8">

            <h2 className="text-2xl font-semibold text-gray-900">
              Business Metrics
            </h2>

            <Input
              label="Monthly Visitors"
              helper="From Google Analytics or website analytics tools"
              value={visitors}
              setValue={setVisitors}
            />

            <Input
              label="Conversion Rate (%)"
              helper="Example: 2.5 means 2.5% of visitors purchase"
              value={conversionRate}
              setValue={setConversionRate}
            />

            <Input
              label="Average Order Value ($)"
              helper="Average revenue per order"
              value={aov}
              setValue={setAov}
            />

            <div className="border-t pt-10">
              <h3 className="text-xl font-semibold mb-6">
                Friction Signals
              </h3>

              <Input
                label="Abandoned Checkouts (per month)"
                helper="Available in Shopify / GA4 funnel reports"
                value={abandonedCheckouts}
                setValue={setAbandonedCheckouts}
              />

              <Input
                label="Payment Failures (per month)"
                helper="Stripe / payment gateway failure logs"
                value={paymentFailures}
                setValue={setPaymentFailures}
              />

              <Input
                label="Refund / Cancelled Orders (per month)"
                helper="Orders refunded or cancelled after purchase"
                value={refundOrders}
                setValue={setRefundOrders}
              />

              <Input
                label="Checkout Support Tickets (per month)"
                helper="Support queries related to checkout/payment"
                value={supportTickets}
                setValue={setSupportTickets}
              />
            </div>

          </div>

          {/* RIGHT SIDE RESULTS */}
          <div className="bg-gray-600 text-white rounded-3xl p-12 flex flex-col justify-between min-h-[700px]">

            <div>

              <h2 className="text-6xl font-semibold mb-10">
                Revenue Analysis
              </h2>

              <Metric
                label="Estimated Monthly Revenue"
                value={monthlyRevenue}
              />

              <Metric
                label="Lost to Checkout Abandonment"
                value={checkoutLoss}
              />

              <Metric
                label="Lost to Payment Failures"
                value={paymentLoss}
              />

              <Metric
                label="Lost to Refunds / Cancellations"
                value={refundLoss}
              />

              <Metric
                label="Support-Driven Checkout Friction"
                value={supportImpact}
              />

              <div className="border-t border-gray-700 my-8"></div>

              <div className="mt-12 text-center">
              <p className="text-gray-200 text-2xl">
              Potential Recoverable Revenue
              </p>

                <h3 className="text-5xl font-extrabold text-green-400 mt-4">
                  ${recoverableRevenue.toLocaleString()}
                </h3>
              </div>
            </div>

            {/* Insight */}
            <div className="mt-12 bg-white/10 p-8 rounded-2xl text-left">
            <p className="text-gray-200 text-2xl leading-relaxed">
                Based on the numbers provided, your business could be losing
                <span className="text-white font-semibold">
                  {" "} ${totalLoss.toLocaleString()} per month
                </span>
                {" "}due to friction across checkout, payments, and
                post-purchase interactions.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/testimonials"
              className="mt-10 bg-black text-white px-4 py-3 rounded-xl font-semibold inline-block w-fit mx-auto"
            > 
              Read Customer Stories →
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}


/* INPUT COMPONENT */

function Input({
  label,
  helper,
  value,
  setValue
}: {
  label: string
  helper?: string
  value: number
  setValue: (v: number) => void
}) {

  return (
    <div className="mb-8">
      <label className="block text-lg font-semibold text-gray-800 mb-2">
        {label}
      </label>

      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full border rounded-xl px-5 py-4 text-xl"
      />

      {helper && (
        <p className="text-xs text-gray-500 mt-2">
          {helper}
        </p>
      )}
    </div>
  )
}

/* METRIC DISPLAY */

function Metric({
  label,
  value
}: {
  label: string
  value: number
}) {

  return (
    <div className="mb-10 text-center">
      <p className="text-gray-200 text-2xl">
        {label}
      </p>

      <h3 className="text-5xl font-bold mt-2">
        ${value.toLocaleString()}
      </h3>
    </div>
  )
}