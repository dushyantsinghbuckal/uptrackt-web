export default function ResourcesPage() {
    return (
      <main className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl font-bold text-gray-900">
          Resources
        </h1>
  
        <p className="mt-6 text-lg text-gray-600 max-w-3xl">
          Learn how to build better customer experiences with insights, guides,
          and best practices.
        </p>
  
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Resource title="CX Playbooks" />
          <Resource title="Retail Benchmarks" />
          <Resource title="Product Updates" />
        </div>
      </main>
    );
  }
  
  function Resource({ title }: { title: string }) {
    return (
      <div className="rounded-lg border p-6">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">
          Actionable insights and practical guidance.
        </p>
      </div>
    );
  }
  