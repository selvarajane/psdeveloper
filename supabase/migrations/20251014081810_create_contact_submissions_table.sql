/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Client's name
      - `email` (text) - Client's email address
      - `mobile` (text) - Client's mobile number
      - `message` (text) - Client's message content
      - `created_at` (timestamptz) - Timestamp of submission
      - `status` (text) - Status of the submission (default: 'new')

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for public to insert their contact details
    - Add policy for authenticated users to read submissions (for admin purposes)

  3. Notes
    - This table stores all contact form submissions from the website
    - Public users can only insert data, not read it
    - Email notifications will be handled by an Edge Function
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  mobile text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit contact forms
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can read submissions (for admin dashboard)
CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);