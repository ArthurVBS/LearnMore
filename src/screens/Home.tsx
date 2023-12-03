import { Text, TouchableOpacity, View } from 'react-native';

type Props = {
  setHasAccess: (hasAccess: boolean) => void;
};

export default function Home({ setHasAccess }: Props) {
  return (
    <View className="flex-1 justify-center items-center bg-indigo-900 px-4">
      <TouchableOpacity
        className="justify-center items-center bg-indigo-200 px-4 py-2 mt-10"
        onPress={() => setHasAccess(false)}
      >
        <Text className="text-black font-bold text-xl">Logout</Text>
      </TouchableOpacity>
      <Text className="text-white text-3xl">Home</Text>
    </View>
  );
}
