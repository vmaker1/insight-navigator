import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://infzsuesbpsjoaapxanj.supabase.co";
const supabaseKey = "sb_publishable_grlXaeUluc8L1kLS56Pzxw_uui5tTxF";

export const supabase = createClient(supabaseUrl, supabaseKey);