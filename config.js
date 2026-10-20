// Supabase connection for this site. The publishable key is public by design;
// the data is protected by the row level security policies in supabase/setup.sql.
// Never put the secret / service_role key here.
window.MOKAD_CONFIG = {
  supabaseUrl: 'https://pwyiazixwgcsgegrlwlm.supabase.co',
  supabaseAnonKey: 'sb_publishable_mVtFeY7yB63pHv8WqGV4Eg_cwDv_EY2',
  // Cloudflare Turnstile "Site Key" (public). Empty = no bot check on the sign-in screen.
  turnstileSiteKey: ''
};
