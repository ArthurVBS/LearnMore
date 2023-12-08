import { FlatList, Text, View } from 'react-native';
import { User } from '../types/user';
import PERMISSIONS from '../constants/PermissionsConstant';

type Props = {
  headers: string[];
  data: User[];
};

export default function Table({ headers, data }: Props) {
  const getPermissionName = (permission: number) => {
    if (permission === PERMISSIONS.ADMIN) {
      return 'Admin';
    } else if (permission === PERMISSIONS.TEACHER) {
      return 'Teacher';
    } else {
      return 'Student';
    }
  };

  return (
    <View className="w-full">
      <View className="w-full flex-row justify-around border-b-2 border-white p-2 mb-2">
        <View className="flex-1 justify-center items-center p-2">
          <Text className="text-white text-xl">{headers[0]}</Text>
        </View>

        <View className="flex-1 justify-center items-center p-2 border-l-2 border-white">
          <Text className="text-white text-xl">{headers[1]}</Text>
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View className="w-full flex-row justify-around">
            <View className="flex-1 justify-center items-center p-2">
              <Text className="text-white text-lg">{item.username}</Text>
            </View>

            <View className="flex-1 justify-center items-center p-2 border-l-2 border-white">
              <Text className="text-white text-lg">
                {getPermissionName(item.permission)}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
