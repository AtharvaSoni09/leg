-- Add sponsors column to legislation table
ALTER TABLE legislation 
ADD COLUMN sponsors JSONB;