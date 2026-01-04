import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X, Calendar } from "lucide-react";
import { categories } from "@/lib/utils/categories";

interface HeaderProps {
  isHomepage?: boolean;
}

export function Header({ isHomepage = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const Logo = isHomepage ? 'h1' : 'div';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "name": "Main Navigation",
            "url": "https://thedailylaw.org",
            "hasPart": [
              {
                "@type": "WebPage",
                "name": "Congress",
                "url": "https://thedailylaw.org/topics/congress"
              },
              {
                "@type": "WebPage", 
                "name": "About",
                "url": "https://thedailylaw.org/about"
              },
              {
                "@type": "WebPage",
                "name": "How We Report", 
                "url": "https://thedailylaw.org/about/editorial-process"
              },
              {
                "@type": "WebPage",
                "name": "Sources",
                "url": "https://thedailylaw.org/about/sources"
              },
              ...categories.map(cat => ({
                "@type": "WebPage",
                "name": cat.name,
                "url": `https://thedailylaw.org/topics/${cat.id}`
              }))
            ]
          })
        }}
      />
      
      <header className="bg-black border-b border-zinc-800">
        {/* Utility Bar */}
        <div className="border-b border-zinc-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-10 text-xs">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-900 rounded min-w-[44px] min-h-[44px]"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 text-zinc-500">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
              
              <Link 
                href="/legislation-summary" 
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                aria-label="The Daily Law - Home"
              >
                <Logo className="bg-white text-black px-3 py-1 font-bold font-serif text-sm tracking-widest uppercase m-0">
                  THE DAILY LAW
                </Logo>
              </Link>
              
              <div className="flex items-center gap-4">
                <nav className="hidden md:flex items-center gap-4 text-zinc-400">
                  <Link href="/about" className="hover:text-white transition-colors py-2">About</Link>
                  <Link href="/about/editorial-process" className="hover:text-white transition-colors py-2">How We Report</Link>
                  <Link href="/about/sources" className="hover:text-white transition-colors py-2">Sources</Link>
                </nav>
                <Link 
                  href="#newsletter" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 text-xs font-bold uppercase tracking-wide transition-colors min-w-[44px] min-h-[44px] inline-flex items-center justify-center"
                >
                  Subscribe
                </Link>
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden text-zinc-400 hover:text-white transition-colors p-2 min-w-[44px] min-h-[44px]"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar (Hidden by default) */}
        {searchOpen && (
          <div className="bg-zinc-900 border-b border-zinc-800">
            <div className="container mx-auto px-4 py-3">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                <input
                  type="search"
                  placeholder="Search legislation, topics, or keywords..."
                  className="w-full bg-zinc-800 text-white pl-10 pr-4 py-2 rounded border border-zinc-700 focus:border-blue-500 focus:outline-none"
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}

        {/* Main Navigation */}
        <nav className="container mx-auto px-4" role="navigation" aria-label="Main topics">
          <div className="flex items-center justify-center py-4">
            <div className="hidden lg:flex items-center gap-8">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/topics/${category.id}`}
                  className="text-zinc-300 hover:text-white transition-colors font-medium text-sm whitespace-nowrap hover:underline underline-offset-4 decoration-2 decoration-blue-500 py-2"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden absolute top-full left-0 right-0 bg-black border-b border-zinc-800 z-50">
                <div className="container mx-auto px-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/topics/${category.id}`}
                        className="text-zinc-300 hover:text-white transition-colors font-medium text-sm py-2 block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-zinc-800 mt-4 pt-4 space-y-2">
                    <Link href="/about" className="text-zinc-400 hover:text-white transition-colors text-sm block py-2">About</Link>
                    <Link href="/about/editorial-process" className="text-zinc-400 hover:text-white transition-colors text-sm block py-2">How We Report</Link>
                    <Link href="/about/sources" className="text-zinc-400 hover:text-white transition-colors text-sm block py-2">Sources</Link>
                  </div>
                </div>
              </div>
            )}
            
            {/* Mobile Topics Preview */}
            <div className="lg:hidden flex items-center gap-4 overflow-x-auto">
              {categories.slice(0, 4).map((category) => (
                <Link
                  key={category.id}
                  href={`/topics/${category.id}`}
                  className="text-zinc-300 hover:text-white transition-colors font-medium text-sm whitespace-nowrap py-2"
                >
                  {category.name}
                </Link>
              ))}
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="text-zinc-400 hover:text-white transition-colors font-medium text-sm whitespace-nowrap py-2"
              >
                More...
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
