import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity } from 'react-native';

export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {

    const filteredRoutes = state.routes.filter((route) => {
        // Exclude routes that start with '+' or are named 'sitemap'
        return !route.name.startsWith('+') && route.name !== '_sitemap'
      });

  return (
    <View className='absolute bottom-4 flex-row w-1/2 items-center justify-between bg-white left-28'>
      {filteredRoutes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label.toString()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
