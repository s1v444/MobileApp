import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useRouter } from 'expo-router';
const S1S3Image = require('@/assets/images/Session1/S1S3.png');

type Onboarding4Props = {
  navigation: NavigationProp<any>;
};

const Onboarding4: React.FC<Onboarding4Props> = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={S1S3Image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Flexible Payment</Text>
        <Text style={styles.text2}>Different modes of payment either before and after delivery without stress</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => router.push('/Session1/Onboarding3')}
        >
          <Text style={styles.buttonText1}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => router.push('/Session1/Onboarding3')}
        >
          <Text style={styles.buttonText2}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding4;

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
    marginBottom: 59,
  },
  textContainer: {
    width: 297,
    height: 108,
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
    justifyContent: 'center',
    gap: 142,
    marginTop: 50,
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