type Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  showBanner?: boolean;
  bannerColor?: string;
  pageBgColor?: string;

  // NEW: Text color controls
  eyebrowColor?: string;
  titleColor?: string;
  subtitleColor?: string;

  children: React.ReactNode;
};

export default function TestimonialLayout({
  eyebrow,
  title,
  subtitle,
  showBanner = true,
  bannerColor = "#000",
  pageBgColor = "#ffffff",

  eyebrowColor = "#d1d5db",
  titleColor = "#ffffff",
  subtitleColor = "#e5e7eb",

  children,
}: Props) {
  return (
    <main style={{ backgroundColor: pageBgColor }}>

      {showBanner && (
        <section
          style={{
            backgroundColor: bannerColor,
            width: "100vw",
            marginLeft: "calc(50% - 50vw)",
            marginRight: "calc(50% - 50vw)",
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: eyebrowColor,
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              marginBottom: "16px",
            }}
          >
            {eyebrow}
          </div>

          <h1
            style={{
              color: titleColor,
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "18px",
              maxWidth: "1000px",
              marginInline: "auto",
            }}
          >
            {title}
          </h1>

          <p
            style={{
              color: subtitleColor,
              fontSize: "28px",
              fontWeight: 500,
              maxWidth: "820px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        </section>
      )}

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 16px",
        }}
      >
        {children}
      </div>

    </main>
  );
}
