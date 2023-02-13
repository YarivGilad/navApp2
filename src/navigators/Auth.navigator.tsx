import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Register, ForgotPassword} from '../screens/index';
import {COLORS, ROUTES} from '../constants/index';
import {StyleSheet} from 'react-native';
import {FProute} from './types';
// import BottomTabNavigator from './BottomTabs.navigator';
import DrawerNavigator from './Drawer.navigator';
// import {RouteProp} from '@react-navigation/native';
// import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator();
// Stack.Navigator, Stack.Screen , Stack.Group

// type FProute = RouteProp<RootStackParamList, ROUTES.FORGOT_PASSWORD>;

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: COLORS.white,
        headerBackTitle: 'Back',
        // headerBackTitleVisible: false,
      }}
      initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={({route}) => ({
          title: `User ${(route as FProute).params.userId}`,
        })}
      />
      <Stack.Screen
        name={ROUTES.HOME}
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name={ROUTES.HOME}
        component={BottomTabNavigator}
        // options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}

export default AuthNavigator;

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
  },
});
