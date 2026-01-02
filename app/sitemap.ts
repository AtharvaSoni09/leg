import { supabasePublic } from '@/lib/supabase';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const { data: bills } = await supabasePublic
        .from('legislation')
        .select('slug, created_at');

    const legislationUrls =
        bills?.map((bill) => ({
            url: `https://thedailylaw.org/legislation-summary/${bill.slug}`, // CHANGE .com -> .org
            lastModified: new Date(bill.created_at),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })) ?? [];

    return [
        {
            url: 'https://thedailylaw.org', // Add homepage
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://thedailylaw.org/legislation-summary', // CHANGE .com -> .org
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...legislationUrls,
    ];
}
