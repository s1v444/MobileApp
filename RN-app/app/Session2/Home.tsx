import React, { useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/Session3/Home2');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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