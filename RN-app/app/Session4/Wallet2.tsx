import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import House from '@/assets/images/Session3/House'; 
import Wallet2 from '@/assets/images/Session4/Wallet2'; 
import Car from '@/assets/images/Session3/Car'; 
import ProfileBlue from '@/assets/images/Session3/Profile'; 
import Eye from '@/assets/images/Session2/Eye'; 
import EyeSplash from '@/assets/images/Session2/EyeSlash'; 
import Frame91 from '@/assets/images/Session4/Frame91'; 
import Frame92 from '@/assets/images/Session4/Frame92'; 
import Frame93 from '@/assets/images/Session4/Frame93'; 

const ProfileScreen = () => {
  const router = useRouter(); 
  const [isBalanceVisible, setIsBalanceVisible] = React.useState(false); 

  const navigateToHome = () => {
    router.push('/Session3/Home2');
  };

  const navigateToProfile = () => {
    router.push('/Session3/ProfileScreen');
  };

  const navigateToTrack = () => {
    router.push('/Session4/TrackingPackage'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.profileText}>Wallet</Text>
      </View>
      <View style={styles.topTextContainer}>
        <Image
          source={require('@/assets/images/Session3/Ken.png')} 
          style={styles.kenImage} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.helloKenText}>Hello Ken</Text>
          <View style={styles.balanceContainer}>
            <Text style={styles.currentBalanceText}>Current balance:</Text>
            <Text style={styles.balanceAmountText}>
              {isBalanceVisible ? 'N10,712:00' : '*******'} 
            </Text>
            <Pressable
              onPress={() => setIsBalanceVisible(!isBalanceVisible)} 
              style={styles.eyeIcon}
            >
              {isBalanceVisible ? <EyeSplash /> : <Eye />} 
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.newElementContainer}>
        <Text style={styles.topUpText}>Top Up</Text>
        <View style={styles.bottomTextContainer}>
          <View style={styles.iconTextWrapper}>
            <Frame91 /> 
            <Text style={styles.bottomText}>Bank</Text>
          </View>
          <View style={styles.iconTextWrapper}>
            <Frame92 /> 
            <Text style={styles.bottomText}>Transfer</Text>
          </View>
          <View style={styles.iconTextWrapper}>
            <Frame93 /> 
            <Text style={styles.bottomText}>Card</Text>
          </View>
        </View>
      </View>

      <View style={styles.transactionHistoryContainer}>
        <Text style={styles.transactionHistoryText}>Transaction History</Text>
      </View>
      {[...Array(6)].map((_, index) => (
        <View key={index} style={styles.transactionItemContainer}>
          <View style={styles.transactionItemLeft}>
            <Text style={styles.transactionAmount}>-N3,000.00</Text>
            <Text style={styles.transactionDescription}>Delivery fee</Text>
          </View>
          <Text style={styles.transactionDate}>July 7, 2022</Text>
        </View>
      ))}

      <View style={styles.imageContainer}>
        <Pressable onPress={navigateToHome} style={styles.imageWrapper}>
          <View style={styles.iconContainer}>
            <House />
          </View>
          <Text style={styles.imageLabel}>Home</Text>
        </Pressable>
        <View style={styles.imageWrapper}>
          <View style={styles.walletIndicator} /> 
          <View style={styles.iconContainer}>
            <Wallet2 />
          </View>
          <Text style={[styles.imageLabel, styles.walletTextBlue]}>Wallet</Text> 
        </View>
        <Pressable onPress={navigateToTrack} style={styles.imageWrapper}>
          <View style={styles.iconContainer}>
            <Car />
          </View>
          <Text style={styles.imageLabel}>Track</Text>
        </Pressable>
        <Pressable onPress={navigateToProfile} style={styles.imageWrapper}>
          <View style={styles.iconContainer}>
            <ProfileBlue /> 
          </View>
          <Text style={styles.imageLabel}>Profile</Text> 
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    backgroundColor: '#FFFFFF',
    paddingBottom: 20, 
  },
  profileHeader: {
    width: '100%',
    height: 108,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.15)', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5, 
    shadowOpacity: 1, 
    elevation: 5, 
    marginBottom: 30, 
    paddingTop: 70, 
  },
  profileText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#A7A7A7',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30, 
    backgroundColor: '#FFFFFF', 
    shadowColor: 'rgba(0, 0, 0, 0.05)', 
    shadowOffset: {
      width: 0,
      height: -4, 
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 5, 
    paddingHorizontal: 24,
    position: 'absolute', 
    bottom: 0, 
  },
  imageWrapper: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 24, 
    height: 24, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8, 
  },
  imageLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: '#A7A7A7',
  },
  walletTextBlue: {
    color: '#0560FA', 
  },
  walletIndicator: {
    width: 35,
    height: 2,
    borderRadius: 20,
    backgroundColor: '#0560FA',
    shadowColor: 'rgba(5, 96, 250, 0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    marginBottom: 8, 
  },
  topTextContainer: {
    width: '100%',
    marginBottom: 24, 
    paddingLeft: 24, 
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  kenImage: {
    width: 60, 
    height: 60, 
    marginRight: 16, 
  },
  textContainer: {
    flex: 1, 
  },
  helloKenText: {
    width: '100%',
    height: 30,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 30,
    color: '#3A3A3A',
    marginBottom: 4, 
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  currentBalanceText: {
    width: 88,
    height: 16,
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    marginRight: 8,
    lineHeight: 16,
    color: '#3A3A3A',
  },
  balanceAmountText: {
    width: 63,
    height: 16,
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 16,
    color: '#0560FA',
    marginRight: 80, 
  },
  eyeIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newElementContainer: {
    width: 341.4285888671875,
    height: 116,
    borderRadius: 8,
    backgroundColor: '#CFCFCF',
    alignSelf: 'center',
    marginTop: 10, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  topUpText: {
    width: 51,
    height: 16,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 16,
    color: '#3A3A3A',
    marginBottom: 20, 
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', 
  },
  iconTextWrapper: {
    alignItems: 'center',
    marginHorizontal: 20, 
  },
  bottomText: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 16,
    color: '#3A3A3A',
  },
  transactionHistoryContainer: {
    width: '100%',
    paddingLeft: 24,
    marginTop: 24, 
  },
  transactionHistoryText: {
    width: 176,
    height: 20,
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 20,
    color: '#3A3A3A',
  },
  transactionItemContainer: {
    width: 342,
    height: 44,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom:18 , 
    alignSelf: 'center',
  },
  transactionItemLeft: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  transactionAmount: {
    width: 80,
    height: 16,
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 16,
    textAlign: "right",
    color: "#ED3A3A",
  },
  transactionDescription: {
    width: 63,
    height: 16,
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 16,
    color: "#3A3A3A",
  },
  transactionDate: {
    width: 64,
    height: 16,
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 16,
    color: "#A7A7A7",
  },
});