import React from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';

const googleImage = require('@/assets/images/Session2/google.png');

const LogIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Welcome Back</Text>
      <Text style={styles.text2}>Fill in your email and password to continue</Text>
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your email address"
        placeholderTextColor="#A7A7A7"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your password"
        placeholderTextColor="#A7A7A7"
        secureTextEntry={true}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.rememberContainer}>
          <View style={styles.checkbox} />
          <Text style={styles.rememberText}>Remember password</Text>
        </View>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.alreadyHaveAccountText}>Already have an account?</Text>
        <Text style={styles.signUpText}> Sign Up</Text>
      </View>
      <View style={styles.orLogInUsingContainer}>
        <Text style={styles.orLogInUsingText}>or log in using</Text>
      </View>
      <Image source={googleImage} style={styles.image} />
    </View>
  );
};

export default LogIn;

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
    marginBottom: 24,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 14,
    height: 14,
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(167, 167, 167, 1.0)',
    marginRight: 8,
  },
  rememberText: {
    width: 114,
    height: 16,
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 16,
    textAlign: 'left',
    color: '#A7A7A7',
  },
  forgotPasswordText: {
    width: 97,
    height: 16,
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 16,
    textAlign: 'right',
    color: '#0560FA',
  },
  loginButton: {
    width: 342,
    height: 46,
    borderRadius: 4,
    backgroundColor: '#A7A7A7',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 187,
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
  orLogInUsingContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    alignSelf: 'center',
  },
  orLogInUsingText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 16,
    textAlign: 'center',
    color: '#A7A7A7',
  },
  image: {
    width: 16,
    height: 16,
    backgroundColor: '#FFFFFF',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10, 
  },
});
