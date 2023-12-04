import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import Home from '../screens/Home';
import Courses from '../screens/Courses';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          tabBarActiveTintColor: colors.indigo[900],
          tabBarLabel: 'Home'
        }}
      />

      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" color={color} size={size} />
          ),
          tabBarActiveTintColor: colors.indigo[900],
          tabBarLabel: 'Courses'
        }}
      />
    </Tab.Navigator>
  );
}
