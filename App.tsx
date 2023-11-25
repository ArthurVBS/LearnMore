import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-lg px-4 text-center font-bold">Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
