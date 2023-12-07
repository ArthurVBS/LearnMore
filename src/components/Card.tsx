import { Course } from '../types/course';
import { Feather } from '@expo/vector-icons';
import { usePermission } from '../context/PermissionContext';
import { Text, View } from 'react-native';

type Props = {
  course: Course;
};

export default function Card({ course }: Props) {
  const { permission } = usePermission();

  const isSubscribed = () => {
    return course.studentsId.includes(permission.id ? permission.id : -1);
  };

  return (
    <View className="flex-row justify-between border-white border-2 rounded-lg w-full mb-4">
      <View className="w-4/5 p-4">
        <Text className="text-white text-2xl font-bold mb-2">
          {course.name}
        </Text>
        <Text className="text-white text-justify text-base break-all">
          {course.description}
        </Text>
      </View>

      <View className="w-1/5 justify-around border-l-2 border-white p-2">
        <View className="flex-row justify-center items-center p-2">
          <Feather name="users" color="white" size={24} />
          <Text className="text-white text-xl font-bold ml-2">
            {course.studentsId.length}
          </Text>
        </View>

        <View className="flex-row justify-center items-center p-2">
          <Feather name="airplay" color="white" size={24} />
          <Text className="text-white text-xl font-bold ml-2">
            {course.classes.length}
          </Text>
        </View>

        <View className="border-t-2 border-white justify-center items-center p-2 pt-4 mt-2">
          <Feather
            name={isSubscribed() ? 'award' : 'bookmark'}
            color="white"
            size={24}
          />
        </View>
      </View>
    </View>
  );
}
