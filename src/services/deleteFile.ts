import { supabase } from "../lib/supabase";

export async function deleteFile(fileName: string) {
  const { error } = await supabase.storage.from("upload").remove([fileName]);
  if (error) throw error;
}
