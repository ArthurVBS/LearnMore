import { Feather } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';

type Props = {
  icon: 'user' | 'lock';
  secureText: boolean;
  state: string;
  setState: (state: string) => void;
};

export default function Field({ icon, secureText, state, setState }: Props) {
  return (
    <View className="bg-black w-full p-2 mb-2 rounded-lg flex flex-row items-center justify-between gap-x-2">
      <Feather name={icon} size={24} color="white" />
      <TextInput
        secureTextEntry={secureText}
        className="h-8 bg-white px-2 flex-1"
        onChangeText={state => setState(state)}
        value={state}
      />
    </View>
  );
}
