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