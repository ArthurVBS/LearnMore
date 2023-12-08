import colors from 'tailwindcss/colors';
import Courses from '../screens/Courses';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Home from '../screens/Home';
import { RootTabParamList } from '../types/routes';
import { usePermission } from '../context/PermissionContext';
import PERMISSIONS from '../constants/PermissionsConstant';
import Permission from '../screens/Permissions';
import CourseManagement from '../screens/CourseManagement';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function TabRoutes() {
  const { permission } = usePermission();

  const isAdminUser = () => {
    return permission.permission == PERMISSIONS.ADMIN;
  };

  const isTeacherUser = () => {
    return permission.permission == PERMISSIONS.TEACHER;
  };

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

      {isTeacherUser() && (
        <Tab.Screen
          name="CoursesManagement"
          component={CourseManagement}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="layers" color={color} size={size} />
            ),
            tabBarActiveTintColor: colors.indigo[900],
            tabBarLabel: 'Management'
          }}
        />
      )}

      {isAdminUser() && (
        <Tab.Screen
          name="Permissions"
          component={Permission}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="users" color={color} size={size} />
            ),
            tabBarActiveTintColor: colors.indigo[900],
            tabBarLabel: 'Permissions'
          }}
        />
      )}
    </Tab.Navigator>
  );
}
