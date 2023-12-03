import { Text, View } from 'react-native';
import { Course } from '../types/course';
import { usePermission } from '../context/PermissionContext';

type Props = {
  course: Course;
};

export default function Card({ course }: Props) {
  const { permission } = usePermission();

  const isSubscribed = () => {
    return course.studentsId.includes(permission.id ? permission.id : -1)
      ? 'Subscribed'
      : 'Not subscribed';
  };

  return (
    <View className="bg-white w-full p-2 mb-2 rounded-lg flex items-center justify-between gap-x-2">
      <Text>{isSubscribed()}</Text>
      <Text>Course name: {course.name}</Text>
      <Text>Course description: {course.description}</Text>
      <Text>Students: {course.studentsId.length}</Text>
      <Text>Classes: {course.classes.length}</Text>
    </View>
  );
}
