import "./global.css";
import HomeScreen from "./src/screens/HomeScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HomeScreen />
      <Toast />
    </GestureHandlerRootView>
  );
}
