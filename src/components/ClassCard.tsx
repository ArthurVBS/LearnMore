import { CourseClass } from '../types/course';
import { Text, View } from 'react-native';

type Props = {
  courseClass: CourseClass;
};

export default function ClassCard({ courseClass }: Props) {
  return (
    <View className="flex-1 m-2 p-4 bg-indigo-400 rounded-lg border-2 border-white">
      <Text className="text-white text-xl font-bold">{courseClass.name}</Text>
      <Text className="text-white text-lg">{courseClass.description}</Text>
    </View>
  );
}
