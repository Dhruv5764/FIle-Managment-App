import { supabase } from "../lib/supabase";

export async function uploadFile(file: any) {
  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;

  const response = await fetch(file.uri);
  const arrayBuffer = await response.arrayBuffer();

  const { error } = await supabase.storage
    .from("upload")
    .upload(fileName, arrayBuffer, {
      contentType: file.mimeType,
    });
    console.log("err",error);
    

  if (error) throw error;

  const { data } = supabase.storage.from("upload").getPublicUrl(fileName);
  return data.publicUrl;
}
