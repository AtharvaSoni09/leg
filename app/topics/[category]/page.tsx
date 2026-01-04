import { supabasePublic } from '@/lib/supabase';
import { Metadata } from 'next';
import Link from 'next/link';
import { getCategoryById, categories } from '@/lib/utils/categories';
import { notFound } from 'next/navigation';
import { Pagination } from '@/components/ui/pagination';

interface PageProps {
  params: Promise<{ category: string; page?: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryData = getCategoryById(category);
  
  if (!categoryData) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `${categoryData.name} Legislation | The Daily Law`,
    description: `Comprehensive coverage of ${categoryData.name.toLowerCase()} legislation. ${categoryData.description}`,
    openGraph: {
      title: `${categoryData.name} Legislation | The Daily Law`,
      description: `Comprehensive coverage of ${categoryData.name.toLowerCase()} legislation. ${categoryData.description}`,
      url: `https://thedailylaw.org/topics/${category}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryData.name} Legislation | The Daily Law`,
      description: `Comprehensive coverage of ${categoryData.name.toLowerCase()} legislation. ${categoryData.description}`,
    },
  };
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
  const { category } = await params;
  const { page } = await searchParams;
  const categoryData = getCategoryById(category);
  
  if (!categoryData) {
    notFound();
  }

  // Parse page number
  const currentPage = parseInt(page || '1', 10);
  const billsPerPage = 6;
  const offset = (currentPage - 1) * billsPerPage;

  // Get all bills for this category
  const { data: allBills, error } = await supabasePublic
    .from('legislation')
    .select('*')
    .order('update_date', { ascending: false }); // Sort by latest legislative action

  const bills = (allBills as any[]) || [];

  // Filter bills by category keywords
  const categoryBills = bills.filter(bill => {
    const searchText = [
      bill.title,
      bill.tldr,
      bill.meta_description,
      ...(bill.keywords || [])
    ].join(' ').toLowerCase();
    
    return categoryData.keywords.some(keyword => searchText.includes(keyword));
  });

