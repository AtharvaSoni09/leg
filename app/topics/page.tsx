import { Metadata } from 'next';
import Link from 'next/link';
import { categories } from '@/lib/utils/categories';

export const metadata: Metadata = {
  title: 'Topics | The Daily Law',
  description: 'Explore all legal topics covered by The Daily Law. From technology law to national security, healthcare, economy, energy, immigration, education, and infrastructure policy.',
  openGraph: {
    title: 'Topics | The Daily Law',
    description: 'Explore all legal topics covered by The Daily Law. From technology law to national security, healthcare, economy, energy, immigration, education, and infrastructure policy.',
    url: 'https://thedailylaw.org/topics',
    type: 'website',
  },
};

export default function TopicsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Legal Topics
        </h1>
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Explore comprehensive coverage of legislation and policy across all major legal domains. 
          Each topic provides in-depth analysis of current bills, policy implications, and legislative developments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/topics/${category.id}`}
            className="block group"
          >
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-200 h-full">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-${category.color}-100 flex items-center justify-center`}>
                  <div className={`w-6 h-6 rounded-full bg-${category.color}-500`}></div>
                </div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {category.id}
                </div>
              </div>
              
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {category.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {category.keywords.length} keywords
                </span>
                <span className="text-blue-600 group-hover:text-blue-700 text-sm font-medium transition-colors">
                  Explore →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-gray-600 mb-6">
            Use our search functionality to find specific legislation, bills, or policy topics across all categories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/search" 
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium rounded-lg transition-colors"
            >
              Search Legislation
            </Link>
            <Link 
              href="/legislation-summary" 
              className="inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 font-medium rounded-lg transition-colors"
            >
              Browse All Bills
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
