import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Course } from '../types/course';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/routes';
import CourseCard from './CourseCard';

type Props = {
  courses: Course[];
  navigation?: NavigationProp<RootStackParamList, 'HomeCourses'>;
};

export default function CoursesList({ courses, navigation }: Props) {
  const renderCourseCard = () => {
    if (navigation) {
      return courses.map(course => (
        <TouchableOpacity
          key={course.id}
          onPress={() => navigation.navigate('Course', { course: course })}
        >
          <CourseCard key={course.id} course={course} />
        </TouchableOpacity>
      ));
    } else {
      return courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ));
    }
  };

  return (
    <View className="justify-center items-center w-full p-4 pb-28">
      <ScrollView className="w-full">{renderCourseCard()}</ScrollView>
    </View>
  );
}
