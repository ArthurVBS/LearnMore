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
    <View className="w-full border-white border-2 p-2 mb-2 rounded-lg flex flex-row items-center justify-between">
      <Feather name={icon} size={24} color="white" />
      <TextInput
        secureTextEntry={secureText}
        className="flex-1 h-8 px-2 border-white border-b-2 ml-2 text-white text-lg"
        onChangeText={state => setState(state)}
        value={state}
      />
    </View>
  );
}
