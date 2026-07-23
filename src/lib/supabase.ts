import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vvfpkigozbidwezhkjdb.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_CSJUwb164aK4D9uibPDalg_Cjho6JY-';

export const supabase = createClient(supabaseUrl, supabaseKey);
