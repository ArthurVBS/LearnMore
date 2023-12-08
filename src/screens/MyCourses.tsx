import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { getCoursesByStudentId } from '../services/CoursesService';
import { usePermission } from '../context/PermissionContext';
import CourseCard from '../components/CourseCard';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/routes';

type Props = {
  navigation: NavigationProp<RootStackParamList, 'HomeCourses'>;
};

export default function MyCoursesScreen({ navigation }: Props) {
  const { permission } = usePermission();
  const courses = getCoursesByStudentId(permission.id);

  return (
    <View className="flex-1 bg-indigo-900">
      <View className="w-full justify-center items-center bg-white pt-4 px-2 pb-5">
        <Text className="text-indigo-900 text-2xl tracking-wide mt-11 font-bold">
          My Courses
        </Text>
      </View>
      <View className="justify-center items-center w-full p-4">
        <FlatList
          data={courses}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Course', { course: item })}
            >
              <CourseCard key={item.id} course={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
