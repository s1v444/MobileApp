import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const googleImage = require('@/assets/images/Session2/google.png');

const Checkmark = () => (
  <View style={styles.checkmark} />
);

const LogIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);

  const isFormValid = email && password;

  const handleLogin = () => {
    if (isFormValid) {
      router.push('/Session2/Home');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.text1}>Welcome Back</Text>
        <Text style={styles.text2}>Fill in your email and password to continue</Text>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your email address"
          placeholderTextColor="#A7A7A7"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your password"
          placeholderTextColor="#A7A7A7"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.bottomContainer}>
          <View style={styles.rememberContainer}>
            <TouchableOpacity onPress={() => setRememberPassword(!rememberPassword)}>
              <View style={[styles.checkbox, rememberPassword && styles.checkedBox]}>
                {rememberPassword && <Checkmark />}
              </View>
            </TouchableOpacity>
            <Text style={styles.rememberText}>Remember password</Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/Session2/ForgotPassword')}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomContent}>
        <TouchableOpacity
          style={[styles.loginButton, isFormValid && styles.activeLoginButton]}
          onPress={handleLogin}
          disabled={!isFormValid}
        >
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.alreadyHaveAccountText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.push('/Session2/SignUp')}>
            <Text style={styles.signUpText}> Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.orLogInUsingContainer}>
          <Text style={styles.orLogInUsingText}>or log in using</Text>
          <TouchableOpacity onPress={() => {}}>
            <Image source={googleImage} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
  topContent: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 150, 
  },
  bottomContent: {
    marginBottom: 100, 
  },
  text1: {
    fontSize: 24,
    fontWeight: '500',
    color: '#3A3A3A',
    marginBottom: 8,
  },
  text2: {
    fontSize: 14,
    fontWeight: '500',
    color: '#A7A7A7',
    marginBottom: 33,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#A7A7A7',
    marginBottom: 8,
  },
  textInput: {
    width: '100%',
    height: 44,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#A7A7A7',
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
    borderWidth: 1,
    borderColor: '#A7A7A7',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    backgroundColor: '#0560FA',
  },
  checkmark: {
    width: 6,
    height: 9,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: '#FFFFFF',
    transform: [{ rotate: '45deg' }],
  },
  rememberText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#A7A7A7',
  },
  forgotPasswordText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0560FA',
  },
  loginButton: {
    width: '100%',
    height: 46,
    borderRadius: 4,
    backgroundColor: '#A7A7A7',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  activeLoginButton: {
    backgroundColor: '#0560FA',
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '700',
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
    fontSize: 14,
    fontWeight: '400',
    color: '#A7A7A7',
  },
  signUpText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0560FA',
  },
  orLogInUsingContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  orLogInUsingText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#A7A7A7',
    marginBottom: 10,
  },
  image: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
});