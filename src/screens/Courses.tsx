import { Text, View } from 'react-native';
import { getAllCourses } from '../services/CoursesService';
import { useState, useEffect } from 'react';
import { Course } from '../types/course';
import Card from '../components/Card';

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    setCourses(getAllCourses());
  }, []);

  const renderAllCourses = () => {
    return courses.map(course => <Card key={course.id} course={course}></Card>);
  };

  return (
    <View className="flex-1 bg-indigo-900">
      <View className="w-full flex-row bg-white pt-4 px-2 pb-5">
        <Text className="text-indigo-900 text-2xl tracking-wide mt-11 font-bold">
          All Courses
        </Text>
      </View>
      <View className="justify-center items-center w-full p-4">
        {renderAllCourses()}
      </View>
    </View>
  );
}
