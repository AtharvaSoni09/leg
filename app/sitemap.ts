import { supabasePublic } from '@/lib/supabase';
import { MetadataRoute } from 'next';
import { revalidatePath } from 'next/cache';
import { generateSlug } from '@/lib/utils/slugs';

// Enable ISR for sitemap (revalidate every 5 minutes)
export const revalidate = 300;

// Define TypeScript type for a row in your legislation table
type Bill = {
    bill_id: string;
    url_slug: string;
    created_at: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Fetch all legislation entries from Supabase
    const { data: bills } = await supabasePublic
        .from('legislation')
        .select('bill_id, url_slug, created_at');

    const staticUrls: MetadataRoute.Sitemap = [
        {
            url: 'https://thedailylaw.org',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://thedailylaw.org/legislation-summary',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://thedailylaw.org/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://thedailylaw.org/about/editorial-process',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://thedailylaw.org/about/sources',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://thedailylaw.org/about/pipeline',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://thedailylaw.org/about/disclaimer',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://thedailylaw.org/newsletter',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://thedailylaw.org/topics',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://thedailylaw.org/topics/technology-law',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://thedailylaw.org/topics/national-security',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://thedailylaw.org/topics/healthcare',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://thedailylaw.org/topics/economy',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://thedailylaw.org/topics/energy',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://thedailylaw.org/topics/immigration',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://thedailylaw.org/topics/education',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://thedailylaw.org/topics/infrastructure',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://thedailylaw.org/search',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    // Map Supabase bills to sitemap URLs using standardized slugs
    const legislationUrls =
        (bills as Bill[])?.map((bill) => ({
            url: `https://thedailylaw.org/legislation-summary/${bill.url_slug}`,
            lastModified: new Date(bill.created_at),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })) ?? [];

    // Return full sitemap
    return [
        {
            url: 'https://thedailylaw.org', // Homepage
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://thedailylaw.org/legislation-summary', // Base legislation page
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...staticUrls,
        ...legislationUrls,
    ];
}
