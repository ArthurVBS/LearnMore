import { CourseClass } from '../types/course';
import { Text, View } from 'react-native';

type Props = {
  courseClass: CourseClass;
};

export default function ClassCard({ courseClass }: Props) {
  return (
    <View className="flex-1 m-3 p-5 bg-indigo-400 rounded-lg border-2 border-white">
      <View className="absolute -mt-2 -ml-2 bg-indigo-900 rounded-full border-2 border-white mr-2 justify-center items-center">
        <Text className="text-indigo-400 text-xl font-bold px-2">
          {courseClass.id}
        </Text>
      </View>
      <Text className="text-white text-xl font-bold mb-2">
        {courseClass.name}
      </Text>
      <Text className="text-white break-all text-justify">
        {courseClass.description}
      </Text>
    </View>
  );
}
