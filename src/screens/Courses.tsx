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
    <View className="flex-1 justify-center items-center bg-indigo-900 px-4">
      <Text className="text-white text-3xl">Courses</Text>
      {renderAllCourses()}
    </View>
  );
}
