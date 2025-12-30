import { View, Text, Image, Pressable } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import { deleteFile } from "../services/deleteFile";
import { supabase } from "../lib/supabase";
import Toast from "react-native-toast-message";

export default function SwipeableFileItem({ file, onDeleted }: any) {
  const { data } = supabase.storage.from("upload").getPublicUrl(file.name);
  const url = data.publicUrl;
  const isImage = file.name.match(/\.(jpg|jpeg|png)$/);

  const renderRight = () => (
    <Pressable
      onPress={async () => {
        await deleteFile(file.name);
        Toast.show({
          type: "success",
          text1: "Deleted",
          text2: "File removed",
        });
        onDeleted(file.name);
      }}
      className="bg-red-500 w-24 rounded-xl items-center justify-center"
    >
      <Text className="text-white font-bold">Delete</Text>
    </Pressable>
  );

  return (
    <Swipeable renderRightActions={renderRight}>
      <Pressable
        onPress={() => WebBrowser.openBrowserAsync(url)}
        className="flex-row items-center bg-slate-50 rounded-xl p-3"
      >
        {isImage ? (
          <Image source={{ uri: url }} className="w-12 h-12 rounded-lg mr-3" />
        ) : (
          <View className="w-12 h-12 bg-red-100 rounded-lg mr-3 items-center justify-center">
            <Text className="text-red-600 font-bold">PDF</Text>
          </View>
        )}
        <Text className="flex-1 font-medium">{file.name}</Text>
      </Pressable>
    </Swipeable>
  );
}
