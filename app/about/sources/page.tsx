import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sources & Citations | The Daily Law',
  description: 'Comprehensive list of primary sources used in our legislative analysis. Official government data, academic research, and authoritative publications.',
  openGraph: {
    title: 'Sources & Citations | The Daily Law',
    description: 'Comprehensive list of primary sources used in our legislative analysis. Official government data and authoritative publications.',
    url: 'https://thedailylaw.org/about/sources',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sources & Citations | The Daily Law',
    description: 'Comprehensive list of primary sources used in our legislative analysis. Official government data and authoritative publications.',
  },
};

export default function SourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="space-y-10">
        <section className="text-center">
          <h1 className="text-5xl font-serif font-black text-zinc-900 mb-6">
            Sources & Citations
          </h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to transparency through comprehensive source attribution and primary data verification.
          </p>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
          <h2 className="text-2xl font-serif font-black text-zinc-900 mb-6">Primary Government Sources</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-zinc-200">
              <h3 className="font-semibold text-zinc-900 mb-3">Congress.gov</h3>
              <p className="text-zinc-700 mb-3">
                Official source for all federal legislation. Provides bill text, status, sponsor information, 
                voting records, and legislative history.
              </p>
              <div className="text-sm text-zinc-600">
                <strong>Used for:</strong> Bill text, legislative status, sponsor data, voting records<br />
                <strong>Authority:</strong> Library of Congress, official congressional database<br />
                <strong>Updated:</strong> Real-time as Congress acts
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-zinc-200">
              <h3 className="font-semibold text-zinc-900 mb-3">Federal Election Commission (FEC)</h3>
              <p className="text-zinc-700 mb-3">
                Campaign finance data for all federal candidates, including sponsors and cosponsors of legislation.
              </p>
              <div className="text-sm text-zinc-600">
                <strong>Used for:</strong> Campaign contributions, industry connections, funding sources<br />
                <strong>Authority:</strong> Federal Election Commission, official campaign finance database<br />
                <strong>Updated:</strong> Quarterly filing reports
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-zinc-200">
              <h3 className="font-semibold text-zinc-900 mb-3">Federal Register</h3>
              <p className="text-zinc-700 mb-3">
                Official journal of the federal government. Contains proposed rules, final rules, and public notices.
              </p>
              <div className="text-sm text-zinc-600">
                <strong>Used for:</strong> Regulatory context, implementation details, agency interpretations<br />
                <strong>Authority:</strong> National Archives and Records Administration<br />
                <strong>Updated:</strong> Daily publication
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-zinc-200">
              <h3 className="font-semibold text-zinc-900 mb-3">Congressional Record</h3>
              <p className="text-zinc-700 mb-3">
                Official record of the proceedings and debates of the United States Congress.
              </p>
              <div className="text-sm text-zinc-600">
                <strong>Used for:</strong> Floor debates, member statements, legislative intent<br />
                <strong>Authority:</strong> United States Congress<br />
                <strong>Updated:</strong> Daily when Congress is in session
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-zinc-200">
              <h3 className="font-semibold text-zinc-900 mb-3">Supreme Court Opinions</h3>
              <p className="text-zinc-700 mb-3">
                Judicial interpretations that affect legislative implementation and constitutional considerations.
              </p>
              <div className="text-sm text-zinc-600">
                <strong>Used for:</strong> Constitutional analysis, judicial precedent, legal context<br />
                <strong>Authority:</strong> Supreme Court of the United States<br />
                <strong>Updated:</strong> As opinions are issued
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="text-2xl font-serif font-black text-blue-900 mb-6">News & Media Sources</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-zinc-900 mb-2">Major News Organizations</h3>
              <p className="text-sm text-zinc-700">
                Reuters, Associated Press, Bloomberg, Politico, The Hill, Washington Post, New York Times
              </p>
              <p className="text-xs text-zinc-600 mt-2">
                Used for: Public reaction, stakeholder positions, real-time developments
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-zinc-900 mb-2">Trade Publications</h3>
              <p className="text-sm text-zinc-700">
                Industry-specific publications providing expert analysis and stakeholder perspectives
              </p>
              <p className="text-xs text-zinc-600 mt-2">
                Used for: Industry impact analysis, expert opinions, sector-specific context
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-purple-200 bg-purple-50 p-8">
          <h2 className="text-2xl font-serif font-black text-purple-900 mb-6">Policy Research Sources</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-zinc-900 mb-2">Think Tanks & Research Institutions</h3>
              <p className="text-sm text-zinc-700">
                Brookings Institution, Cato Institute, Heritage Foundation, Center for American Progress, 
                RAND Corporation, Pew Research Center
              </p>
              <p className="text-xs text-zinc-600 mt-2">
                Used for: Policy analysis, research studies, expert perspectives
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-zinc-900 mb-2">Academic Sources</h3>
              <p className="text-sm text-zinc-700">
                Peer-reviewed journals, law reviews, academic research papers
              </p>
              <p className="text-xs text-zinc-600 mt-2">
                Used for: Theoretical frameworks, empirical research, scholarly analysis
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold text-zinc-900 mb-2">Government Reports</h3>
              <p className="text-sm text-zinc-700">
                GAO reports, CBO analyses, agency research, commission findings
              </p>
              <p className="text-xs text-zinc-600 mt-2">
                Used for: Official government analysis, cost estimates, impact assessments
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
          <h2 className="text-2xl font-serif font-black text-amber-900 mb-6">Source Verification Process</h2>
          <div className="space-y-4 text-zinc-700 leading-relaxed">
            <p>
              <span className="font-semibold">Automated Cross-Reference:</span> Our systems automatically cross-reference 
              data from multiple sources to ensure accuracy and completeness.
            </p>
            <p>
              <span className="font-semibold">Primary Source Priority:</span> When conflicts exist between sources, 
              official government sources take precedence over secondary sources.
            </p>
            <p>
              <span className="font-semibold">Date Verification:</span> All sources are timestamped and verified for 
              currency to ensure readers have the most current information.
            </p>
            <p>
              <span className="font-semibold">Link Verification:</span> All external links are regularly checked 
              to ensure they remain active and point to the correct information.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h2 className="text-2xl font-serif font-black text-green-900 mb-6">Citation Standards</h2>
          <div className="space-y-4 text-zinc-700 leading-relaxed">
            <p>
              <span className="font-semibold">Direct Links:</span> Every claim that can be verified includes a direct 
              link to the primary source material.
            </p>
            <p>
              <span className="font-semibold">Contextual Citations:</span> Sources are cited in context, showing 
              exactly what information was obtained from each source.
            </p>
            <p>
              <span className="font-semibold">Source Diversity:</span> We strive to include multiple perspectives 
              and sources to provide comprehensive coverage of each issue.
            </p>
            <p>
              <span className="font-semibold">Transparency:</span> Our methodology for source selection and 
              verification is fully disclosed to maintain reader trust.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
