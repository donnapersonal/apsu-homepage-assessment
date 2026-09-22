import { getHomePageContent } from "@/lib/content";

export default async function Home() {
  const content = await getHomePageContent();

  return (
    <main id="top" className="min-h-screen bg-canvas text-ink">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-wide text-emerald-700">
          {content.hero.eyebrow.join(" / ")}
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight">
          {content.hero.title}{" "}
          <span className="text-emerald-700">
            {content.hero.highlightedTitle}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700">
          {content.hero.description}
        </p>
      </section>
    </main>
  );
}