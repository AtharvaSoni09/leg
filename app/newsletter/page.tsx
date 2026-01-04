import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Newsletter - Coming Soon | The Daily Law',
  description: 'Subscribe to The Daily Law newsletter for daily updates on legislation, policy analysis, and legal insights. Coming soon.',
  openGraph: {
    title: 'Newsletter - Coming Soon | The Daily Law',
    description: 'Subscribe to The Daily Law newsletter for daily updates on legislation, policy analysis, and legal insights. Coming soon.',
    url: 'https://thedailylaw.org/newsletter',
    type: 'website',
  },
};

export default function NewsletterPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Newsletter
          </h1>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-12 max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="text-6xl mb-4">📧</div>
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our newsletter service is currently under development. Soon you'll be able to receive daily updates on legislation, policy analysis, and legal insights delivered directly to your inbox.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">What to expect:</h3>
              <ul className="text-left text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Daily legislative updates and analysis
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  In-depth policy briefings
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Exclusive legal insights
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Curated news from Congress
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>Stay informed:</strong> Check back soon or follow our updates for the newsletter launch announcement.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/legislation-summary" 
                className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 font-medium rounded-lg transition-colors"
              >
                Browse Latest Legislation
              </Link>
              <Link 
                href="/topics" 
                className="inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 font-medium rounded-lg transition-colors"
              >
                Explore Topics
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Have questions about our upcoming newsletter?
          </p>
          <Link 
            href="/about" 
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </div>
  );
}
