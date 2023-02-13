import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, SafeAreaView, Pressable} from 'react-native';
import {COLORS} from '../../constants';

const SettingsDetail = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings Details</Text>
      <Pressable onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SettingsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryLight,
  },
  title: {
    fontSize: 30,
    color: COLORS.white,
    margin: 25,
  },
  button: {
    backgroundColor: COLORS.white,
    padding: 17,
    margin: 10,
    borderRadius: 5,
    fontSize: 18,
    width: 180,
  },
  buttonText: {
    color: COLORS.secondaryDark,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
