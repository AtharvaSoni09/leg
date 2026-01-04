import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function debugSearch() {
  console.log('🔍 Debugging search issue...');
  
  const { data: bills, error } = await supabase
    .from('legislation')
    .select('bill_id, title, keywords, tldr')
    .limit(10);
  
  if (error) {
    console.error('❌ Database error:', error);
    return;
  }
  
  console.log(`📊 Found ${bills?.length || 0} bills in database`);
  
  if (bills && bills.length > 0) {
    console.log('\n📋 Sample bills:');
    bills.forEach((bill, index) => {
      console.log(`\n${index + 1}. ${bill.bill_id}`);
      console.log(`   Title: ${bill.title}`);
      console.log(`   Keywords: ${JSON.stringify(bill.keywords || [])}`);
      console.log(`   TLDR: ${bill.tldr?.substring(0, 100)}...`);
    });
    
    // Test search for "tech"
    console.log('\n🔍 Testing search for "tech":');
    const searchResults = bills.filter(bill => {
      const searchText = [
        bill.title,
        bill.tldr,
        ...(bill.keywords || [])
      ].join(' ').toLowerCase();
      
      return searchText.includes('tech');
    });
    
    console.log(`Found ${searchResults.length} bills with "tech":`);
    searchResults.forEach(bill => {
      console.log(`- ${bill.bill_id}: ${bill.title}`);
    });
  } else {
    console.log('❌ No bills found in database');
  }
}

debugSearch().catch(console.error);
