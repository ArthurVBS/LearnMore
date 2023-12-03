import { Button, Text, View } from 'react-native';
import { checkUserPermission } from '../services/PermissionsService';
import Field from '../components/Field';
import { useState } from 'react';
import { usePermission } from '../context/PermissionContext';

export default function Login() {
  const { setPermission } = usePermission();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    const user = checkUserPermission(username, password);
    setPermission(user);
  };

  return (
    <View className="flex-1 justify-center items-center bg-indigo-900 px-4">
      <Text className="text-white text-3xl">Login</Text>
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
      <Button title="Login" onPress={() => login()} />
    </View>
  );
}
