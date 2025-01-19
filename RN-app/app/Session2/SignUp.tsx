import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
  TextInputProps,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';

const googleImage = require('@/assets/images/Session2/google.png');
import Eye from '@/assets/images/Session2/Eye';
import EyeSplash from '@/assets/images/Session2/EyeSlash';
import { useRouter } from 'expo-router';

type SignUpProps = {
  navigation: NavigationProp<any>;
};

interface InputProps extends TextInputProps {
  isPassword?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
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

const Checkmark = () => (
  <View style={styles.checkmark} />
);

const SignUp: React.FC<SignUpProps> = () => {
  const router = useRouter();

  const [isChecked, setIsChecked] = React.useState(false);
  const [fullName, setFullName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSignUp = () => {
    if (isChecked && fullName && phoneNumber && email && password && confirmPassword) {
      router.push('/Session2/LogIn');
    }
  };

  const isFormValid = fullName && phoneNumber && email && password && confirmPassword;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.text1}>Create an account</Text>
        <Text style={styles.text2}>Complete the sign up process to get started</Text>

        <Text style={styles.label}>Full Name</Text>
        <Input
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.label}>Phone Number</Text>
        <Input
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <Text style={styles.label}>Email Address</Text>
        <Input
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <Input
          placeholder="Enter your password"
          isPassword
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>Confirm Password</Text>
        <Input
          placeholder="Confirm your password"
          isPassword
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <View style={styles.checkboxContainer}>
          <Pressable
            style={[styles.checkbox, isChecked && styles.checkedBox]}
            onPress={() => setIsChecked(!isChecked)}
          >
            {isChecked && <Checkmark />}
          </Pressable>
          <View style={styles.checkboxTextContainer}>
            <Text style={styles.checkboxText}>
              By ticking this box, you agree to our{' '}
              <Text style={styles.highlightedText}>Terms and</Text>
            </Text>
            <Text style={[styles.checkboxText, styles.centeredText]}>
              <Text style={styles.highlightedText}>conditions and</Text>{' '}
              <Text style={styles.highlightedText}>private policy</Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.button, (isChecked && isFormValid) && styles.activeButton]}
          onPress={handleSignUp}
          disabled={!isChecked || !isFormValid}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.alreadyHaveAccountText}>Already have an account?</Text>
          <Text style={styles.signUpText}> Sign In</Text>
        </View>

        <View style={styles.orLogInUsingContainer}>
          <Text style={styles.orLogInUsingText}>or sign in using</Text>
        </View>

        <Image source={googleImage} style={styles.image} />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  text1: {
    fontSize: 24,
    fontWeight: '500',
    color: '#3A3A3A',
    marginBottom: 8,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  text2: {
    fontSize: 14,
    fontWeight: '500',
    color: '#A7A7A7',
    marginBottom: 24,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#A7A7A7',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  inputContainer: {
    width: '100%',
    position: 'relative',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 44,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#A7A7A7',
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#3A3A3A',
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 16,
    marginBottom: 24,
  },
  checkboxTextContainer: {
    flex: 1,
  },
  checkbox: {
    width: 14,
    height: 14,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#0560FA',
    marginRight: 11,
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
  checkboxText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#3A3A3A',
    textAlign: 'left',
    flexShrink: 1,
    lineHeight: 14,
  },
  centeredText: {
    textAlign: 'center',
  },
  highlightedText: {
    color: '#EBBC2E',
  },
  button: {
    width: 342,
    height: 46,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A7A7A7',
    marginBottom: 16,
  },
  activeButton: {
    backgroundColor: '#0560FA',
  },
  buttonText: {
    width: 56,
    height: 16,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 16,
    color: '#FFFFFF',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
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
    marginBottom: 16,
  },
  orLogInUsingText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#A7A7A7',
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
