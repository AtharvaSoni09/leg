
export interface SponsorFunding {
    total_raised: number;
    top_industries: {
        name: string;
        amount: number;
    }[];
}

const BASE_URL = 'https://api.open.fec.gov/v1';

export async function fetchSponsorFunds(sponsorName: string): Promise<SponsorFunding | null> {
    const apiKey = process.env.OPENFEC_API_KEY;
    if (!apiKey) return null;

    // Congress API names often look like "Smith, John [R-NY-2]" or "Hon. Smith, John"
    // We want "John Smith" or "Smith John" or just "Smith"
    let cleanName = sponsorName
        .replace(/^(rep\.|sen\.|congressman|congresswoman|hon\.)\s+/i, '')
        .replace(/\[.*\]$/, '') // Remove [R-NY-2]
        .trim();

    // If it's "Last, First", we can also try to reconstruct "First Last"
    const parts = cleanName.split(',').map(p => p.trim());
    if (parts.length >= 2) {
        const firstName = parts[1].split(' ')[0]; // Take first word after comma
        cleanName = `${firstName} ${parts[0]}`;
    } else if (parts.length === 1) {
        // If it's just one part, try it as-is
        cleanName = parts[0];
    }

    try {
        const searchUrl = `${BASE_URL}/candidates/search/?q=${encodeURIComponent(cleanName)}&api_key=${apiKey}&sort_null_only=false`;
        const searchRes = await fetch(searchUrl);
        const searchData = await searchRes.json();

        const candidate = searchData.results?.[0]; // Best guess
        if (!candidate) return null;

        const candidateId = candidate.candidate_id;

        // 2. Fetch candidate totals (historical data)
        const totalsUrl = `${BASE_URL}/candidate/${candidateId}/totals/?api_key=${apiKey}&sort=-cycle&per_page=10`;
        const totalsRes = await fetch(totalsUrl);
        const totalsData = await totalsRes.json();

        // Get the maximum receipts from all cycles
        let total = 0;
        if (totalsData.results && totalsData.results.length > 0) {
            total = Math.max(...totalsData.results.map((r: any) => r.receipts || 0));
        }

        return {
            total_raised: total,
            top_industries: []
        };

    } catch (e) {
        console.error("OpenFEC Error", e);
        return null;
    }
}
