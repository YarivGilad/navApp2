//@ts-ignore
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
// import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, ROUTES} from '../constants/index';
import {Home, Notifications, Wallet} from '../screens/index';
import SettingsNavigator from './Settings.navigator';

const Tab = createBottomTabNavigator();

interface tabBarIconParams {
  color: string;
  size: number;
  focused: boolean;
}

function BottomTabNavigator() {
  return (
    // <Tab.Navigator screenOptions={{headerShown: false}}>
    // <Tab.Navigator>
    <Tab.Navigator
      screenOptions={({route}) => {
        // console.log({route});

        return {
          headerShown: false,
          tabBarActiveTintColor: COLORS.secondary,
          tabBarShowLabel: false,
          // tabBarInactiveTintColor: COLORS.lightest,
          // tabBarStyle: styles.tabBarStyle,
          tabBarIcon: ({focused, color, size}: tabBarIconParams) => {
            //
            let iconName = 'ios-information-circle';

            switch (route.name) {
              case ROUTES.HOME_TAB:
                iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
                break;
              case ROUTES.SETTINGS_NAVIGATOR:
                iconName = focused ? 'settings' : 'settings-outline';
                break;
              case ROUTES.WALLET:
                iconName = focused ? 'wallet' : 'wallet-outline';
                break;
              case ROUTES.NOTIFICATIONS:
                iconName = focused
                  ? 'md-notifications-sharp'
                  : 'md-notifications-outline';
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        };
      }}>
      <Tab.Screen name={ROUTES.HOME_TAB} component={Home} />
      <Tab.Screen name={ROUTES.WALLET} component={Wallet} />
      <Tab.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

// const styles = StyleSheet.create({
//   tabBarStyle: {
//     position: 'absolute',
//     backgroundColor: COLORS.transparent,
//     borderTopWidth: 0,
//     bottom: 15,
//     right: 10,
//     left: 10,
//     height: 92,
//   },
// });
