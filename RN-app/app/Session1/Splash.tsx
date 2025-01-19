import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useRouter } from 'expo-router';

const S1S1Image = require('@/assets/images/Session1/S1S1.png');

type SplashProps = {
  navigation: NavigationProp<any>;
};

const Splash: React.FC<SplashProps> = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/Session1/Onboarding1');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={S1S1Image} style={styles.image} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 215,
    height: 77.55644226074219,
    marginTop: -50,
  },
});