import { GlobeLockIcon } from "../icons/FeatureIcons";
import { RouteIcon } from "../icons/FeatureIcons";
import { ClockAlertIcon } from "../icons/FeatureIcons";
import { MessageSquareTextIcon } from "../icons/FeatureIcons";
import { BookUserIcon } from "../icons/FeatureIcons";
import { FileAlertIcon } from "../icons/FeatureIcons";
export default function Capabilities() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      
      {/* Section title */}
      <h2 className="text-white text-5xl md:text-6xl font-semibold text-center mb-16">
        Platform Capabilities
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">

        {/* Wide card */}
        <div className="relative col-span-1 md:col-span-3 rounded-3xl bg-neutral-400 p-12">
        <BookUserIcon className="absolute top-6 right-6 w-15 h-15 text-black opacity-99" />
          <h3 className="text-5xl font-semibold text-black">
            Moment-based Surveys
          </h3>
          <p className="mt-6 text-white text-lg md:text-xl font-semibold leading-relaxed">
          Capture feedback at the exact moment customers experience friction or intent.
          </p>
        </div>

        {/* Normal card */}
        <div className="relative col-span-1 md:col-span-2 rounded-3xl bg-neutral-400 p-12">
        <RouteIcon className="absolute top-6 right-6 w-15 h-15 text-black opacity-99" />
          <h3 className="text-4xl font-semibold text-black">
            Journey Analytics
          </h3>
          <p className="mt-6 text-white text-lg md:text-xl font-semibold leading-relaxed">
            Understand where customers drop off across touchpoints.
          </p>
        </div>

        {/* Normal card */}
        <div className="relative col-span-1 md:col-span-2 rounded-3xl bg-neutral-400 p-10">
        <FileAlertIcon className="absolute top-6 right-6 w-13 h-13 text-black opacity-99" />
          <h3 className="text-4xl font-semibold text-black">
            Customer Friction Detection
          </h3>
          <p className="mt-6 text-white text-lg md:text-xl font-semibold leading-relaxed">
            Identify blockers before they impact conversions.
          </p>
        </div>

        {/* Wide card */}
        <div className="relative col-span-1 md:col-span-3 rounded-3xl bg-neutral-400 p-12">
        <MessageSquareTextIcon className="absolute top-6 right-6 w-15 h-15 text-black opacity-99" />
          <h3 className="text-5xl font-semibold text-black">
            Actionable CX Insights
          </h3>
          <p className="mt-6 text-lg text-white text-lg md:text-xl font-semibold leading-relaxed">
            Turn feedback into clear, prioritized actions for CX teams.
          </p>
        </div>

        {/* Normal card */}
        <div className="relative col-span-1 md:col-span-2 rounded-3xl bg-neutral-400 p-12">
        <ClockAlertIcon className="absolute top-6 right-6 w-12 h-12 text-black opacity-99" />
          <h3 className="text-4xl font-semibold text-black">
            Real-time Alerts
          </h3>
          <p className="mt-6 text-white text-lg md:text-xl font-semibold leading-relaxed">
            Get notified instantly when experience degrades.
          </p>
        </div>

        {/* Normal card */}
        <div className="relative col-span-1 md:col-span-2 rounded-3xl bg-neutral-400 p-12">
        <GlobeLockIcon className="absolute top-6 right-6 w-10 h-10 text-black opacity-99" />
          <h3 className="text-4xl font-semibold text-black">
            Enterprise-ready Security
          </h3>
          <p className="mt-6 text-white text-lg md:text-xl font-semibold leading-relaxed">
            Built with privacy, compliance, and scale in mind.
          </p>
        </div>

      </div>
    </div>
  );
}
