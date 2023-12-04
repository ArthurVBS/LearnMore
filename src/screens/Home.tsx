import { Text, TouchableOpacity, View } from 'react-native';
import { usePermission } from '../context/PermissionContext';
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import PERMISSIONS from '../constants/PermissionsConstant';

export default function Home() {
  const { permission, logout } = usePermission();

  const getPermissionName = () => {
    if (permission.permission === PERMISSIONS.ADMIN) {
      return 'Admin';
    } else if (permission.permission === PERMISSIONS.TEACHER) {
      return 'Teacher';
    } else {
      return 'Student';
    }
  };

  return (
    <View className="flex-1 bg-indigo-900">
      <View className="items-stretch content-stretch justify-between w-full flex-row bg-white py-4 px-2">
        <Text className="text-indigo-900 text-2xl tracking-wide mt-11 font-bold">
          Hello, {permission.username}
        </Text>
        <TouchableOpacity
          className="justify-center items-center px-4 py-2 mt-10 rounded-lg"
          onPress={() => logout()}
        >
          <Feather name="log-out" color={colors.indigo[900]} size={24} />
        </TouchableOpacity>
      </View>
      <View className="h-full justify-center align-center px-2 pb-10">
        <Text className="text-white text-2xl text-center">
          You are a {getPermissionName()} user on Learn More App!
        </Text>
      </View>
    </View>
  );
}
