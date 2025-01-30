import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, Easing } from 'react-native';
import { useRouter } from 'expo-router';

const DeliverySuccessful = () => {
  const router = useRouter();
  const spinValue = new Animated.Value(0);
  const [animationFinished, setAnimationFinished] = React.useState(false);

  const startSpinAnimation = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 2,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setAnimationFinished(true);
    });
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 2],
    outputRange: ['0deg', '720deg'], // 2 * 360 = 720 градусов
  });

  const handleProfilePress = () => {
    router.push('/Session3/Home2');
  };

  React.useEffect(() => {
    startSpinAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {animationFinished ? (
          <>
            <Image
              source={require('@/assets/images/Session4/GoodTick.png')}
              style={styles.Component21} 
            />
            <Text style={styles.deliverySuccessfulText}>Delivery Successful</Text>
            <Text style={styles.deliveryDescriptionText}>Your Item has been delivered successfully</Text>
          </>
        ) : (
          <Animated.Image
            source={require('@/assets/images/Session4/Component21.png')}
            style={[styles.Component21, { transform: [{ rotate: spin }] }]}
          />
        )}
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.rateRiderText}>Rate Rider</Text>
        <View style={styles.starsContainer}>
          <Text style={styles.stars}>★★★★★</Text>
        </View>
        <View style={styles.feedbackContainer}>
          <Text style={styles.feedbackText}>Add feedback</Text>
        </View>
        <TouchableOpacity style={styles.doneButton} onPress={handleProfilePress}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeliverySuccessful;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center', 
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, 
  },
  Component21: {
    width: 118.99999237060547,
    height: 118.99999237060547,
  },
  deliverySuccessfulText: {
    width: 211,
    height: 30,
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 30,
    color: "#3A3A3A",
    textAlign: 'center',
    marginTop: 20,
  },
  deliveryDescriptionText: {
    width: 261,
    height: 16,
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 16,
    color: "#3A3A3A",
    textAlign: 'center',
    marginTop: 10,
  },
  contentContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 24,
    paddingBottom: 60, 
  },
  rateRiderText: {
    width: '100%',
    height: 16,
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 16,
    color: "#0560FA",
    textAlign: 'center',
    marginTop: 20, 
  },
  starsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  stars: {
    fontSize: 24,
    color: "#FFD700",
  },
  feedbackContainer: {
    width: 342,
    height: 50,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, 
  },
  feedbackText: {
    width: 74,
    height: 16,
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 16,
    color: "#A7A7A7",
  },
  doneButton: {
    width: 342,
    height: 46,
    borderRadius: 4,
    backgroundColor: "#0560FA",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, 
  },
  doneButtonText: {
    width: 38,
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