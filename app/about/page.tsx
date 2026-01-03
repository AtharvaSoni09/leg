import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About The Daily Law | Non-Partisan Legislative Analysis',
  description: 'The Daily Law provides transparent, AI-powered analysis of U.S. legislation. Our mission is to make complex bills accessible through clear, non-partisan policy briefs.',
  keywords: ['legislative analysis', 'bill tracking', 'policy research', 'government transparency'],
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="space-y-10">
        <section className="rounded-2xl border border-zinc-200 overflow-hidden bg-white">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-3 px-8 py-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-zinc-600">
                Trust Layer
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl font-serif font-black text-zinc-900 leading-tight">
                About The Daily Law
              </h1>
              <p className="mt-4 text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
                Transparent, non-partisan legislative analysis—powered by public data and careful synthesis.
              </p>
            </div>
            <div className="md:col-span-2 border-t md:border-t-0 md:border-l border-zinc-200">
              <div className="h-44 md:h-full bg-zinc-100 bg-[url('/about-hero.jpg')] bg-cover bg-center" />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
          <h2 className="text-2xl font-serif font-black text-zinc-900">Our Mission</h2>
          <div className="mt-4 space-y-4 text-zinc-700 leading-relaxed">
            <p>
              The Daily Law exists to make U.S. legislation accessible and understandable.
              We believe democracy works better when citizens can quickly grasp what Congress is doing,
              who benefits from proposed laws, and what the real-world impact might be.
            </p>
            <p>
              Every bill we analyze is broken down into clear, actionable insights that answer
              the questions that matter: Who benefits? Who pays? And why does this matter?
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="text-2xl font-serif font-black text-blue-900">Our Methodology</h2>
          <div className="mt-4 space-y-4 text-zinc-700 leading-relaxed">
            <p>
              <span className="font-semibold">1. Official Data Sources:</span> We start with official congressional data
              from Congress.gov, including bill text, sponsor information, and legislative status.
            </p>
            <p>
              <span className="font-semibold">2. Financial Transparency:</span> We integrate FEC data to show
              the money trail behind legislation—who sponsors are, how much they’ve raised,
              and what industries support them.
            </p>
            <p>
              <span className="font-semibold">3. Context Research:</span> We gather news coverage and policy research
              from multiple sources to provide real-world context and stakeholder perspectives.
            </p>
            <p>
              <span className="font-semibold">4. AI-Powered Synthesis:</span> Our AI analyzes all this data to
              produce cohesive, non-partisan briefs that highlight key impacts and trade-offs.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
          <h2 className="text-2xl font-serif font-black text-amber-900">Why We Exist</h2>
          <div className="mt-4 space-y-4 text-zinc-700 leading-relaxed">
            <p>
              Legislative complexity shouldn’t be a barrier to civic engagement.
              Traditional bill tracking requires navigating thousands of pages of legal text,
              understanding procedural jargon, and connecting disparate data sources.
            </p>
            <p>
              The Daily Law bridges this gap. We do the heavy lifting of data synthesis
              so you can focus on what matters: understanding legislation’s impact on your community,
              your industry, and your country.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-300 bg-zinc-100 p-8">
          <h2 className="text-2xl font-serif font-black text-zinc-900">Our Commitment</h2>
          <ul className="mt-4 space-y-3 text-zinc-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><span className="font-semibold">Transparency:</span> Every source is clearly cited, every methodology is explained.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><span className="font-semibold">Non-partisanship:</span> We analyze impacts, not politics. No agenda, just insight.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><span className="font-semibold">Accessibility:</span> Complex legislation made understandable for everyone.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><span className="font-semibold">Accountability:</span> We show who benefits and who pays, not just what the bill says.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
