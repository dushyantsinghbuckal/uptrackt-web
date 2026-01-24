"use client";

import { useState } from "react";

export default function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="mx-auto max-w-xl px-6 py-24">
      {!submitted ? (
        <>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Request a Demo
          </h1>

          <p className="text-lg text-gray-600 mb-10">
            Tell us a bit about your business and the problem you want to solve.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
           
           <div>
           <label className="block text-sm font-medium mb-1">
           Full Name
           </label>
           <input
           type="text"
           required
           className="w-full border rounded-md px-3 py-2"
           />
           </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Work Email
              </label>
              <input
                type="email"
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Company Name
              </label>
              <input
                type="text"
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

              <div>
              <label className="block text-sm font-medium mb-1">
                Your Role (optional)
              </label>
              <select className="w-full border rounded-md px-3 py-2">
                <option value="">Select</option>
                <option>Founder</option>
                <option>Product</option>
                <option>Growth</option>
                <option>Marketing</option>
                <option>Operations</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                What problem are you trying to solve?
              </label>
              <textarea
                rows={4}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-black px-4 py-3 text-white font-medium hover:bg-gray-800"
            >
              Request Demo
            </button>
          </form>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thanks — we’ve got it 👍
          </h1>

          <p className="text-lg text-gray-600">
            We’ll reach out shortly to understand your use case and
            schedule a walkthrough.
          </p>
        </>
      )}
    </main>
  );
}
