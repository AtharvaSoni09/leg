"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { categories } from "@/lib/utils/categories";

interface HeaderProps {
  isHomepage?: boolean;
}

export function Header({ isHomepage = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const Logo = isHomepage ? 'h1' : 'div';

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

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
      
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link 
              href="/legislation-summary" 
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
              aria-label="The Daily Law - Home"
            >
              <Logo className="text-3xl font-serif font-black tracking-tight m-0 leading-tight">
                THE DAILY LAW
              </Logo>
              <div className="w-px h-px bg-gray-300 my-2"></div>
              <p className="text-xs font-serif text-gray-500 tracking-widest uppercase leading-relaxed">
                E S T . 2 0 2 6 | L E G A L A N A L Y S I S
              </p>
            </Link>

            {/* Search */}
            <form onSubmit={handleSearch} className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="search"
                placeholder="Search legislation, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-gray-900 pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
            </form>

            {/* Navigation */}
            <nav className="flex items-center gap-6">
              <Link 
                href="/topics" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Topics
              </Link>
              <Link 
                href="/topics/congress" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Congress
              </Link>
              <Link 
                href="/about" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                About
              </Link>
              <Link 
                href="/newsletter" 
                className="border border-gray-900 text-gray-900 hover:border-gray-700 hover:text-gray-800 px-4 py-2 text-sm font-medium transition-colors rounded-md"
              >
                Subscribe
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden border-t border-gray-200">
          <div className="container mx-auto px-6">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center py-4 text-gray-600 w-full"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            {mobileMenuOpen && (
              <div className="pb-4">
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/topics/${category.id}`}
                      className="text-gray-700 hover:text-gray-900 transition-colors font-sans font-bold text-sm uppercase tracking-wider py-2 block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-gray-200 mt-4 pt-4 space-y-2">
                  <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm block py-2">About</Link>
                  <Link href="/about/editorial-process" className="text-gray-600 hover:text-gray-900 transition-colors text-sm block py-2">How We Report</Link>
                  <Link href="/about/sources" className="text-gray-600 hover:text-gray-900 transition-colors text-sm block py-2">Sources</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
