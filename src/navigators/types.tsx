import {RouteProp} from '@react-navigation/native';
// import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ROUTES} from '../constants/routes';

export type FProute = RouteProp<RootStackParamList, ROUTES.FORGOT_PASSWORD>;

export type RootStackParamList = {
  [ROUTES.LOGIN]: undefined;
  [ROUTES.REGISTER]: undefined;
  [ROUTES.FORGOT_PASSWORD]: {userId: string};

  [ROUTES.HOME]: undefined;
  [ROUTES.HOME_TAB]: undefined;
  [ROUTES.HOME_DRAWER]: undefined;

  [ROUTES.WALLET]: undefined;
  [ROUTES.WALLET_DRAWER]: undefined;

  [ROUTES.NOTIFICATIONS]: undefined;
  [ROUTES.NOTIFICATIONS_DRAWER]: undefined;

  [ROUTES.SETTINGS]: undefined;
  [ROUTES.ACCOUNT_SETTINGS]: undefined;
  [ROUTES.SETTINGS_NAVIGATOR]: undefined;
  [ROUTES.SETTINGS_DETAIL]: undefined;

  [ROUTES.PROFILE]: undefined;

  //   Login: undefined;
  //   Register: undefined;
  //   'Forgot Password': {userId: string};

  //   Home: undefined;
  //   'Home Tab': undefined;
  //   'Home Drawer': undefined;

  //   Wallet: undefined;
  //   'Wallet Drawer': undefined;

  //   Notifications: undefined;
  //   'Notifications Drawer': undefined;

  //   Settings: undefined;
  //   'Account Settings': undefined;
  //   'Settings Navigator': undefined;
  //   'Settings Detail': undefined;

  //   'My Profile': undefined;
  //[key: string]: undefined | object;
};
// export type RootStackScreenProps<T extends keyof RootStackParamList> =
//   NativeStackScreenProps<RootStackParamList, T>;

// // This registers which makes navigation fully type-safe.
// // https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
//--------------------------
// import type {
//   CompositeScreenProps,
//   NavigatorScreenParams,
// } from '@react-navigation/native';
// import type {StackScreenProps} from '@react-navigation/stack';
// import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

// export type RootStackParamList = {
//   //Home: NavigatorScreenParams<HomeTabParamList>;
//   PostDetails: {id: string};
//   NotFound: undefined;
// };

// export type RootStackScreenProps<T extends keyof RootStackParamList> =
//   StackScreenProps<RootStackParamList, T>;

// export type HomeTabParamList = {
//   Popular: undefined;
//   Latest: undefined;
// };

// export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
//   CompositeScreenProps<
//     BottomTabScreenProps<HomeTabParamList, T>,
//     RootStackScreenProps<keyof RootStackParamList>
//   >;

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootStackParamList {}
//   }
// }
