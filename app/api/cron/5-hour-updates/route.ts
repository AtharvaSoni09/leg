import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    try {
        console.log("5-HOUR BILL UPDATE: Starting scheduled check");

        // Call the bill update system
        const updateResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/cron/bill-updates`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.CRON_SECRET || 'test'}`
            }
        });

        if (!updateResponse.ok) {
            const errorText = await updateResponse.text();
            console.error("5-HOUR BILL UPDATE: Failed to trigger updates:", errorText);
            return NextResponse.json({ error: 'Update check failed' }, { status: 500 });
        }

        const result = await updateResponse.json();
        console.log("5-HOUR BILL UPDATE: Results:", result);

        return NextResponse.json({ 
            message: '5-hour bill update check completed',
            timestamp: new Date().toISOString(),
            results: result
        });

    } catch (error) {
        console.error("5-HOUR BILL UPDATE: Unexpected error:", error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
