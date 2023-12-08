import { CourseClass } from '../types/course';
import colors from 'tailwindcss/colors';
import { Feather } from '@expo/vector-icons';
import { RootStackParamList } from '../types/routes';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

type Props = {
  route: RouteProp<RootStackParamList, 'Class'>;
  navigation: NavigationProp<RootStackParamList, 'Class'>;
};

export default function ClassScreen({ navigation, route }: Props) {
  const courseClass = route.params.class as CourseClass;

  return (
    <View className="flex-1 bg-white">
      <View className="bg-indigo-900 mt-12 items-center">
        <Text className="text-white text-2xl text-center tracking-wide font-bold w-full py-4 border-b-2 border-white">
          {courseClass.name}
        </Text>
        <Text className="text-white text-justify text-base break-all w-full p-4 border-b-2 border-white">
          {courseClass.description}
        </Text>
      </View>
      <View className="bg-indigo-900 flex-1 p-2">
        <YoutubeIframe
          height={300}
          play={false}
          videoId={courseClass.videoId}
        />
      </View>
      <View className="bg-white justify-center items-center w-full">
        <TouchableOpacity className="p-3" onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={32} color={colors.indigo[900]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
