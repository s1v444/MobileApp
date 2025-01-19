import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#FFFFFF',
  },
  homeText: {
    width: 65,
    height: 28, 
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 24, 
    color: '#000000', 
    textAlign: 'center', 
  },
});