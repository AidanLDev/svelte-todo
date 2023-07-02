import { createClient } from "@supabase/auth-helpers-sveltekit";
import { PUBLIC_SUPERBASE_URL, PUBLIC_SUPABASE_ANON_KEY } from "$env/static/public";


export const supabaseClient = createClient(
  PUBLIC_SUPERBASE_URL,
  PUBLIC_SUPABASE_ANON_KEY
)