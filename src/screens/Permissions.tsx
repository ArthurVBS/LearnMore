import { Text, View } from 'react-native';
import { getAllUsersPermission } from '../services/PermissionsService';
import Table from '../components/Table';

export default function PermissionScreen() {
  const users = getAllUsersPermission();
  const headers = ['Username', 'Permission'];

  return (
    <View className="flex-1 bg-indigo-900">
      <View className="w-full justify-center items-center bg-white pt-4 px-2 pb-5">
        <Text className="text-indigo-900 text-2xl tracking-wide mt-11 font-bold">
          Permissions
        </Text>
      </View>
      <Table headers={headers} data={users} />
    </View>
  );
}
