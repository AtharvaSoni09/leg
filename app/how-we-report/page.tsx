import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Report | The Daily Law Methodology',
  description: 'Learn about The Daily Law\'s reporting methodology, data sources, and synthesis process. We use official government data, FEC disclosures, news coverage, and AI analysis.',
  keywords: ['methodology', 'data sources', 'legislative analysis', 'government data', 'FEC'],
};

export default function HowWeReportPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="prose prose-zinc max-w-none">
        <h1 className="text-4xl font-serif font-black mb-8">How We Report</h1>
        
        <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-zinc-900">Our Data Sources</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Congress.gov</h3>
              <p className="text-zinc-700 leading-relaxed mb-2">
                <strong>What we get:</strong> Official bill text, sponsor information, 
                legislative status, committee assignments, and voting records.
              </p>
              <p className="text-zinc-700 leading-relaxed">
                <strong>How we use it:</strong> Primary source for bill content and legislative history. 
                Every bill links directly to its official Congress.gov page.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold mb-3 text-green-900">Federal Election Commission (FEC)</h3>
              <p className="text-zinc-700 leading-relaxed mb-2">
                <strong>What we get:</strong> Campaign finance data, fundraising totals, 
                contributor information, and industry breakdowns for sponsors and cosponsors.
              </p>
              <p className="text-zinc-700 leading-relaxed">
                <strong>How we use it:</strong> To show the money trail behind legislation - 
                who sponsors are, how much they've raised, and what industries support them.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="text-xl font-semibold mb-3 text-amber-900">News Coverage</h3>
              <p className="text-zinc-700 leading-relaxed mb-2">
                <strong>What we get:</strong> News articles, opinion pieces, and media analysis 
                from multiple sources across the political spectrum.
              </p>
              <p className="text-zinc-700 leading-relaxed">
                <strong>How we use it:</strong> To understand real-world context, 
                stakeholder positions, and public debate around each bill.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold mb-3 text-purple-900">Policy Research</h3>
              <p className="text-zinc-700 leading-relaxed mb-2">
                <strong>What we get:</strong> Think tank analysis, academic papers, 
                and policy briefs from non-partisan organizations.
              </p>
              <p className="text-zinc-700 leading-relaxed">
                <strong>How we use it:</strong> To provide expert perspectives and 
                historical context on the issues addressed by legislation.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">Our Synthesis Process</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-zinc-900">Data Aggregation</h4>
                <p className="text-zinc-700 leading-relaxed">
                  We gather all available data sources for each bill, creating a comprehensive 
                  information package before analysis begins.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-zinc-900">AI Analysis</h4>
                <p className="text-zinc-700 leading-relaxed">
                  Our AI analyzes the aggregated data to identify key provisions, 
                  stakeholder impacts, and potential consequences. It synthesizes 
                  information into a coherent narrative.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-zinc-900">Human Review</h4>
                <p className="text-zinc-700 leading-relaxed">
                  Each analysis is reviewed for accuracy, completeness, and clarity before publication. 
                  We ensure the final output meets our quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-amber-900">Our Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-zinc-900 mb-3">Accuracy</h4>
              <p className="text-zinc-700 leading-relaxed">
                We cross-reference multiple sources and link to official documents. 
                When data conflicts, we prioritize official government sources.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 mb-3">Clarity</h4>
              <p className="text-zinc-700 leading-relaxed">
                Complex legislation broken into plain language. Technical terms explained. 
                Key impacts highlighted in TL;DR format.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 mb-3">Transparency</h4>
              <p className="text-zinc-700 leading-relaxed">
                Every source is cited. Every methodology explained. 
                No hidden agendas or undisclosed conflicts.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 mb-3">Timeliness</h4>
              <p className="text-zinc-700 leading-relaxed">
                We track bills in real-time. Updates processed as legislative 
                status changes and new developments occur.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-100 border border-zinc-300 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-zinc-900">Source Verification</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Every article includes a "Sources" section that links directly to:
          </p>
          <ul className="space-y-2 text-zinc-700 leading-relaxed">
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">→</span>
              Official Congress.gov bill page
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">→</span>
              FEC data for sponsor and cosponsor financial information
            </li>
            <li className="flex items-center">
              <span className="text-amber-600 mr-2">→</span>
              News articles and media coverage used in analysis
            </li>
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">→</span>
              Policy research and think tank analysis
            </li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mt-4">
            This transparency allows you to verify our analysis and explore the source material 
            for yourself. We believe informed citizens should have access to the same information 
            that informs our reporting.
          </p>
        </div>
      </div>
    </div>
  );
}
