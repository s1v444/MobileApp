import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import ArrowSquareRight from '@/assets/images/Session3/ArrowSquareRight';

const SendAPackage = () => {
    const router = useRouter();

    const handleArrowSquareRightPress = () => {
        router.push('/Session4/TrackingPackage');
    };

    const handleSuccessfulPress = () => {
        router.push('/Session4/DeliverySuccessful');
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.profileHeaderContent}>
                    <Pressable onPress={handleArrowSquareRightPress} style={styles.arrowContainer}>
                        <ArrowSquareRight />
                    </Pressable>
                    <View style={styles.centerContainer}>
                        <Text style={styles.profileText}>Send a package</Text>
                    </View>
                </View>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.packageInfoText}>Package Information</Text>
                <Text style={styles.originDetailsText}>Origin details</Text>
                <Text style={styles.locationText}>Mbaraugba, Ovom Amaa Asaa, Abia state</Text>
                <Text style={styles.phoneText}>+234 56543 96854</Text>
                <Text style={styles.destinationDetailsText}>Destination details</Text>
                <Text style={styles.addressText}>19 1. Ademola Alabi close, lagos</Text>
                <Text style={styles.phoneText}>+234 70644 80655</Text>
                <Text style={styles.otherDetailsText}>Other details</Text>
                <View style={styles.packageItemsContainer}>
                    <Text style={styles.packageItemsText}>Package Items</Text>
                    <Text style={styles.packageItemsDescriptionText}>Books and stationary, Garri Ngwa</Text>
                </View>
                <View style={styles.packageItemsContainer}>
                    <Text style={styles.packageItemsText}>Weight of items</Text>
                    <Text style={styles.packageItemsDescriptionText}>1000kg</Text>
                </View>
                <View style={styles.packageItemsContainer}>
                    <Text style={styles.packageItemsText}>Worth of Items</Text>
                    <Text style={styles.packageItemsDescriptionText}>N50,000</Text>
                </View>
                <View style={styles.packageItemsContainer}>
                    <Text style={styles.packageItemsText}>Tracking Number</Text>
                    <Text style={styles.packageItemsDescriptionText}>R-7458-4567-4434-5854</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.chargesContainer}>
                    <Text style={styles.chargesText}>Charges</Text>
                </View>
                <View style={styles.deliveryChargesContainer}>
                    <Text style={styles.deliveryChargesText}>Delivery Charges</Text>
                    <Text style={styles.deliveryChargesAmount}>N2,500.00</Text>
                </View>
                <View style={styles.deliveryChargesContainer}>
                    <Text style={styles.deliveryChargesText}>Instant delivery</Text>
                    <Text style={styles.deliveryChargesAmount}>N300.00</Text>
                </View>
                <View style={styles.deliveryChargesContainer}>
                    <Text style={styles.deliveryChargesText}>Tax and Service Charges</Text>
                    <Text style={styles.deliveryChargesAmount}>N200.00</Text>
                </View>
                
                <View style={styles.divider} />

                <View style={styles.deliveryChargesContainer}>
                    <Text style={styles.deliveryChargesText}>Package total</Text>
                    <Text style={styles.deliveryChargesAmount}>N3000.00</Text>
                </View>
                <View style={styles.deliveryInstructionsContainer}>
                    <Text style={styles.deliveryInstructionsText}>
                        Click on delivered for successful delivery and rate rider or
                    </Text>
                    <Text style={styles.deliveryInstructionsText}>
                        report missing item
                    </Text>
                </View>

                <View style={styles.buttonsContainer}>
                    <Pressable style={styles.reportButton}>
                        <Text style={styles.reportButtonText}>Report</Text>
                    </Pressable>
                    <Pressable style={styles.successfulButton} onPress={handleSuccessfulPress}>
                        <Text style={styles.successfulButtonText}>Successful</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default SendAPackage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF',
        paddingBottom: 0,
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
    profileHeaderContent: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    arrowContainer: {
        marginRight: -10, 
    },
    centerContainer: {
        flex: 1, 
    },
    profileText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#A7A7A7',
        textAlign: 'center',
    },
    detailsContainer: {
        paddingHorizontal: 20,
    },
    packageInfoText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 16,
        color: '#0560FA',
        marginBottom: 10,
    },
    originDetailsText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 16,
        color: '#3A3A3A',
        marginBottom: 5,
    },
    locationText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 16,
        color: '#A7A7A7',
        marginBottom: 5,
    },
    phoneText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 16,
        color: '#A7A7A7',
        marginBottom: 10,
    },
    destinationDetailsText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 16,
        color: '#3A3A3A',
        marginBottom: 5,
    },
    addressText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 16,
        color: '#A7A7A7',
        marginBottom: 5,
    },
    otherDetailsText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 16,
        color: '#3A3A3A',
        marginBottom: 0, 
    },
    packageItemsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10, 
    },
    packageItemsText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 16,
        color: '#A7A7A7',
    },
    packageItemsDescriptionText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 16,
        textAlign: 'right',
        color: '#EC8000',
    },
    divider: {
        width: 350,
        height: 0,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(167, 167, 167, 1.0)',
        marginTop: 10, 
    },
    chargesContainer: {
        marginTop: 10, 
    },
    chargesText: {
        width: 60,
        height: 16,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 16,
        color: '#0560FA',
    },
    deliveryChargesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10, 
    },
    deliveryChargesText: {
        width: 90,
        height: 16,
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 16,
        color: '#A7A7A7',
    },
    deliveryChargesAmount: {
        width: 55,
        height: 16,
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 16,
        textAlign: 'right',
        color: '#EC8000',
    },
    deliveryInstructionsContainer: {
        marginTop: 20, 
    },
    deliveryInstructionsText: {
        width: 340,
        height: 32,
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 16,
        color: '#2F80ED',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20, 
    },
    reportButton: {
        width: 158,
        height: 48,
        borderRadius: 8,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(5, 96, 250, 1.0)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    reportButtonText: {
        width: 49,
        height: 16,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: 16,
        color: '#0560FA',
    },
    successfulButton: {
        width: 159,
        height: 48,
        borderRadius: 8,
        backgroundColor: '#0560FA',
        justifyContent: 'center',
        alignItems: 'center',
    },
    successfulButtonText: {
        width: 80,
        height: 16,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: 16,
        color: '#FFFFFF',
    },
});