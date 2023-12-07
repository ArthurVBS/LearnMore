import Class from '../screens/Class';
import Course from '../screens/Course';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/routes';
import TabRoutes from './tab.routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeCourses" component={TabRoutes} />
      <Stack.Screen name="Course" component={Course} />
      <Stack.Screen name="Class" component={Class} />
    </Stack.Navigator>
  );
}
