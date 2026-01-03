-- Add SEO keywords and schema type columns to legislation table
ALTER TABLE legislation 
ADD COLUMN keywords JSONB,
ADD COLUMN schema_type TEXT;
