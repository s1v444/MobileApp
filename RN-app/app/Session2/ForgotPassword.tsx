import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  TextInputProps, 
} from 'react-native';

import Eye from '@/assets/images/Session2/Eye'; 
import EyeSplash from '@/assets/images/Session2/EyeSlash'; 

interface InputProps extends TextInputProps {
  isPassword?: boolean; 
}

const Input: React.FC<InputProps> = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        secureTextEntry={props.isPassword && !isPasswordVisible}
        placeholderTextColor="#A7A7A7"
        {...props} 
      />
      {props.isPassword && (
        <Pressable
          style={styles.eyeIcon}
          onPress={() => setIsPasswordVisible((state) => !state)}
        >
          {isPasswordVisible ? <Eye /> : <EyeSplash />}
        </Pressable>
      )}
    </View>
  );
};

const ForgotPassword: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      <Text style={styles.enterEmailText}>Enter your email address</Text>

      <Text style={styles.label}>Email Address</Text>
      <Input placeholder="Enter your email address" />

      <Text style={styles.label}>Password</Text>
      <Input placeholder="Enter your password" isPassword />

      <TouchableOpacity style={styles.sendOtpButton}>
        <Text style={styles.sendOtpButtonText}>Send OTP</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.alreadyHaveAccountText}>Remember password? Back to </Text>
        <Text style={styles.signUpText}> Sign In</Text>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    paddingHorizontal: 24,
  },
  forgotPasswordText: {
    width: 183,
    height: 30,
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 30,
    textAlign: 'left',
    color: '#3A3A3A',
    marginBottom: 8,
  },
  enterEmailText: {
    width: 267,
    height: 16,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 16,
    textAlign: 'left',
    color: '#A7A7A7',
    marginBottom: 33,
  },
  label: {
    width: '100%',
    height: 16,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 16,
    textAlign: 'left',
    color: '#A7A7A7',
    marginBottom: 8,
  },
  inputContainer: {
    width: '100%',
    position: 'relative',
    marginBottom: 24,
  },
  textInput: {
    width: '100%',
    height: 44,
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(167, 167, 167, 1.0)',
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#3A3A3A',
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  sendOtpButton: {
    width: '100%',
    height: 46,
    borderRadius: 4,
    backgroundColor: '#A7A7A7',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  sendOtpButtonText: {
    width: 70,
    height: 16,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  alreadyHaveAccountText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 16,
    color: '#A7A7A7',
  },
  signUpText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 16,
    color: '#0560FA',
  },
});