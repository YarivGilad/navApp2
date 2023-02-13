import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {COLORS} from '../../constants/index';

const Notifications = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Notifications</Text>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryLight,
  },
  title: {
    fontSize: 30,
    color: COLORS.white,
  },
});
