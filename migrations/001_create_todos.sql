-- Run this in your Supabase SQL editor to set up the todos table

CREATE TABLE IF NOT EXISTS todos (
  id          SERIAL PRIMARY KEY,
  title       VARCHAR(255) NOT NULL,
  description TEXT,
  completed   BOOLEAN NOT NULL DEFAULT false,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Optional: seed some sample data
INSERT INTO todos (title, description) VALUES
  ('Buy groceries', 'Milk, eggs, bread'),
  ('Read a book', 'Finish "Clean Code"'),
  ('Go for a run', '5km morning run');
