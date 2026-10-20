-- Store contact and promotional email preferences with each inquiry.
ALTER TABLE public.inquiries
  ADD COLUMN IF NOT EXISTS phone_communication_consent boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS email_communication_consent boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS special_offers_consent boolean NOT NULL DEFAULT false;
