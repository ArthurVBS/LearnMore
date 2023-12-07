import { Course } from '../types/course';
import colors from 'tailwindcss/colors';
import { Feather } from '@expo/vector-icons';
import { RootStackParamList } from '../types/routes';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import ClassCard from '../components/ClassCard';

type Props = {
  route: RouteProp<RootStackParamList, 'Course'>;
  navigation: NavigationProp<RootStackParamList, 'Course'>;
};

export default function CourseScreen({ navigation, route }: Props) {
  const course = route.params.course as Course;

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 bg-indigo-900 mt-12 items-center">
        <Text className="text-white text-2xl text-center tracking-wide font-bold w-full py-4 border-b-2 border-white">
          {course.name}
        </Text>
        <Text className="text-white text-justify text-base break-all w-full p-4 border-b-2 border-white">
          {course.description}
        </Text>
        <View className="w-full border-t-2">
          <FlatList
            data={course.classes}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Class', { class: item })}
              >
                <ClassCard key={item.id} courseClass={item} />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <View className="bg-white justify-center items-center w-full">
        <TouchableOpacity className="p-3" onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={32} color={colors.indigo[900]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}