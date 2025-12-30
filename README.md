📁 File Upload & Management App

A production-style mobile application built using Expo, Bun, NativeWind, and Supabase Storage that allows users to upload, preview, list, and delete image and PDF files.

✨ Features

• Select and validate image/PDF files
• Max file size enforcement (5 MB)
• Upload to Supabase Storage
• Preview images and open PDFs
• List previously uploaded files
• Swipe to delete uploaded files
• Pull-to-refresh
• Toast notifications

🧰 Tech Stack
Tech	Purpose
Expo	Mobile Framework
Bun	Package Manager
NativeWind	Tailwind Styling
Supabase	Storage Backend
Biome	Linting & Formatting
Gesture Handler	Swipe UX
📂 Folder Structure
src/
  components/
  services/
  lib/
  screens/

⚙️ Setup
bun install
bunx expo start

🔐 Environment Variables

Create .env:

EXPO_PUBLIC_SUPABASE_URL=your_project_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_anon_public_key

🗂 Storage Rules
Allowed Types	Max Size
PNG, JPG, JPEG, PDF	5 MB
👨‍💻 Author

Dhruv Patel
React Native Developer