  // Calculate pagination
  const totalPages = Math.ceil(categoryBills.length / billsPerPage);
  const paginatedBills = categoryBills.slice(offset, offset + billsPerPage);

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="space-y-12">
        {/* Header */}
        <section className="text-center">
          <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium mb-6 ${
            categoryData.color === 'blue' ? 'border-blue-200 bg-blue-50 text-blue-700' :
            categoryData.color === 'red' ? 'border-red-200 bg-red-50 text-red-700' :
            categoryData.color === 'green' ? 'border-green-200 bg-green-50 text-green-700' :
            categoryData.color === 'amber' ? 'border-amber-200 bg-amber-50 text-amber-700' :
            categoryData.color === 'emerald' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' :
            categoryData.color === 'purple' ? 'border-purple-200 bg-purple-50 text-purple-700' :
            categoryData.color === 'indigo' ? 'border-indigo-200 bg-indigo-50 text-indigo-700' :
            categoryData.color === 'orange' ? 'border-orange-200 bg-orange-50 text-orange-700' :
            'border-zinc-200 bg-zinc-50 text-zinc-700'
          }`}>
            <span>{categoryData.name}</span>
          </div>
          <h1 className="text-5xl font-serif font-black text-zinc-900 mb-6">
            {categoryData.name} Legislation
          </h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            {categoryData.description}
          </p>
        </section>

        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-zinc-900">{categoryBills.length}</div>
            <div className="text-sm text-zinc-600 mt-2">{categoryData.name} Bills Tracked</div>
          </div>
          <div className="bg-zinc-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-zinc-900">119th</div>
            <div className="text-sm text-zinc-600 mt-2">Current Congress</div>
          </div>
          <div className="bg-zinc-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-zinc-900">24/7</div>
            <div className="text-sm text-zinc-600 mt-2">Real-time Updates</div>
          </div>
        </section>

        {/* Featured Bills */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif font-black text-zinc-900">
              {categoryData.name} Legislation
              {totalPages > 1 && (
                <span className="text-lg font-normal text-zinc-600 ml-2">
                  (Page {currentPage} of {totalPages})
                </span>
              )}
            </h2>
            {categoryBills.length > 0 && (
              <div className="text-sm text-zinc-600">
                Showing {offset + 1}-{Math.min(offset + billsPerPage, categoryBills.length)} of {categoryBills.length}
              </div>
            )}
          </div>
          
          {paginatedBills.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginatedBills.map((bill) => (
                <Link 
                  key={bill.bill_id} 
                  href={`/legislation-summary/${bill.url_slug}`}
                  className="block group"
                >
                  <div className="border border-zinc-200 rounded-xl p-6 hover:border-zinc-300 hover:bg-zinc-50 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`text-xs font-medium px-2 py-1 rounded ${
                        categoryData.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                        categoryData.color === 'red' ? 'bg-red-50 text-red-600' :
                        categoryData.color === 'green' ? 'bg-green-50 text-green-600' :
                        categoryData.color === 'amber' ? 'bg-amber-50 text-amber-600' :
                        categoryData.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                        categoryData.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                        categoryData.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                        categoryData.color === 'orange' ? 'bg-orange-50 text-orange-600' :
                        'bg-zinc-50 text-zinc-600'
                      }`}>
                        {bill.bill_id}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {bill.origin_chamber}
                      </div>
                    </div>
                    <h3 className="font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors mb-3">
                      {bill.title}
                    </h3>
                    <p className="text-sm text-zinc-600 line-clamp-3 mb-4">
                      {bill.tldr}
                    </p>
                    <div className="flex items-center text-xs text-zinc-500">
                      <span>Sponsored by {bill.sponsor_data?.sponsors?.[0]?.name || 'Unknown'}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-zinc-600">No {categoryData.name.toLowerCase()} legislation found.</p>
              <Link href="/legislation-summary" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
                View all legislation
              </Link>
            </div>
          )}
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <section className="flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              baseUrl={`/topics/${category}`}
            />
          </section>
        )}

        {/* Related Topics */}
        <section className="bg-zinc-50 rounded-xl p-8">
          <h2 className="text-2xl font-serif font-black text-zinc-900 mb-6">Related Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories
              .filter(cat => cat.id !== category)
              .slice(0, 3)
              .map((relatedCategory) => (
                <Link key={relatedCategory.id} href={`/topics/${relatedCategory.id}`} className="block group">
                  <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:border-zinc-300 transition-all">
                    <h3 className="font-semibold text-zinc-900 group-hover:text-blue-600">{relatedCategory.name}</h3>
                    <p className="text-sm text-zinc-600 mt-1">{relatedCategory.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        {/* All Categories */}
        <section>
          <h2 className="text-2xl font-serif font-black text-zinc-900 mb-6">All Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link 
                key={cat.id} 
                href={`/topics/${cat.id}`}
                className={`block group ${cat.id === category ? 'pointer-events-none' : ''}`}
              >
                <div className={`rounded-lg p-4 border transition-all ${
                  cat.id === category 
                    ? (() => {
                      switch(cat.color) {
                        case 'blue': return 'border-blue-300 bg-blue-50';
                        case 'red': return 'border-red-300 bg-red-50';
                        case 'green': return 'border-green-300 bg-green-50';
                        case 'amber': return 'border-amber-300 bg-amber-50';
                        case 'emerald': return 'border-emerald-300 bg-emerald-50';
                        case 'purple': return 'border-purple-300 bg-purple-50';
                        case 'indigo': return 'border-indigo-300 bg-indigo-50';
                        case 'orange': return 'border-orange-300 bg-orange-50';
                        default: return 'border-zinc-300 bg-zinc-50';
                      }
                    })()
                    : 'border-zinc-200 hover:border-zinc-300 bg-white'
                }`}>
                  <h3 className={`font-semibold ${
                    cat.id === category 
                      ? (() => {
                        switch(cat.color) {
                          case 'blue': return 'text-blue-900';
                          case 'red': return 'text-red-900';
                          case 'green': return 'text-green-900';
                          case 'amber': return 'text-amber-900';
                          case 'emerald': return 'text-emerald-900';
                          case 'purple': return 'text-purple-900';
                          case 'indigo': return 'text-indigo-900';
                          case 'orange': return 'text-orange-900';
                          default: return 'text-zinc-900';
                        }
                      })()
                      : 'text-zinc-900 group-hover:text-blue-600'
                  }`}>
                    {cat.name}
                  </h3>
                  <p className="text-sm text-zinc-600 mt-1">{cat.description}</p>
                  {cat.id === category && (
                    <div className={`text-xs mt-2 font-medium ${
                      cat.color === 'blue' ? 'text-blue-600' :
                      cat.color === 'red' ? 'text-red-600' :
                      cat.color === 'green' ? 'text-green-600' :
                      cat.color === 'amber' ? 'text-amber-600' :
                      cat.color === 'emerald' ? 'text-emerald-600' :
                      cat.color === 'purple' ? 'text-purple-600' :
                      cat.color === 'indigo' ? 'text-indigo-600' :
                      cat.color === 'orange' ? 'text-orange-600' :
                      'text-zinc-600'
                    }`}>
                      Currently viewing
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
