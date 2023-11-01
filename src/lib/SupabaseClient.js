import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://bhdnzbfcggoclapvyrca.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoZG56YmZjZ2dvY2xhcHZ5cmNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg0OTg2MDAsImV4cCI6MjAxNDA3NDYwMH0.ZSeWjRYJdEi4YGmxIjlk3A0CE5MuVSaS0A60YJEFXT8"
);
