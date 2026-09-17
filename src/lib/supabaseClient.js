import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

const supabasePublishableKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// Check whether environment variables exist
if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    "Missing Supabase environment variables. " +
      "Please check your .env.local file."
  );
}

// Create Supabase client
export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);