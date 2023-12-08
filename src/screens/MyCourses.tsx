import { Text, View } from 'react-native';
import { getCoursesByStudentId } from '../services/CoursesService';
import { usePermission } from '../context/PermissionContext';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/routes';
import CoursesList from '../components/CoursesList';
import { useEffect, useState } from 'react';
import { Course } from '../types/course';

type Props = {
  navigation: NavigationProp<RootStackParamList, 'HomeCourses'>;
};

export default function MyCoursesScreen({ navigation }: Props) {
  const { permission } = usePermission();
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    setCourses(getCoursesByStudentId(permission.id));
  }, []);

  return (
    <View className="flex-1 bg-indigo-900">
      <View className="w-full justify-center items-center bg-white pt-4 px-2 pb-5">
        <Text className="text-indigo-900 text-2xl tracking-wide mt-11 font-bold">
          My Courses
        </Text>
      </View>
      <CoursesList courses={courses} navigation={navigation} />
    </View>
  );
}
