import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {COLORS, ROUTES} from '../../constants/index';
import {RootStackParamList} from '../../navigators/types';

const ForgotPassword = () => {
  const route =
    useRoute<RouteProp<RootStackParamList, ROUTES.FORGOT_PASSWORD>>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>User ID: {route.params.userId}</Text>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondaryLight,
  },
  title: {
    fontSize: 30,
    margin: 10,
    color: COLORS.white,
  },
  subtitle: {
    fontSize: 20,
    // color: COLORS.white,
  },
});
