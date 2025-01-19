import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useRouter } from 'expo-router';
const S1S4Image = require('@/assets/images/Session1/S1S4.png');


type Onboarding3Props = {
  navigation: NavigationProp<any>;
};

const Onboarding3: React.FC<Onboarding3Props> = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={S1S4Image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Real-time Tracking</Text>
        <Text style={styles.text2}>Track your packages/items from the comfort of your home till final destination</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/Session2/SignUp')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText1}>Already have an account?</Text>
        <Text
          style={styles.bottomText2}
          onPress={() => router.push('/Session2/LogIn')}
        >
          Sign in
        </Text>
      </View>
    </View>
  );
};

export default Onboarding3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 399.93560791015625,
    height: 298,
    marginBottom: 63,
  },
  textContainer: {
    width: 297,
    height: 108,
    alignItems: 'center',
    marginBottom: 82,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 24,
    textAlign: 'center',
    color: '#0560FA',
    marginBottom: 10,
  },
  text2: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 20,
    textAlign: 'center',
    color: '#3A3A3A',
  },
  button: {
    width: 342,
    height: 46,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0560FA',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  bottomText1: {
    width: 159,
    height: 16,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 16,
    color: '#A7A7A7',
  },
  bottomText2: {
    width: 43,
    height: 16,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 16,
    color: '#0560FA',
    marginLeft: 5,
  },
});