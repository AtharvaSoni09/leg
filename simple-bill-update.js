import { createClient } from '@supabase/supabase-js';
import { fetchRecentBills } from './lib/agents/congress.js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function checkBillUpdates() {
  console.log('🔄 Checking for bill updates...');
  
  // Get all existing bills from database
  const { data: existingBills, error: fetchError } = await supabase
    .from('legislation')
    .select('bill_id, update_date, latest_action, title, origin_chamber');

  if (fetchError) {
    console.error('Error fetching existing bills:', fetchError);
    return;
  }

  console.log(`Checking ${existingBills.length} bills for updates...`);

  // Get fresh data from Congress API
  const freshBills = await fetchRecentBills(200, 0);
  
  let updateCount = 0;

  for (const existingBill of existingBills) {
    const freshBill = freshBills.find(b => b.bill_id === existingBill.bill_id);
    
    if (freshBill && freshBill.updateDate !== existingBill.update_date) {
      console.log(`📝 Update found for ${existingBill.bill_id}:`);
      console.log(`  Old: ${existingBill.update_date}`);
      console.log(`  New: ${freshBill.updateDate}`);
      
      // Check for status changes
      let statusChange = '';
      if (freshBill.latestAction?.text) {
        const oldAction = existingBill.latest_action?.text || '';
        if (oldAction !== freshBill.latestAction.text) {
          statusChange = `\nStatus Change: "${oldAction}" → "${freshBill.latestAction.text}"`;
        }
      }
      
      // Add update notice to the article
      const updateNotice = `
---
## 🚨 UPDATE NOTICE

**Last Updated:** ${new Date().toLocaleDateString()}

This bill has been updated since our original analysis. Here are the latest changes:

**Previous Update Date:** ${existingBill.update_date}
**Latest Update Date:** ${freshBill.updateDate}
${statusChange}

**Latest Action:** ${freshBill.latestAction?.text || 'No new action'}

*Our analysis reflects the most current information available as of the date above.*
      `.trim();

      // Update the bill with fresh data and notice
      const { error: updateError } = await supabase
        .from('legislation')
        .update({
          update_date: freshBill.updateDate,
          latest_action: freshBill.latestAction ? {
            text: freshBill.latestAction.text,
            actionDate: freshBill.updateDate
          } : existingBill.latest_action,
          markdown_body: existingBill.markdown_body + updateNotice,
          last_updated: new Date().toISOString()
        })
        .eq('bill_id', existingBill.bill_id);

      if (updateError) {
        console.error(`Failed to update ${existingBill.bill_id}:`, updateError);
      } else {
        console.log(`✅ Successfully updated ${existingBill.bill_id}`);
        updateCount++;
      }
    }
  }

  if (updateCount === 0) {
    console.log('✅ No updates found');
  } else {
    console.log(`🎉 Successfully updated ${updateCount} bills`);
  }
}

// Run the update check
checkBillUpdates().then(() => {
  console.log('\n🎉 Bill update check completed!');
}).catch(error => {
  console.error('❌ Update check failed:', error);
});
