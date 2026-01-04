export interface Category {
  id: string;
  name: string;
  description: string;
  keywords: string[];
  color: string;
}

export const categories: Category[] = [
  {
    id: 'technology-law',
    name: 'Technology Law',
    description: 'AI, cybersecurity, social media, and digital policy',
    keywords: ['artificial intelligence', 'ai', 'cybersecurity', 'cyber security', 'social media', 'data privacy', 'online platforms', 'big tech', 'algorithm', 'software', 'computing', 'digital', 'internet', 'technology', 'tech'],
    color: 'blue'
  },
  {
    id: 'national-security',
    name: 'National Security',
    description: 'Defense, intelligence, homeland security, and foreign policy',
    keywords: ['defense', 'military', 'intelligence', 'terrorism', 'homeland security', 'pentagon', 'national defense', 'armed forces', 'defense authorization', 'military spending', 'foreign policy'],
    color: 'red'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Health policy, Medicare, Medicaid, and medical legislation',
    keywords: ['healthcare', 'health care', 'medicare', 'medicaid', 'hospital', 'pharmaceutical', 'fda', 'disease', 'treatment', 'medical', 'health insurance', 'public health'],
    color: 'green'
  },
  {
    id: 'economy',
    name: 'Economy',
    description: 'Taxes, finance, banking, and economic policy',
    keywords: ['tax', 'taxes', 'economy', 'financial', 'banking', 'finance', 'economic', 'budget', 'spending', 'debt', 'inflation', 'irs', 'tax code', 'economic growth'],
    color: 'amber'
  },
  {
    id: 'energy',
    name: 'Energy',
    description: 'Climate, environment, oil, gas, and renewable energy',
    keywords: ['energy', 'climate', 'environment', 'oil', 'gas', 'renewable', 'solar', 'wind', 'emissions', 'carbon', 'epa', 'environmental protection', 'clean energy'],
    color: 'emerald'
  },
  {
    id: 'immigration',
    name: 'Immigration',
    description: 'Border security, visas, asylum, and immigration policy',
    keywords: ['immigration', 'border', 'visa', 'asylum', 'citizenship', 'deportation', 'migrant', 'customs', 'border security', 'immigration reform'],
    color: 'purple'
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Schools, student loans, and education policy',
    keywords: ['education', 'school', 'student', 'student loans', 'college', 'university', 'loan', 'teacher', 'curriculum', 'higher education', 'student aid', 'pell grant'],
    color: 'indigo'
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    description: 'Transportation, broadband, and public works',
    keywords: ['infrastructure', 'transportation', 'road', 'bridge', 'broadband', 'highway', 'rail', 'airport', 'public works', 'transit', 'high-speed rail'],
    color: 'orange'
  }
];

export function categorizeBill(bill: any): Category[] {
  const searchText = [
    bill.title,
    bill.tldr,
    bill.meta_description,
    ...(bill.keywords || [])
  ].join(' ').toLowerCase();

  const matchedCategories: (Category & { matchCount: number })[] = [];

  for (const category of categories) {
    let matchCount = 0;
    
    // Count exact phrase matches first (higher weight)
    for (const keyword of category.keywords) {
      if (searchText.includes(keyword)) {
        // Give higher weight to exact phrase matches
        matchCount += keyword.split(' ').length > 1 ? 2 : 1;
      }
    }

    // Only add if we have meaningful matches
    if (matchCount >= 1) {
      matchedCategories.push({ ...category, matchCount });
    }
  }

  // Sort by match count and return top 2 categories
  return matchedCategories
    .sort((a, b) => b.matchCount - a.matchCount)
    .slice(0, 2)
    .map(({ matchCount, ...category }) => category);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find(cat => cat.id === id);
}
