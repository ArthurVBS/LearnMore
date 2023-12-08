import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import { TouchableOpacity, View } from 'react-native';

type Props = {
  icon: 'award' | 'bookmark';
  state: boolean;
  setState: (state: boolean) => void;
};

export default function Check({ icon, state, setState }: Props) {
  const onPressCallback = () => {
    setState(!state);
  };

  const getIconColor = () => {
    return state ? colors.white : colors.indigo[900];
  };

  const getBackgroundColor = () => {
    return state ? 'bg-indigo-900' : 'bg-white';
  };

  return (
    <View
      className={`justify-center items-center border-2 border-indigo-900 mx-2 ${getBackgroundColor()} rounded-lg`}
    >
      <TouchableOpacity className="p-1" onPress={() => onPressCallback()}>
        <Feather name={icon} size={20} color={getIconColor()} />
      </TouchableOpacity>
    </View>
  );
}
