import React from 'react';
import {StyleSheet, Text, SafeAreaView, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, ROUTES} from '../../constants';

const Settings = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <Pressable
        onPress={() => navigation.navigate(ROUTES.SETTINGS_DETAIL)}
        style={styles.button}>
        <Text style={styles.buttonText}>Go To Settings Detail</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate(ROUTES.LOGIN)}
        style={styles.button}>
        <Text style={styles.buttonText}>Log out</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 30,
    color: COLORS.black,
    margin: 20,
  },
  button: {
    backgroundColor: COLORS.secondaryLight,
    padding: 17,
    margin: 10,
    borderRadius: 5,
    fontSize: 18,
    width: 180,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
