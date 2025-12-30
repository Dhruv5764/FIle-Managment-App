import { supabase } from "../lib/supabase";

export async function listFiles() {
  const { data, error } = await supabase.storage.from("upload").list("", {
    limit: 100,
    sortBy: { column: "created_at", order: "desc" },
  });

  if (error) throw error;

  return data;
}
