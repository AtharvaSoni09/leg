-- Add bill status and cosponsors columns to legislation table
ALTER TABLE legislation 
ADD COLUMN introduced_date TIMESTAMP,
ADD COLUMN latest_action JSONB,
ADD COLUMN cosponsors JSONB,
ADD COLUMN cosponsors_funds JSONB;
