"use client";

import Link from "next/link";
import { useState, Fragment } from "react";
import { Search, Menu, X, ChevronDown, User } from "lucide-react";
import { categories } from "@/lib/utils/categories";

interface HeaderProps {
  isHomepage?: boolean;
}

export function Header({ isHomepage = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [topicsOpen, setTopicsOpen] = useState(false);

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
        {/* Utility Bar - Clean & Minimalist */}
        <div className="border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16 text-sm">
              {/* Left Tools */}
              <div className="flex items-center gap-6 ml-4">
                <Link 
                  href="/topics" 
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
                >
                  <span className="font-serif text-sm">Browse Topics</span>
                  <ChevronDown className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
                
                <button 
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="flex items-center gap-2 p-3 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
                  aria-label="Search Site"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
              
              {/* Center Logo + Tagline */}
              <Link 
                href="/legislation-summary" 
                className="flex flex-col items-center hover:opacity-80 transition-opacity group"
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
              
              {/* Right Tools */}
              <div className="flex items-center gap-4 mr-4">
                <Link 
                  href="#sign-in" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Sign In
                </Link>
                
                <Link 
                  href="#newsletter" 
                  className="border border-gray-900 text-gray-900 hover:border-gray-700 hover:text-gray-800 px-4 py-2 text-sm font-medium transition-colors rounded-md"
                >
                  Subscribe
                </Link>
                
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden flex items-center gap-2 p-3 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
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
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
            <div className="container mx-auto px-6 py-6">
              <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="search"
                  placeholder="Search legislation, topics, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white text-gray-900 pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  autoFocus
                />
              </form>
            </div>
          </div>
        )}

        {/* Main Navigation - Authority Bar */}
        <nav className="bg-white border-t border-b border-gray-300" role="navigation" aria-label="Main topics">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between py-4">
              {/* Left: Legal Pillars */}
              <div className="hidden lg:flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-serif text-gray-500 tracking-widest uppercase">TECHNOLOGY</span>
                  <div className="w-px h-px bg-gray-400 my-0"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-serif text-gray-500 tracking-widest uppercase">NATIONAL SECURITY</span>
                  <div className="w-px h-px bg-gray-400 my-0"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-serif text-gray-500 tracking-widest uppercase">HEALTHCARE</span>
                  <div className="w-px h-px bg-gray-400 my-0"></div>
                </div>
              </div>
              
              {/* Center: Logo */}
              <Link 
                href="/legislation-summary" 
                className="flex flex-col items-center hover:opacity-80 transition-opacity group"
                aria-label="The Daily Law - Home"
              >
                <Logo className="text-3xl font-serif font-black tracking-tight m-0 leading-tight">
                  THE DAILY LAW
                </Logo>
              </Link>
              
              {/* Right: Site Features */}
              <div className="hidden lg:flex items-center gap-8">
                <Link 
                  href="/topics/congress" 
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  <span className="text-xs font-serif text-gray-500 tracking-widest uppercase">CONGRESS</span>
                  <div className="w-px h-px bg-gray-400 my-0"></div>
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-serif text-gray-500 tracking-widest uppercase">OPINION</span>
                  <div className="w-px h-px bg-gray-400 my-0"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-serif text-gray-500 tracking-widest uppercase">REPORTS</span>
                  <div className="w-px h-px bg-gray-400 my-0"></div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="lg:hidden bg-white border-t border-gray-300" role="navigation" aria-label="Mobile topics">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between py-4">
              <Link 
                href="/legislation-summary" 
                className="flex flex-col items-center hover:opacity-80 transition-opacity"
                aria-label="The Daily Law - Home"
              >
                <div className="text-2xl font-serif font-black tracking-tight leading-tight">
                  THE DAILY LAW
                </div>
                <div className="w-px h-px bg-gray-300 my-2"></div>
                <p className="text-xs font-serif text-gray-500 tracking-widest uppercase leading-relaxed">
                  E S T . 2 0 2 6 | L E G A L A N A L Y S I S
                </p>
              </Link>
              
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-3 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
