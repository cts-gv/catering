/*
# Create inquiries table for contact form submissions

1. New Tables
- `inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the person submitting the form
  - `email` (text, not null) — email address for confirmation email
  - `phone` (text, not null) — phone number
  - `event_type` (text, not null) — type of event (wedding, corporate, quinceanera, private_party, private_chef, other)
  - `event_date` (date) — proposed event date
  - `guests` (integer) — number of guests
  - `message` (text) — additional details from the customer
  - `quote_estimate` (numeric) — generated quote estimate shown to the user
  - `status` (text, default 'new') — inquiry status for tracking
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `inquiries`.
- Allow anon + authenticated INSERT so the public contact form can submit without signing in.
- Allow anon + authenticated SELECT so the site can display a success state.
- No UPDATE or DELETE from the public client.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  event_type text NOT NULL,
  event_date date,
  guests integer,
  message text,
  quote_estimate numeric,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries"
ON inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_inquiries" ON inquiries;
CREATE POLICY "anon_select_inquiries"
ON inquiries FOR SELECT
TO anon, authenticated
USING (true);
