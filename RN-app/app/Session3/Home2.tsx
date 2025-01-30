import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; 
import HouseBlue from '@/assets/images/Session3/HouseBlue'; 
import Wallet from '@/assets/images/Session3/Wallet'; 
import Car from '@/assets/images/Session3/Car'; 
import Profile from '@/assets/images/Session3/Profile'; 

const Home2 = () => {
  const router = useRouter(); 

  const handleProfilePress = () => {
    router.push('/Session3/ProfileScreen'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.imageWrapper}>
          <View style={styles.houseIndicator} /> 
          <View style={styles.iconContainer}>
            <HouseBlue /> 
          </View>
          <Text style={[styles.imageLabel, styles.homeTextBlue]}>Home</Text> 
        </View>
        <View style={styles.imageWrapper}>
          <View style={styles.iconContainer}>
            <Wallet />
          </View>
          <Text style={styles.imageLabel}>Wallet</Text>
        </View>
        <View style={styles.imageWrapper}>
          <View style={styles.iconContainer}>
            <Car />
          </View>
          <Text style={styles.imageLabel}>Track</Text>
        </View>
        <TouchableOpacity style={styles.imageWrapper} onPress={handleProfilePress}>
          <View style={styles.iconContainer}>
            <Profile />
          </View>
          <Text style={styles.imageLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 25, 
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
  homeTextBlue: {
    color: '#0560FA', 
  },
  houseIndicator: {
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
});