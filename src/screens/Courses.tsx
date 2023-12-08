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
import Check from '../components/Check';
import { filterCourse } from '../utils/filterCourse';
import { usePermission } from '../context/PermissionContext';

type Props = {
  navigation: NavigationProp<RootStackParamList, 'HomeCourses'>;
};

export default function CoursesScreen({ navigation }: Props) {
  const { permission } = usePermission();
  const [courses, setCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState('');
  const [showSearchField, setShowSearchField] = useState(false);
  const [showSubscribed, setShowSubscribed] = useState(true);
  const [showUnsubscribed, setShowUnsubscribed] = useState(true);

  const searchedCourses = () => {
    const filteredCourses = getAllCourses().filter(course =>
      filterCourse({
        course: course,
        input: search,
        labels: {
          subscribed: showSubscribed,
          unsubscribed: showUnsubscribed
        },
        studentId: permission.id
      })
    );
    return filteredCourses.length > 0 ? filteredCourses : [];
  };

  const getScreenTitle = () => {
    if (showSubscribed && showUnsubscribed) return 'All Courses';
    if (showSubscribed) return 'My Courses';
    if (showUnsubscribed) return 'Others Courses';
    return 'No Courses';
  };

  const getMessage = () => {
    if (showSubscribed && showUnsubscribed) return 'No courses available';
    if (showSubscribed) return 'You do not have any courses subscribed';
    if (showUnsubscribed) return 'No courses unsubscribed';
    return 'No Courses';
  };

  useEffect(() => {
    setCourses(searchedCourses());
  }, [search, showSubscribed, showUnsubscribed]);

  return (
    <View className="flex-1 bg-indigo-900">
      <View className="w-full flex-row justify-between items-center bg-white pt-4 px-2 pb-5">
        <TouchableOpacity
          className="mt-11 ml-2"
          onPress={() => setShowSearchField(!showSearchField)}
        >
          <Feather name="search" size={24} color={colors.indigo[900]} />
        </TouchableOpacity>
        <Text className="text-indigo-900 text-2xl tracking-wide mt-11 font-bold">
          {getScreenTitle()}
        </Text>
        <View className="flex-row justify-center items-center mt-11 h-full">
          <Check
            icon="award"
            state={showSubscribed}
            setState={setShowSubscribed}
          />
          <Check
            icon="bookmark"
            state={showUnsubscribed}
            setState={setShowUnsubscribed}
          />
        </View>
      </View>
      {showSearchField && <SearchField state={search} setState={setSearch} />}

      {courses.length === 0 && (
        <View className="bg-indigo-900 flex-row justify-center items-center w-full mt-2">
          <Feather name="info" size={24} color={colors.white} />
          <Text className="p-2 text-white text-lg">{getMessage()}</Text>
        </View>
      )}
      <CoursesList
        courses={courses}
        navigation={navigation}
        marginBottom={showSearchField ? 'pb-40' : 'pb-28'}
      />
    </View>
  );
}
