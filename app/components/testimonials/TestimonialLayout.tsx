type Props = {
  title: string;
  children: React.ReactNode;
};

export default function TestimonialLayout({ title, children }: Props) {
  return (
    <main style={{ backgroundColor: "#fff" }}>
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "96px 24px"
        }}
      >
        <header style={{ marginBottom: "56px" }}>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "16px",
              color: "#0a0a0a"
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#555",
              maxWidth: "760px"
            }}
          >
            Analytics showed where customers dropped off —
            MOTS revealed why.
          </p>
        </header>

        {children}
      </div>
    </main>
  );
}
