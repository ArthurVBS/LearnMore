import { Course, CourseClass } from '../types/course';
import colors from 'tailwindcss/colors';
import { Feather } from '@expo/vector-icons';
import { RootStackParamList } from '../types/routes';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { Text, TouchableOpacity, ScrollView, View } from 'react-native';
import ClassCard from '../components/ClassCard';
import { usePermission } from '../context/PermissionContext';
import { useEffect, useState } from 'react';

type Props = {
  route: RouteProp<RootStackParamList, 'Course'>;
  navigation: NavigationProp<RootStackParamList, 'Course'>;
};

export default function CourseScreen({ navigation, route }: Props) {
  const { permission } = usePermission();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const course = route.params.course as Course;

  useEffect(() => {
    setIsSubscribed(
      permission.id !== null && course.studentsId.includes(permission.id)
    );
  });

  const onPressCallback = (courseClass: CourseClass) => {
    if (isSubscribed) {
      return () => navigation.navigate('Class', { class: courseClass });
    }
  };

  const renderClassCard = () => {
    return course.classes.map(courseClass => (
      <TouchableOpacity
        key={courseClass.id}
        onPress={onPressCallback(courseClass)}
      >
        <ClassCard key={courseClass.id} courseClass={courseClass} />
      </TouchableOpacity>
    ));
  };

  const renderClasses = () => {
    return course.classes.length > 0 ? (
      <ScrollView className="w-full mt-2">{renderClassCard()}</ScrollView>
    ) : (
      <Text className="flex-1 justify-center items-center text-white text-xl text-center tracking-wide font-bold w-full py-4">
        No classes
      </Text>
    );
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 bg-indigo-900 mt-12 items-center">
        <Text className="text-white text-2xl text-center tracking-wide font-bold w-full py-4 border-b-2 border-white">
          {course.name}
        </Text>
        <Text className="text-white text-justify text-base break-all w-full p-4 border-b-2 border-white">
          {course.description}
        </Text>
        {renderClasses()}
      </View>
      {!isSubscribed && (
        <View className="bg-indigo-900 flex-row justify-center items-center w-full">
          <Feather name="info" size={24} color={colors.white} />
          <Text className="p-2 text-white text-lg">You are not subscribed</Text>
        </View>
      )}
      <View className="bg-white justify-center items-center w-full">
        <TouchableOpacity className="p-3" onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={32} color={colors.indigo[900]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
