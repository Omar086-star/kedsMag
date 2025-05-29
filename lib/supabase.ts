// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gxpdftfiwlyaboiucsti.supabase.co'           // ← ضع رابط مشروع Supabase الخاص بك
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4cGRmdGZpd2x5YWJvaXVjc3RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzNDUxNDksImV4cCI6MjA2MzkyMTE0OX0.XgBSAm9dVj3dYK4fT4P6tqXV9v_tIQWRK27Rab40nog'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)


