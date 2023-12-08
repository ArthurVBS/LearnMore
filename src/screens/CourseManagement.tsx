import { Text, View } from 'react-native';
import { getCoursesByTeacherId } from '../services/CoursesService';
import { usePermission } from '../context/PermissionContext';
import CoursesList from '../components/CoursesList';

export default function CourseManagementScreen() {
  const { permission } = usePermission();
  const courses = getCoursesByTeacherId(permission.id);

  return (
    <View className="flex-1 bg-indigo-900">
      <View className="w-full justify-center items-center bg-white pt-4 px-2 pb-5">
        <Text className="text-indigo-900 text-2xl tracking-wide mt-11 font-bold">
          Courses Management
        </Text>
      </View>
      <CoursesList courses={courses} />
    </View>
  );
}
