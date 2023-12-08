import { TextInput, View } from 'react-native';

type Props = {
  state: string;
  setState: (state: string) => void;
};

export default function SearchField({ state, setState }: Props) {
  return (
    <View className="bg-white w-full p-2 flex flex-row items-center justify-between">
      <TextInput
        className="flex-1 h-8 px-2 border-indigo-900 border-b-2 ml-2 text-indigo-900 text-lg"
        onChangeText={state => setState(state)}
        value={state}
      />
    </View>
  );
}
