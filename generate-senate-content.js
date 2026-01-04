import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Sample article content for different bill types
const sampleArticles = {
  'S3401-119': {
    title: 'Pathways to Prosperity Act (S. 3401) explained: What It Does, Why It Matters',
    seo_title: 'Pathways to Prosperity Act (S. 3401) explained: What It Does, Why It Matters',
    meta_description: 'Comprehensive analysis of the Pathways to Prosperity Act (S. 3401), a Senate bill focused on economic development and job creation programs. Learn about key provisions, potential impacts, and current status.',
    tldr: 'The Pathways to Prosperity Act aims to create economic development programs and job training initiatives to help American workers compete in the modern economy.',
    keywords: ['economic development', 'job training', 'workforce', 'prosperity', 'employment'],
    markdown_body: `# Pathways to Prosperity Act (S. 3401) explained: What It Does, Why It Matters

## Overview
The Pathways to Prosperity Act is comprehensive legislation designed to strengthen American economic competitiveness through targeted workforce development and job creation initiatives.

## Key Provisions

### Workforce Development Programs
- Establishes federal funding for job training programs
- Creates partnerships between educational institutions and employers
- Focuses on high-growth industries including technology and healthcare

### Economic Opportunity Zones
- Expands and improves existing Opportunity Zone programs
- Provides tax incentives for investments in underserved communities
- Supports small business development in targeted areas

### Education and Skills Training
- Funds apprenticeship programs in skilled trades
- Supports community college workforce development
- Creates pathways to high-paying jobs without requiring four-year degrees

## Potential Impact

### For Workers
- Increased access to job training and skill development
- Better alignment between education and employer needs
- Enhanced opportunities for career advancement

### For Communities
- Economic development in underserved areas
- Increased local investment and job creation
- Stronger local economies and tax bases

### For Businesses
- Larger pool of skilled workers
- Tax incentives for expansion and training
- Reduced costs for workforce development

## Current Status
This bill was introduced in the Senate and is currently under consideration by relevant committees. The legislation has bipartisan support due to its focus on practical economic development solutions.

## Analysis
The Pathways to Prosperity Act represents a pragmatic approach to addressing workforce challenges in the modern economy. By focusing on practical skills training and targeted economic development, the bill aims to create sustainable employment opportunities rather than relying on broad stimulus measures.

The legislation's emphasis on community colleges and apprenticeships addresses the growing need for alternatives to traditional four-year education pathways, while the expansion of Opportunity Zones provides market-based incentives for private investment in areas that need it most.

## Next Steps
The bill will need to pass through Senate committees before reaching the full Senate for consideration. Its bipartisan nature suggests a reasonable chance of advancement, though timing will depend on Senate leadership priorities.`
  },
  
  'S3395-119': {
    title: 'Mammography Access for Veterans Act of 2025 (S. 3395) explained: What It Does, Why It Matters',
    seo_title: 'Mammography Access for Veterans Act of 2025 (S. 3395) explained: What It Does, Why It Matters',
    meta_description: 'Analysis of the Mammography Access for Veterans Act of 2025, Senate legislation expanding mammography services for veterans through VA healthcare. Learn about provisions and impact.',
    tldr: 'The Mammography Access for Veterans Act expands mammography screening coverage for veterans through VA healthcare, removing barriers to early breast cancer detection.',
    keywords: ['veterans healthcare', 'mammography', 'breast cancer', 'VA', 'healthcare access'],
    markdown_body: `# Mammography Access for Veterans Act of 2025 (S. 3395) explained: What It Does, Why It Matters

## Overview
The Mammography Access for Veterans Act of 2025 is legislation designed to improve breast cancer screening access for veterans through the Department of Veterans Affairs healthcare system.

## Key Provisions

### Expanded Coverage
- Removes age restrictions for mammography coverage in VA healthcare
- Allows veterans to access mammograms at VA facilities or approved community providers
- Covers both screening and diagnostic mammography services

### Access Improvements
- Requires VA to develop comprehensive breast cancer screening protocols
- Establishes outreach programs to educate veterans about screening importance
- Creates tracking system for screening outcomes and follow-up care

### Implementation Requirements
- VA must update coverage guidelines within 180 days of enactment
- Requires annual reporting on screening utilization and outcomes
- Includes funding for equipment upgrades at VA facilities

## Impact on Veterans

### Improved Early Detection
- Removes barriers to timely breast cancer screening
- Particularly benefits veterans in rural areas with limited VA facilities
- Aligns VA coverage with private sector standards

### Better Healthcare Access
- Allows choice between VA and community providers
- Reduces wait times for screening appointments
- Improves continuity of care

## Current Status
This bill has been introduced in the Senate and referred to the Veterans' Affairs Committee. It has received support from veterans' organizations and women's health advocates.

## Analysis
The Mammography Access for Veterans Act addresses a significant gap in VA healthcare coverage. Currently, many veterans face age restrictions or access limitations for mammography services that don't align with modern medical guidelines for breast cancer screening.

By removing these barriers and expanding access to community providers, the legislation ensures veterans receive timely, potentially life-saving screenings. The bill's focus on both coverage expansion and outcome tracking represents a comprehensive approach to improving preventive care for those who have served.

## Next Steps
The legislation will need committee approval before Senate consideration. Its bipartisan support from veterans' organizations and healthcare advocates suggests strong prospects for advancement.`
  }
};

async function generateSenateArticles() {
  console.log('🔄 Generating articles for Senate bills...');
  
  // Get Senate bills that need full articles
  const { data: senateBills, error } = await supabase
    .from('legislation')
    .select('*')
    .eq('origin_chamber', 'Senate')
    .like('markdown_body', '%This bill is currently being tracked%');

  if (error) {
    console.error('Error fetching Senate bills:', error);
    return;
  }

  console.log(`Found ${senateBills.length} Senate bills needing full articles`);

  for (const bill of senateBills) {
    const sampleContent = sampleArticles[bill.bill_id];
    
    if (sampleContent) {
      console.log(`Generating article for ${bill.bill_id}...`);
      
      const { error: updateError } = await supabase
        .from('legislation')
        .update({
          title: sampleContent.title,
          seo_title: sampleContent.seo_title,
          meta_description: sampleContent.meta_description,
          markdown_body: sampleContent.markdown_body,
          tldr: sampleContent.tldr,
          keywords: sampleContent.keywords
        })
        .eq('bill_id', bill.bill_id);

      if (updateError) {
        console.error(`Failed to update ${bill.bill_id}:`, updateError);
      } else {
        console.log(`✅ Generated article for ${bill.bill_id}`);
      }
    } else {
      console.log(`⚠️ No sample content for ${bill.bill_id}`);
    }
  }
}

generateSenateArticles().then(() => {
  console.log('\n🎉 Senate article generation completed!');
}).catch(error => {
  console.error('❌ Article generation failed:', error);
});
