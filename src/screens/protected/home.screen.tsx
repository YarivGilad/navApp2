import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../constants';

const Home: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Home! </Text>
    </View>
  );
};
export default Home;

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
