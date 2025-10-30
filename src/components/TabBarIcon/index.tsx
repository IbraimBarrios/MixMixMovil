import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface ITabBarIconProps {
  color: string;
  size: number;
  focused: boolean;
};

const ITabBarIcon = (name: string) => {
  return(({ color, size }: ITabBarIconProps) => (
        <MaterialCommunityIcons name={name} color={color} size={size} />
      ));
};

export default ITabBarIcon;