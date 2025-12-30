import { View, Text } from "react-native";

export default function FilePreview() {
  return (
    <View className="bg-white rounded-2xl p-4 shadow">
      <Text className="text-slate-400 text-center">
        No file selected yet
      </Text>
    </View>
  );
}
