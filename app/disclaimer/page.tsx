import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | The Daily Law',
  description: 'Important disclaimer about The Daily Law\'s legislative analysis service. We provide educational content, not legal advice. Learn about our AI-powered analysis and data sources.',
  keywords: ['disclaimer', 'legal advice', 'educational content', 'not legal advice'],
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="prose prose-zinc max-w-none">
        <h1 className="text-4xl font-serif font-black mb-8">Disclaimer</h1>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            <span className="mr-2">⚠️</span>
            Important Notice
          </h2>
          <p className="text-red-800 font-semibold text-lg leading-relaxed mb-4">
            The Daily Law provides <strong>educational content and legislative analysis</strong>, 
            <strong>not legal advice</strong>.
          </p>
        </div>

        <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-zinc-900">What We Provide</h2>
          <div className="space-y-4 text-zinc-700 leading-relaxed">
            <p>
              <strong>Legislative Analysis:</strong> We analyze and explain proposed legislation 
              in plain language, focusing on practical impacts and stakeholder effects.
            </p>
            <p>
              <strong>Contextual Information:</strong> We provide background on sponsors, 
              financial interests, and relevant policy history to help readers understand the broader context.
            </p>
            <p>
              <strong>Source Citations:</strong> We link directly to official government sources, 
              campaign finance data, and research materials used in our analysis.
            </p>
            <p>
              <strong>AI-Powered Synthesis:</strong> We use artificial intelligence to 
              synthesize complex information into clear, accessible briefs.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-amber-900">What We Don't Provide</h2>
          <div className="space-y-4 text-zinc-700 leading-relaxed">
            <p className="flex items-start">
              <span className="text-red-600 mr-2">✗</span>
              <span><strong>Legal Advice:</strong> We cannot provide legal advice, 
              recommend how to vote, or suggest legal strategies.
              </span>
            </p>
            <p className="flex items-start">
              <span className="text-red-600 mr-2">✗</span>
              <span><strong>Professional Legal Services:</strong> Our analysis is not a substitute 
              for consultation with qualified legal professionals.
              </span>
            </p>
            <p className="flex items-start">
              <span className="text-red-600 mr-2">✗</span>
              <span><strong>Investment Advice:</strong> We do not provide financial, 
              investment, or business recommendations.
              </span>
            </p>
            <p className="flex items-start">
              <span className="text-red-600 mr-2">✗</span>
              <span><strong>Guaranteed Outcomes:</strong> Legislative predictions 
              and impact assessments are based on available information and may not prove accurate.
              </span>
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">How to Use Our Content</h2>
          <div className="space-y-4 text-zinc-700 leading-relaxed">
            <p>
              <strong>For Educational Purposes:</strong> Use our analysis to understand 
              legislation, its potential impacts, and the interests involved.
            </p>
            <p>
              <strong>Verify Independently:</strong> Always consult official sources and 
              legal professionals for important decisions.
            </p>
            <p>
              <strong>Critical Thinking:</strong> Consider multiple perspectives and 
              question assumptions in our analysis.
            </p>
            <p>
              <strong>Civic Engagement:</strong> Use our information to participate 
              more effectively in democratic processes.
            </p>
          </div>
        </div>

        <div className="bg-zinc-100 border border-zinc-300 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-zinc-900">Limitations & Biases</h2>
          <div className="space-y-4 text-zinc-700 leading-relaxed">
            <p>
              <strong>AI Limitations:</strong> Our AI analysis may miss nuances, 
              misinterpret complex provisions, or overlook important context.
            </p>
            <p>
              <strong>Data Availability:</strong> Our analysis depends on publicly available 
              information, which may be incomplete or outdated.
            </p>
            <p>
              <strong>Temporal Factors:</strong> Legislative status and political dynamics 
              change rapidly; our analysis reflects information available at the time of writing.
            </p>
            <p>
              <strong>Source Bias:</strong> While we strive for non-partisanship, 
              our sources (news articles, think tanks) may have inherent perspectives.
            </p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-green-900">Professional Consultation</h2>
          <div className="bg-white border border-green-300 rounded-lg p-6">
            <p className="text-green-800 font-semibold leading-relaxed mb-4">
              For legal matters, professional advice, or decisions with significant consequences, 
              always consult with qualified legal professionals who can consider your specific circumstances.
            </p>
            <div className="text-center">
              <div className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold">
                When in Doubt, Ask a Lawyer
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 text-white rounded-lg p-8 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Contact & Feedback</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            If you find errors, have suggestions, or believe our analysis needs improvement, 
            we want to hear from you. Your feedback helps us improve our accuracy 
            and usefulness for all readers.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            While we cannot provide individual responses, we take all feedback seriously 
            and use it to enhance our methodology and correction processes.
          </p>
        </div>
      </div>
    </div>
  );
}
