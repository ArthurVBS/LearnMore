import { Text, TouchableOpacity, View } from 'react-native';
import { checkUserPermission } from '../services/PermissionsService';
import Field from '../components/Field';
import colors from 'tailwindcss/colors';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { usePermission } from '../context/PermissionContext';

export default function LoginScreen() {
  const { login } = usePermission();
  const [hasUserTried, setHasUserTried] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const getUserByUsernameAndPassword = () => {
    const user = checkUserPermission(username, password);
    login(user);
    setUsername('');
    setPassword('');
    setHasUserTried(true);
  };

  return (
    <View className="flex-1 items-stretch bg-indigo-900">
      <View className="bg-white flex flex-row w-full justify-center items-center pt-16 px-4 pb-10">
        <Feather name="award" color={colors.indigo[900]} size={32} />
        <Text className="text-indigo-900 text-3xl font-bold ml-2">
          Learn More App
        </Text>
      </View>
      <View className="items-center justify-center h-full px-10 pb-24">
        <Text className="text-white text-center text-2xl mb-5">
          Please, LogIn to use the app
        </Text>
        <Field
          secureText={false}
          state={username}
          setState={setUsername}
          icon="user"
        />
        <Field
          secureText={true}
          state={password}
          setState={setPassword}
          icon="lock"
        />
        <View className="flex flex-row justify-between w-full">
          <Text className="text-white text-base tracking-wide">
            {hasUserTried && 'Incorrect username or \npassword'}
          </Text>
          <TouchableOpacity
            className="border-white border-2 rounded-lg self-end"
            onPress={() => getUserByUsernameAndPassword()}
          >
            <Text className="text-white text-center text-lg font-bold py-2 px-4">
              LogIn
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
