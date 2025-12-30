export function validateFile(file: any) {
    if (!file) {
      return { valid: false, message: "No file selected." };
    }
  
    const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];
    const maxSize = 5 * 1024 * 1024;
  
    if (!allowedTypes.includes(file.mimeType) || file.size > maxSize) {
      return { valid: false, message: "Only PNG/JPG/PDF under 5 MB allowed." };
    }
  
    return { valid: true };
  }
  