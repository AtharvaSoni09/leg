import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function findTechBills() {
  console.log('🔍 Looking for technology-related bills...');
  
  const { data: bills, error } = await supabase
    .from('legislation')
    .select('bill_id, title, keywords, tldr')
    .limit(50);
  
  if (error) {
    console.error('❌ Database error:', error);
    return;
  }
  
  const techKeywords = [
    'technology', 'tech', 'artificial intelligence', 'ai', 'cybersecurity', 
    'cyber security', 'software', 'digital', 'internet', 'online', 
    'data', 'computer', 'algorithm', 'platform', 'social media', 
    'big tech', 'computing', 'electronic', 'automation'
  ];
  
  console.log(`📊 Checking ${bills?.length || 0} bills for tech keywords...`);
  
  const techBills = [];
  if (bills) {
    bills.forEach(bill => {
      const searchText = [
        bill.title,
        bill.tldr,
        ...(bill.keywords || [])
      ].join(' ').toLowerCase();
      
      const matchedKeywords = techKeywords.filter(keyword => 
        searchText.includes(keyword.toLowerCase())
      );
      
      if (matchedKeywords.length > 0) {
        techBills.push({
          ...bill,
          matchedKeywords
        });
      }
    });
  }
  
  console.log(`\n🎯 Found ${techBills.length} technology-related bills:`);
  techBills.forEach((bill, index) => {
    console.log(`\n${index + 1}. ${bill.bill_id}`);
    console.log(`   Title: ${bill.title}`);
    console.log(`   Matched keywords: ${bill.matchedKeywords.join(', ')}`);
    console.log(`   TLDR: ${bill.tldr?.substring(0, 150)}...`);
  });
  
  if (techBills.length === 0) {
    console.log('\n❌ No technology bills found!');
    console.log('💡 This might mean:');
    console.log('   1. No tech bills have been added to the database yet');
    console.log('   2. The bills that exist don\'t contain tech keywords');
    console.log('   3. We need to add some technology-related bills');
  }
}

findTechBills().catch(console.error);
