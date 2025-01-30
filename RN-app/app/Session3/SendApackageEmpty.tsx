import * as React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import ArrowSquareRight from '@/assets/images/Session3/ArrowSquareRight';
import Frame60 from '@/assets/images/Session3/Frame60'; 
import Frame59 from '@/assets/images/Session3/Frame59';
import AddSquare from '@/assets/images/Session3/AddSquare';
import Clock from '@/assets/images/Session3/Сlock'; 
import Frame81 from '@/assets/images/Session3/Frame81'; 

const SendAPackageEmpty = () => {
    const router = useRouter();
    const [destinationBlocks, setDestinationBlocks] = React.useState([1]); 

    const handleArrowSquareRightPress = () => {
        router.push('/Session3/ProfileScreen');
    };

    const handleAddDestinationPress = () => {
        setDestinationBlocks([...destinationBlocks, destinationBlocks.length + 1]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.profileHeaderContent}>
                    <Pressable onPress={handleArrowSquareRightPress} style={styles.arrowContainer}>
                        <ArrowSquareRight />
                    </Pressable>
                    <View style={styles.centerContainer}>
                        <Text style={styles.profileText}>Send a Package</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.sectionContainer}>
                    <View style={styles.detailsContainer}>
                        <Frame60/> 
                        <Text style={styles.detailsText}>Origin Details</Text>
                    </View>
                    <View style={styles.inputsContainer}>
                        <TextInput style={styles.input} placeholder="Address" />
                        <TextInput style={styles.input} placeholder="State, Country" />
                        <TextInput style={styles.input} placeholder="Phone number" />
                        <TextInput style={styles.input} placeholder="Others" />
                    </View>
                </View>
                {destinationBlocks.map((block, index) => (
                    <View key={index} style={styles.sectionContainer}>
                        <View style={styles.detailsContainer}>
                            <Frame59/> 
                            <Text style={styles.detailsText}>Destination Details {index + 1}</Text>
                        </View>
                        <View style={styles.inputsContainer}>
                            <TextInput style={styles.input} placeholder="Address" />
                            <TextInput style={styles.input} placeholder="State, Country" />
                            <TextInput style={styles.input} placeholder="Phone number" />
                            <TextInput style={styles.input} placeholder="Others" />
                        </View>
                    </View>
                ))}
                <Pressable onPress={handleAddDestinationPress} style={styles.addDestinationContainer}>
                    <AddSquare/>
                    <Text style={styles.destination}>Add destination</Text>
                </Pressable>
                <View style={styles.sectionContainer}>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailsText}>Package Details</Text>
                    </View>
                    <View style={styles.inputsContainer}>
                        <TextInput style={styles.input} placeholder="package items" />
                        <TextInput style={styles.input} placeholder="Weight of item(kg)" />
                        <TextInput style={styles.input} placeholder="Worth of Items" />
                    </View>
                </View>
                <View style={styles.deliveryTypeContainer}>
                    <Text style={styles.deliveryTypeText}>Select delivery type</Text>
                    <View style={styles.buttonsContainer}>
                        <Pressable style={[styles.button, styles.primaryButton]}>
                            <View style={styles.buttonContent}>
                                <Clock/>
                                <Text style={styles.instantDeliveryText}>Instant delivery</Text> 
                            </View>
                        </Pressable>
                        <Pressable style={[styles.button, styles.secondaryButton]}>
                            <View style={styles.buttonContent}>
                                <Frame81/> 
                                <Text style={styles.scheduledDeliveryText}>Scheduled delivery</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default SendAPackageEmpty;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#A7A7A7',
        textAlign: 'center',
    },
    scrollContainer: {
        flex: 1,
        padding: 20,
    },
    sectionContainer: {
        marginBottom: 30, 
    },
    detailsContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 10, 
    },
    detailsText: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 16,
        color: '#3A3A3A',
        marginLeft: 10, 
    },
    inputsContainer: {
        width: '100%',
    },
    input: {
        width: '100%',
        height: 32,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 5,
        shadowOpacity: 1,
        elevation: 5,
    },
    destination: {
        width: 85,
        height: 16,
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: 16,
        color: "#A7A7A7"
    },
    addDestinationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    deliveryTypeContainer: {
        marginTop: 20,
        marginBottom: 40,
    },
    deliveryTypeText: {
        width: 122,
        height: 16,
        fontFamily: "Roboto",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 16,
        color: "#3A3A3A",
        marginBottom: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: 159,
        height: 75,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    primaryButton: {
        backgroundColor: "#0560FA",
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 5,
        shadowOpacity: 1,
    },
    secondaryButton: {
        backgroundColor: "#FFFFFF",
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 5,
        shadowOpacity: 1,
    },
    buttonContent: {
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingBottom: 10, 
    },
    icon: {
        marginBottom: 10, 
    },
    instantDeliveryText: {
        width: 96,
        height: 16,
        fontFamily: "Roboto",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 16,
        color: "#FFFFFF",
        textAlign: 'center',
    },
    scheduledDeliveryText: {
        width: 119,
        height: 16,
        fontFamily: "Roboto",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 16,
        color: "#A7A7A7",
        textAlign: 'center',
    },
});