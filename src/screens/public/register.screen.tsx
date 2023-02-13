import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {COLORS} from '../../constants/index';

const Register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Register here...</Text>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  title: {
    fontSize: 30,
    color: COLORS.white,
  },
});
