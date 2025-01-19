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

const NewPassword: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>New Password</Text>
      <Text style={styles.text2}>Enter new password</Text>

      <Text style={styles.label}>Password</Text>
      <Input placeholder="Enter your password" isPassword />

      <Text style={styles.label}>Confirm Password</Text>
      <Input placeholder="Confirm your password" isPassword />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    paddingHorizontal: 24,
  },
  text1: {
    width: 159,
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
  text2: {
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
    width: 342,
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
  loginButton: {
    width: 342,
    height: 46,
    borderRadius: 4,
    backgroundColor: '#A7A7A7',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  loginButtonText: {
    width: 45,
    height: 16,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});