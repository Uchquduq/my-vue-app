import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gouvigugfjgtkzwhajzh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvdXZpZ3VnZmpndGt6d2hhanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwMjg2OTIsImV4cCI6MjA0MjYwNDY5Mn0.OIJqj_lu9KfPvhA8IRptfp7u_aQWtggKFXjxaFD5LUk'
export const supabaseClient = createClient(supabaseUrl, supabaseKey); 