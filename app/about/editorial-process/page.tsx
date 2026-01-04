import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial Process | The Daily Law',
  description: 'Our editorial process ensures accuracy, non-partisanship, and transparency in AI-assisted legislative analysis. Learn how we maintain high standards.',
  openGraph: {
    title: 'Editorial Process | The Daily Law',
    description: 'Our editorial process ensures accuracy, non-partisanship, and transparency in AI-assisted legislative analysis.',
    url: 'https://thedailylaw.org/about/editorial-process',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Editorial Process | The Daily Law',
    description: 'Our editorial process ensures accuracy, non-partisanship, and transparency in AI-assisted legislative analysis.',
  },
};

export default function EditorialProcessPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="space-y-10">
        <section className="text-center">
          <h1 className="text-5xl font-serif font-black text-zinc-900 mb-6">
            Editorial Process
          </h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to accuracy, non-partisanship, and transparency in AI-assisted legislative analysis.
          </p>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
          <h2 className="text-2xl font-serif font-black text-zinc-900 mb-6">Our Standards</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-900 font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 mb-2">Accuracy Verification</h3>
                <p className="text-zinc-700 leading-relaxed">
                  All legislative data is cross-referenced with official government sources. Bill text, status, 
                  and sponsor information must match Congress.gov records before publication.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-900 font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 mb-2">Non-Partisan Analysis</h3>
                <p className="text-zinc-700 leading-relaxed">
                  Our AI prompts and editorial guidelines are designed to focus on impacts and mechanisms, 
                  not political positions. We analyze what bills do, not who supports them politically.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-900 font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 mb-2">Source Transparency</h3>
                <p className="text-zinc-700 leading-relaxed">
                  Every article includes direct links to primary sources. Readers can verify our analysis 
                  by consulting the original bill text and official congressional documents.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-900 font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 mb-2">AI Disclosure</h3>
                <p className="text-zinc-700 leading-relaxed">
                  We clearly disclose AI assistance in our research process. Transparency about our methods 
                  builds trust and allows readers to understand our approach.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-purple-200 bg-purple-50 p-8">
          <h2 className="text-2xl font-serif font-black text-purple-900 mb-6">Quality Control Process</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-zinc-900 mb-2">Data Collection</h3>
              <p className="text-sm text-zinc-700">
                Automated systems gather data from Congress.gov, FEC, news sources, and policy research databases.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-zinc-900 mb-2">AI Analysis</h3>
              <p className="text-sm text-zinc-700">
                Language models synthesize information, identify key impacts, and structure content according to our editorial guidelines.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-zinc-900 mb-2">Automated Validation</h3>
              <p className="text-sm text-zinc-700">
                Systems verify bill numbers, sponsor information, and ensure all required sections are present.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-zinc-900 mb-2">Publication</h3>
              <p className="text-sm text-zinc-700">
                Content is published with full source attribution and AI disclosure.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
          <h2 className="text-2xl font-serif font-black text-amber-900 mb-6">Correction Policy</h2>
          <div className="space-y-4 text-zinc-700 leading-relaxed">
            <p>
              <span className="font-semibold">Immediate Corrections:</span> When errors are identified, we correct them immediately 
              and mark the update time on the article.
            </p>
            <p>
              <span className="font-semibold">Transparency:</span> Significant corrections are noted in a correction box at the 
              bottom of the article, explaining what was changed and why.
            </p>
            <p>
              <span className="font-semibold">Contact for Corrections:</span> Readers can report errors through our contact channels. 
              All reports are reviewed within 24 hours.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h2 className="text-2xl font-serif font-black text-green-900 mb-6">Continuous Improvement</h2>
          <div className="space-y-4 text-zinc-700 leading-relaxed">
            <p>
              <span className="font-semibold">Regular Reviews:</span> Our editorial guidelines and AI prompts are reviewed monthly 
              to ensure they meet our standards for accuracy and non-partisanship.
            </p>
            <p>
              <span className="font-semibold">Feedback Integration:</span> Reader feedback helps us identify areas for improvement 
              in our analysis and presentation.
            </p>
            <p>
              <span className="font-semibold">Technology Updates:</span> As AI technology evolves, we update our methods to 
              maintain high quality while leveraging new capabilities.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
