import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://fzlwnfmapbyfwuzecruh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6bHduZm1hcGJ5Znd1emVjcnVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzNzM0MzMsImV4cCI6MjA4Njk0OTQzM30.0xKICRtFjGZG8yXWmeyfCaUm3Rl-uCxpK9hoZYLPK_s';

export const supabase = createClient(supabaseUrl, supabaseKey);