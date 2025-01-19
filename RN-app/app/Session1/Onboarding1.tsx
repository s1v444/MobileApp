import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { NavigationProp } from '@react-navigation/native'; 
import { useRouter } from 'expo-router';

const S1S2Image = require('@/assets/images/Session1/S1S2.png');

type Onboarding1Props = {
  navigation: NavigationProp<any>; 
};

const Onboarding1: React.FC<Onboarding1Props> = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={S1S2Image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Quick Delivery At Your Doorstep</Text>
        <Text style={styles.text2}>Enjoy quick pick-up and delivery to your destination</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => router.push('/Session1/Onboarding4')} 
        >
          <Text style={styles.buttonText1}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => router.push('/Session1/Onboarding4')} 
        >
          <Text style={styles.buttonText2}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 346,
    height: 346,
    backgroundColor: '#FFFFFF',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginLeft: 20,
    marginBottom: 20,
  },
  textContainer: {
    width: 297,
    height: 108,
    marginBottom: 40,
    alignItems: 'center',
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 342,
    height: 50,
  },
  button1: {
    width: 100,
    height: 50,
    borderRadius: 4.692255020141602,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#0560FA',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  button2: {
    width: 100,
    height: 50,
    borderRadius: 4.692255020141602,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0560FA',
  },
  buttonText1: {
    color: '#0560FA',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonText2: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});