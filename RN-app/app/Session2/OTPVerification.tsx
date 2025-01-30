import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

const OTPVerification = () => {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(Array(6).fill('')); 

  const handleSetNewPassword = () => {
    router.push('/Session2/NewPassword');
  };

  const handleOtpChange = (index: number, value: string) => { 
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const isOtpFilled = otp.every(value => value !== '');

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>OTP Verification</Text>
      <Text style={styles.text2}>Enter the 6 digit numbers sent to your email</Text>
      <View style={styles.otpContainer}>
        {[...Array(6)].map((_, index) => (
          <TextInput
            key={index}
            style={[
              styles.otpBox,
              otp[index] !== '' && styles.otpBoxFilled 
            ]}
            maxLength={1}
            keyboardType="numeric"
            textAlign="center"
            value={otp[index]}
            onChangeText={(value) => handleOtpChange(index, value)}
          />
        ))}
      </View>
      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>
          If you didn’t receive code, resend after
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.button, isOtpFilled && styles.buttonActive]}
        onPress={handleSetNewPassword}
        disabled={!isOtpFilled}
      >
        <Text style={styles.buttonText}>Set New Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 150,
    paddingHorizontal: 24,
  },
  text1: {
    width: 175,
    height: 30,
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 30,
    textAlign: 'left',
    color: '#3A3A3A',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  text2: {
    width: 273,
    height: 16,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 16,
    textAlign: 'left',
    color: '#A7A7A7',
    marginBottom: 52,
    alignSelf: 'flex-start',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  otpBox: {
    width: 32,
    height: 32,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(167, 167, 167, 1.0)',
    borderRadius: 0,
    textAlign: 'center',
    fontSize: 16,
    color: '#3A3A3A',
  },
  otpBoxFilled: {
    borderColor: '#007AFF', 
  },
  resendContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 82,
  },
  resendText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 16,
    textAlign: 'center',
    color: '#A7A7A7',
  },
  button: {
    width: 342,
    height: 46,
    borderRadius: 4,
    backgroundColor: '#A7A7A7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: '#007AFF', 
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});