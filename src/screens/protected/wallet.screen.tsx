import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {COLORS} from '../../constants/index';

const Wallet = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Wallet</Text>
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryLight,
  },
  title: {
    fontSize: 30,
    color: COLORS.white,
  },
});
