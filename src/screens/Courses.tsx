import { Course } from '../types/course';
import { getAllCourses } from '../services/CoursesService';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/routes';
import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import CoursesList from '../components/CoursesList';

type Props = {
  navigation: NavigationProp<RootStackParamList, 'HomeCourses'>;
};

export default function CoursesScreen({ navigation }: Props) {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    setCourses(getAllCourses());
  }, []);

  return (
    <View className="flex-1 bg-indigo-900">
      <View className="w-full justify-center items-center bg-white pt-4 px-2 pb-5">
        <Text className="text-indigo-900 text-2xl tracking-wide mt-11 font-bold">
          All Courses
        </Text>
      </View>
      <CoursesList courses={courses} navigation={navigation} />
    </View>
  );
}
