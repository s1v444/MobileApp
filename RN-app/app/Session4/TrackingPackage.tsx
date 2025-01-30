import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import House from '@/assets/images/Session3/House'; 
import Wallet2 from '@/assets/images/Session3/Wallet'; 
import Car from '@/assets/images/Session4/BlueCar'; 
import ProfileBlue from '@/assets/images/Session3/Profile'; 

const TrackingPackage = () => {
  const router = useRouter(); 

  const navigateToHome = () => {
    router.push('/Session3/Home2');
  };

  const navigateToProfile = () => {
    router.push('/Session3/ProfileScreen');
  };

  const navigateToTrack = () => {
    router.push('/Session4/Wallet2'); 
  };

  const navigateToSendPackage = () => {
    router.push('/Session4/SendAPackage'); 
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/Session4/Image1.png')}
        style={styles.topImage}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.trackingNumberText}>Tracking Number</Text>
          <Text style={styles.trackingCodeText}>R-7458-4567-4434-5854</Text>
          <Text style={styles.packageStatusText}>Package Status</Text>
          <View style={styles.statusContainer}>
            <Image
              source={require('@/assets/images/Session4/Frame178.png')}
              style={styles.statusImage}
            />
            <View style={styles.textBlock}>
              <Text style={styles.additionalText1}>Courier requested</Text>
              <Text style={styles.additionalText2}>July 7 2022 08:00am</Text>
              <Text style={styles.additionalText1}>Package ready for delivery</Text>
              <Text style={styles.additionalText2}>July 7 2022 09:00am</Text>
              <Text style={styles.additionalText1}>Package in transit</Text>
              <Text style={styles.additionalText2}>July 7 2022 10:00am</Text>
              <Text style={styles.additionalText1}>Package delivered</Text>
              <Text style={styles.additionalText2}>July 7 2022 11:00am</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={navigateToSendPackage}>
          <Text style={styles.buttonText}>View Package Info</Text>
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        <Pressable onPress={navigateToHome} style={styles.imageWrapper}>
          <View style={styles.iconContainer}>
            <House />
          </View>
          <Text style={styles.imageLabel}>Home</Text>
        </Pressable>
        <Pressable onPress={navigateToTrack} style={styles.imageWrapper}>
          <View style={styles.iconContainer}>
            <Wallet2 />
          </View>
          <Text style={styles.imageLabel}>Wallet</Text> 
        </Pressable>
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

export default TrackingPackage;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    backgroundColor: '#FFFFFF',
    paddingBottom: 20, 
  },
  topImage: {
    width: '100%',
    height: 300, 
    resizeMode: 'cover', 
  },
  scrollContainer: {
    paddingHorizontal: 24,
  },
  textContainer: {
    marginTop: 20, 
  },
  trackingNumberText: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 16,
    color: "#3A3A3A",
    marginBottom: 16, 
  },
  trackingCodeText: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 20,
    color: "#0560FA",
    marginTop: 8, 
    marginBottom: 16, 
  },
  packageStatusText: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 16,
    color: "#A7A7A7",
    marginTop: 8, 
    marginBottom: 24, 
  },
  statusContainer: {
    flexDirection: 'row',
  },
  statusImage: {
    width: 14.000000953674316, 
    height: 158, 
    marginRight: 12, 
    resizeMode: 'contain', 
  },
  textBlock: {
    flex: 1,
  },
  additionalText1: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 16,
    color: "#A7A7A7",
    marginBottom: 8, 
  },
  additionalText2: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 16,
    color: "#EC8000",
    marginBottom: 8, 
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
  buttonContainer: {
    position: 'absolute',
    bottom: 120, 
    alignSelf: 'center', 
  },
  button: {
    width: 342,
    height: 46,
    borderRadius: 4,
    backgroundColor: "#0560FA",
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 1.0)",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    width: 134,
    height: 16,
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 16,
    textAlign: "center",
    color: "#FFFFFF",
  },
});