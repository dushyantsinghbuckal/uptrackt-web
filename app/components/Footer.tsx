import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 items-start">
          
          {/* Brand */}
<div>
  {/* Left column: Logo + subtext */}
  <div className="flex flex-col items-start">
    <img
      src="/file.svg"
      alt="Uptrackt logo"
      className="block h-48 w-auto shrink-0"
    />
            </div>
            <p className="-mt-16 text-2xl leading-[1.2] font-normal tracking-tight text-gray-400">
        Insights where <br />
        decisions happen.
      </p>
    </div>
    
          {/* Product */}
          <div>
            <h4 className="text-3xl font-semibold tracking-tight text-black">
              Product
            </h4>
            <ul className="mt-4 space-y-3 text-xl font-normal tracking-tight">
  <li>
    <Link href="/platform" className="text-gray-400 hover:text-black transition-colors duration-200">
      Platform
    </Link>
  </li>
  <li>
    <Link href="/platform#how-it-works" className="text-gray-400 hover:text-black transition-colors duration-200">
      How It Works
    </Link>
  </li>
  <li>
    <Link href="/platform#capabilities" className="text-gray-400 hover:text-black transition-colors duration-200">
      Platform Capabilities
    </Link>
  </li>
  <li>
    <Link href="/features" className="text-gray-400 hover:text-black transition-colors duration-200">
      Features
    </Link>
  </li>
</ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-3xl font-semibold tracking-tight text-black">
              About
            </h4>
            <ul className="mt-4 space-y-3 text-xl font-normal tracking-tight">
  <li>
    <Link
      href="/resources"
      className="text-gray-400 hover:text-black transition-colors duration-200"
    >
      Resources
    </Link>
  </li>
  <li>
    <Link
      href="/privacy-policy"
      className="text-gray-400 hover:text-black transition-colors duration-200"
    >
      Privacy Policy
    </Link>
  </li>
  <li>
    <Link
      href="/terms"
      className="text-gray-400 hover:text-black transition-colors duration-200"
    >
      Terms of Service
    </Link>
  </li>
</ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="text-3xl font-semibold tracking-tight text-black">
              Get Started
            </h4>

            <p className="mt-4 text-xl font-normal tracking-tight text-gray-400">
              See how Uptrackt helps you turn feedback into growth.
            </p>
            </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t pt-6 text-center text-10px font-normal tracking-tight text-gray-400">
          © 2026 Uptrackt. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
