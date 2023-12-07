import CourseCard from '../components/CourseCard';
import { Course } from '../types/course';
import { getAllCourses } from '../services/CoursesService';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/routes';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';

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
