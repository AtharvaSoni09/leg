// Script to fetch recent Senate bills and add them to the database
import { createClient } from '@supabase/supabase-js';
import { fetchRecentBills } from './lib/agents/congress.js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing required environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchSenateBills() {
  try {
    console.log('🔄 Fetching recent Senate bills...\n');

    // Fetch recent bills (will include both House and Senate)
    const bills = await fetchRecentBills(200, 0); // Increased to 200 to get more Senate bills
    
    // Filter for Senate bills only
    const senateBills = bills.filter(bill => bill.originChamber === 'Senate');
    
    console.log(`Found ${senateBills.length} Senate bills:`);
    
    for (const bill of senateBills) {
      console.log(`\n--- ${bill.bill_id} ---`);
      console.log(`Title: ${bill.title}`);
      console.log(`Chamber: ${bill.originChamber}`);
      console.log(`Update Date: ${bill.updateDate}`);
      
      // Check if bill already exists
      const { data: existingBill } = await supabase
        .from('legislation')
        .select('bill_id')
        .eq('bill_id', bill.bill_id)
        .single();
      
      if (existingBill) {
        console.log('✅ Bill already exists in database');
        continue;
      }
      
      // Insert new Senate bill with basic data
      const urlSlug = bill.title.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .substring(0, 100);
      
      const { error: insertError } = await supabase
        .from('legislation')
        .insert({
          bill_id: bill.bill_id,
          title: bill.title,
          url_slug: urlSlug,
          markdown_body: `# ${bill.title}\n\n**Senate Bill Analysis**\n\nThis bill is currently being tracked by The Daily Law. Full analysis will be available soon.\n\n**Bill Details:**\n- Bill ID: ${bill.bill_id}\n- Chamber: ${bill.originChamber}\n- Congress: ${bill.congress}\n- Latest Action: ${bill.updateDate}\n\n**Congress.gov URL:** ${bill.congressGovUrl}`,
          tldr: `Senate bill ${bill.bill_id} titled "${bill.title.substring(0, 100)}..." is currently under consideration in the ${bill.congress}th Congress.`,
          seo_title: `${bill.title} (${bill.bill_id}) - Senate Bill | The Daily Law`,
          meta_description: `Track ${bill.title}, a Senate bill in the ${bill.congress}th Congress. Get updates on legislative progress and analysis.`,
          origin_chamber: bill.originChamber,
          type: bill.type,
          congress: bill.congress,
          update_date: bill.updateDate,
          congress_gov_url: bill.congressGovUrl,
          sponsor_data: {
            sponsors: bill.sponsors || [],
            cosponsors: bill.cosponsors || []
          },
          keywords: ['senate', 'legislation', bill.type.toLowerCase(), 'congress'],
          schema_type: 'Legislation'
        });
      
      if (insertError) {
        console.error(`❌ Failed to insert ${bill.bill_id}:`, insertError.message);
      } else {
        console.log('✅ Successfully added to database');
      }
    }
    
    console.log('\n🎉 Senate bills fetch completed!');
    
  } catch (err) {
    console.error('❌ Error fetching Senate bills:', err);
  }
}

fetchSenateBills();
