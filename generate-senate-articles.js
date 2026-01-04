import { createClient } from '@supabase/supabase-js';
import { generateArticle } from './lib/agents/openai.js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function generateSenateArticles() {
  const { data: senateBills, error } = await supabase
    .from('legislation')
    .select('*')
    .eq('origin_chamber', 'Senate')
    .is('markdown_body', 'like', '%This bill is currently being tracked%');

  if (error) {
    console.error('Error fetching Senate bills:', error);
    return;
  }

  console.log(`Found ${senateBills.length} Senate bills needing full articles`);

  for (const bill of senateBills.slice(0, 5)) {
    console.log(`Generating article for ${bill.bill_id}...`);
    
    try {
      const article = await generateArticle(bill);
      
      const { error: updateError } = await supabase
        .from('legislation')
        .update({
          title: article.title,
          seo_title: article.seo_title,
          meta_description: article.meta_description,
          markdown_body: article.markdown_body,
          tldr: article.tldr,
          keywords: article.keywords
        })
        .eq('bill_id', bill.bill_id);

      if (updateError) {
        console.error(`Failed to update ${bill.bill_id}:`, updateError);
      } else {
        console.log(`✅ Generated article for ${bill.bill_id}`);
      }
    } catch (err) {
      console.error(`Error generating article for ${bill.bill_id}:`, err);
    }
  }
}

generateSenateArticles();
