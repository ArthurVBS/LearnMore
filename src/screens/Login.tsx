import { Button, Text, View } from 'react-native';
import { checkPermission } from '../services/PermissionsService';
import Field from '../components/Field';
import { useState } from 'react';

type Props = {
  setHasAccess: (hasAccess: boolean) => void;
};

export default function Login({ setHasAccess }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const checkPermissions = () => {
    setHasAccess(checkPermission(username, password));
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
      <Button title="Login" onPress={() => checkPermissions()} />
    </View>
  );
}
