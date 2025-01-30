import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import House from '@/assets/images/Session3/House'; 
import Wallet from '@/assets/images/Session3/Wallet'; 
import Car from '@/assets/images/Session3/Car'; 
import Profile from '@/assets/images/Session3/Profile'; 
import ProfileBlue from '@/assets/images/Session3/ProfileBlue'; 
import Toggle from '@/assets/images/Session3/Toggle'; 
import Group from '@/assets/images/Session3/Group'; 
import Notification from '@/assets/images/Session3/Notification'; 
import Vector from '@/assets/images/Session3/Vector'; 
import TwoPersonLift from '@/assets/images/Session3/TwoPersonLift'; 
import Map from '@/assets/images/Session3/Map'; 
import LogOut from '@/assets/images/Session3/LogOut'; 
import Eye from '@/assets/images/Session2/Eye'; 
import EyeSplash from '@/assets/images/Session2/EyeSlash'; 
import Frame from '@/assets/images/Session3/Frame';

const ProfileScreen = () => {
  const router = useRouter(); 
  const [isBalanceVisible, setIsBalanceVisible] = React.useState(false); 

  const handleToHome = () => {
    router.push('/Session3/Home2');
  };

  const handleCardPress = () => {
    router.push('/Session3/AddPaymentMethod');
  };

  const handleNotificationPress = () => {
    router.push('/Session3/Notification');
  };

  const handleSendAPackageEmptyPress = () => {
    router.push('/Session3/SendApackageEmpty');
  };

  const handleWalletPress = () => {
    router.push('/Session4/Wallet2'); 
  };

  const containerData = [
    { 
      mainText: "Edit Profile", 
      additionalText: "Name, phone no, address, email", 
      icon: <Profile /> 
    },
    { 
      mainText: "Statements & Reports", 
      additionalText: "Download transaction details, orders, deliveries", 
      icon: <Group />,
      onPress: handleSendAPackageEmptyPress
    },
    { 
      mainText: "Notification Settings", 
      additionalText: "Mute, unmute, set location & tracking setting", 
      icon: <Notification />,
      onPress: handleNotificationPress
    },
    { 
      mainText: "Card & Bank account settings", 
      additionalText: "Change cards, delete card details", 
      icon: <Vector />,
      onPress: handleCardPress 
    },
    { 
      mainText: "Referrals", 
      additionalText: "Check no of friends and earn", 
      icon: <TwoPersonLift /> 
    },
    { 
      mainText: "About Us", 
      additionalText: "Know more about us, terms and conditions", 
      icon: <Map /> 
    },
    { 
      mainText: "Log Out", 
      additionalText: "", 
      icon: <LogOut /> 
    } 
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.profileText}>Profile</Text>
      </View>

      <View style={styles.containersWrapper}>
        <View style={styles.topTextContainer}>
          <Image
            source={require('@/assets/images/Session3/Ken.png')} 
            style={styles.kenImage} 
          />
          <View>
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
        <View style={styles.darkModeContainer}>
          <Text style={styles.darkModeText}>Enable dark Mode</Text>
          <View style={styles.toggleIcon}>
            <Toggle />
          </View>
        </View>
        {containerData.map((item, index) => (
          <Pressable
            key={index}
            onPress={item.onPress} 
          >
            <View 
              style={[
                styles.customContainer,
                index === 6 && styles.lastContainer 
              ]}
            >
              {item.icon && (
                <View style={[
                  styles.iconWrapper,
                  index === 1 && styles.groupIcon,
                  index === 2 && styles.notificationIcon,
                  index === 3 && styles.vectorIcon,
                  index === 4 && styles.twoPersonLiftIcon,
                  index === 5 && styles.mapIcon,
                  index === 6 && styles.logOutIcon 
                ]}>
                  {item.icon}
                </View>
              )}
              <View style={styles.textContainer}>
                <Text style={styles.customContainerText}>{item.mainText}</Text>
                {item.additionalText !== "" && (
                  <Text style={styles.additionalText}>{item.additionalText}</Text>
                )}
              </View>
              <View style={styles.frameIcon}>
                <Frame />
              </View>
            </View>
          </Pressable>
        ))}
      </View>

      <View style={styles.imageContainer}>
        <View style={styles.imageWrapper}>
          <View style={styles.iconContainer}>
            <House />
          </View>
          <Text style={styles.imageLabel}>Home</Text>
        </View>
        <View style={styles.imageWrapper}>
          <Pressable onPress={handleWalletPress}> 
            <View style={styles.iconContainer}>
              <Wallet />
            </View>
            <Text style={styles.imageLabel}>Wallet</Text>
          </Pressable>
        </View>
        <View style={styles.imageWrapper}>
          <View style={styles.iconContainer}>
            <Car />
          </View>
          <Text style={styles.imageLabel}>Track</Text>
        </View>
        <View style={styles.imageWrapper}>
          <View style={styles.profileIndicator} />
          <View style={styles.iconContainer}>
            <ProfileBlue /> 
          </View>
          <Text style={[styles.imageLabel, styles.profileTextBlue]}>Profile</Text> 
        </View>
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
    paddingBottom: 0
  },
  profileHeader: {
    width: 390,
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
    marginBottom: 20, 
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
    marginBottom: 25, 
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
  },
  imageWrapper: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 24, 
    height: 24, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4, 
  },
  imageLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: '#A7A7A7',
  },
  profileTextBlue: {
    color: '#0560FA', 
  },
  profileIndicator: {
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
    marginBottom: 4, 
  },
  containersWrapper: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    marginTop: 10, 
    marginBottom: 10, 
  },
  customContainer: {
    width: 342,
    minHeight: 62, 
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    marginBottom: 12, 
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    paddingHorizontal: 16, 
    paddingVertical: 12, 
  },
  lastContainer: {
    minHeight: 50, 
  },
  iconWrapper: {
    width: 19, 
    height: 19, 
    marginRight: 16, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupIcon: { 
    width: 16,
    height: 22,
  },
  notificationIcon: { 
    width: 20,
    height: 20,
  },
  vectorIcon: { 
    width: 17,
    height: 15,
  },
  twoPersonLiftIcon: { 
    width: 29,
    height: 26,
  },
  mapIcon: { 
    width: 24,
    height: 24,
  },
  logOutIcon: { 
    width: 26,
    height: 24,
  },
  textContainer: {
    flex: 1,
  },
  customContainerText: {
    fontFamily: 'Roboto', 
    fontSize: 16, 
    fontWeight: '500', 
    color: '#3A3A3A', 
  },
  additionalText: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '400',
    color: '#A7A7A7',
    marginTop: 4, 
  },
  darkModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 342, 
    marginBottom: 24, 
    paddingHorizontal: 3, 
  },
  darkModeText: {
    width: 129,
    height: 16,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 16,
    color: '#3A3A3A',
  },
  toggleIcon: {
    width: 40.625, 
    height: 21.125, 
    marginRight: -5, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  topTextContainer: {
    width: 342,
    marginBottom: 16, 
    paddingLeft: 3, 
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  kenImage: {
    width: 60, 
    height: 60, 
    marginRight: 12, 
  },
  helloKenText: {
    width: 132.4296112060547,
    height: 30,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 30,
    color: '#3A3A3A',
    marginBottom: -3, 
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
    marginRight: 5,
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
    marginRight: 85, 
  },
  eyeIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameIcon: {
    width: 3, 
    height: 7, 
    justifyContent: 'center',
    alignItems: 'center',
  },
});