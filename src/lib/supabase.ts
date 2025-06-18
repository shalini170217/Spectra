import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ezrresrjcfzvthrkjsbz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6cnJlc3JqY2Z6dnRocmtqc2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzM0OTUsImV4cCI6MjA2NTgwOTQ5NX0.nTEVqZO9HL7Pb18HriQWkncWj4n7l2zUSSbxZnVQJiI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})