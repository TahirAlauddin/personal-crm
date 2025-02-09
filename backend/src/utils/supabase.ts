import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_PROJECT_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or key.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
