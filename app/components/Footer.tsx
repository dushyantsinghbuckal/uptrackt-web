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