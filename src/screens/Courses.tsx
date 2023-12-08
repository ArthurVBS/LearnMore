import { Course } from '../types/course';
import { getAllCourses } from '../services/CoursesService';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/routes';
import { Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import CoursesList from '../components/CoursesList';
import SearchField from '../components/SearchField';

type Props = {
  navigation: NavigationProp<RootStackParamList, 'HomeCourses'>;
};

export default function CoursesScreen({ navigation }: Props) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState('');
  const [showSearchField, setShowSearchField] = useState(false);

  const searchedCourses = () => {
    return getAllCourses().filter(course =>
      course.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  useEffect(() => {
    setCourses(searchedCourses());
  }, [search]);

  return (
    <View className="flex-1 bg-indigo-900">
      <View className="w-full flex-row justify-between items-center bg-white pt-4 px-2 pb-5">
        <Text className="text-indigo-900 text-2xl tracking-wide mt-11 font-bold">
          All Courses
        </Text>
        <TouchableOpacity
          className="mt-11 mr-2"
          onPress={() => setShowSearchField(!showSearchField)}
        >
          <Feather name="search" size={24} color={colors.indigo[900]} />
        </TouchableOpacity>
      </View>
      {showSearchField && <SearchField state={search} setState={setSearch} />}
      <CoursesList
        courses={courses}
        navigation={navigation}
        marginBottom={showSearchField ? 'pb-40' : 'pb-28'}
      />
    </View>
  );
}
