import { Text, TouchableOpacity, View } from 'react-native';
import { usePermission } from '../context/PermissionContext';

export default function Home() {
  const { permission, setPermission } = usePermission();

  const logout = () => {
    setPermission({ username: '', password: '', permission: 0 });
  };

  return (
    <View className="flex-1 justify-center items-center bg-indigo-900 px-4">
      <TouchableOpacity
        className="justify-center items-center bg-indigo-200 px-4 py-2 mt-10"
        onPress={() => logout()}
      >
        <Text className="text-black font-bold text-xl">Logout</Text>
      </TouchableOpacity>
      <Text className="text-white text-3xl">{permission.username}</Text>
      <Text className="text-white text-3xl">{permission.password}</Text>
      <Text className="text-white text-3xl">{permission.permission}</Text>
      <Text className="text-white text-3xl">Home</Text>
    </View>
  );
}
