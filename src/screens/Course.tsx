import { Course } from '../types/course';
import { RootStackParamList } from '../types/routes';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

type Props = {
  route: RouteProp<RootStackParamList, 'Course'>;
  navigation: NavigationProp<RootStackParamList, 'Course'>;
};

export default function CourseScreen({ navigation, route }: Props) {
  const course = route.params.course as Course;

  return (
    <View className="flex-1 justify-center items-center bg-indigo-500">
      <Text className="text-white text-2xl font-bold">{course.name}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
