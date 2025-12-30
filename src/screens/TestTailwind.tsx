import { View, Text } from "react-native";

export default function TestTailwind() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-white text-4xl font-bold">
        TAILWIND IS WORKING
      </Text>
    </View>
  );
}
