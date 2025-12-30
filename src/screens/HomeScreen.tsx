import {  ScrollView, Text, View } from "react-native";
import FilePickerButton from "../components/FilePickerButton";
import FilePreview from "../components/FilePreview";
import UploadedFileList from "../components/UploadedFileList";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {/* Header */}
        <View className="px-6 pt-10 pb-6">
          <Text className="text-3xl font-bold text-slate-900">File Manager</Text>
          <Text className="mt-1 text-slate-500">
            Upload and manage your documents
          </Text>
        </View>

        {/* Upload Card */}
        <View className="px-6">
          <View className="rounded-3xl bg-white p-5 shadow-lg">
            <FilePickerButton />
            
          </View>
        </View>

        {/* Uploaded Files */}
        <View className="px-6 mt-10">
          <Text className="mb-4 text-lg font-semibold text-slate-900">
            Your Uploaded Files
          </Text>
          <UploadedFileList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
