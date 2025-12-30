import * as DocumentPicker from "expo-document-picker";
import { Pressable, Text, Alert } from "react-native";
import { validateFile } from "../services/validateFile";
import { uploadFile } from "@/services/uploadFile";
import Toast from "react-native-toast-message";
import { fileSignal } from "@/lib/fileEvents";

export default function FilePickerButton() {
  const pickFile = async () => {
    console.log("awda");
    
    const result = await DocumentPicker.getDocumentAsync({
      type: ["image/*", "application/pdf"],
      multiple: false,
      copyToCacheDirectory: true,
    });

    if (result.canceled) {
      Alert.alert("No file selected.");
      return;
    }

    const file = result.assets[0];
    const validation = validateFile(file);

    if (!validation.valid && validation.message) {
      Alert.alert(validation.message);
      return;
    }
    try {
      const url = await uploadFile(file);
      Toast.show({
        type: "success",
        text1: "Uploaded",
        text2: "File uploaded successfully",
      });    
      fileSignal.emit();

        console.log("PUBLIC URL:", url);
    } catch (err) {
      Alert.alert("Upload failed");
    }
  };

  return (
    <Pressable onPress={pickFile} className="h-14 rounded-2xl bg-indigo-600 items-center justify-center">
      <Text className="text-white text-lg font-semibold">Select File</Text>
    </Pressable>
  );
}
