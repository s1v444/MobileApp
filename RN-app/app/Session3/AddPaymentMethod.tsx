import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import ArrowSquareRight from '@/assets/images/Session3/ArrowSquareRight';

const AddPaymentMethod = () => {
    const router = useRouter();
    const [selectedContainer, setSelectedContainer] = React.useState<number | null>(null);

    const handleArrowSquareRightPress = () => {
        router.push('/Session3/ProfileScreen');
    };

    const handleContainerPress = (index: number) => {
        setSelectedContainer(index);
    };

    const handleProceedToPay = () => {
        console.log('Proceed to pay clicked');
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.profileHeaderContent}>
                    <Pressable onPress={handleArrowSquareRightPress} style={styles.arrowContainer}>
                        <ArrowSquareRight />
                    </Pressable>
                    <Text style={styles.profileText}>Add Payment method</Text>
                </View>
            </View>
            <View style={styles.spacer} />
            <Pressable onPress={() => handleContainerPress(0)} style={styles.paymentContainer}>
                <View style={styles.circle}>
                    {selectedContainer === 0 && <View style={styles.selectedCircle} />}
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.paymentTitle}>Pay with wallet</Text>
                    <Text style={styles.paymentSubtitle}>Complete the payment using your e wallet</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => handleContainerPress(1)} style={styles.paymentContainer}>
                <View style={styles.circle}>
                    {selectedContainer === 1 && <View style={styles.selectedCircle} />}
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.paymentTitle}>Credit / debit card</Text>
                    <Text style={styles.paymentSubtitle}>Complete the payment using your debit card</Text>
                </View>
            </Pressable>
            <Pressable onPress={handleProceedToPay} style={styles.proceedButton}>
                <Text style={styles.proceedButtonText}>Proceed to pay</Text>
            </Pressable>
        </View>
    );
};

export default AddPaymentMethod;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF',
        paddingBottom: 105,
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
        marginRight: 75, 
    },
    profileText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#A7A7A7',
    },
    spacer: {
        height: 20, 
    },
    paymentContainer: {
        width: 341,
        height: 84,
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 5,
        shadowOpacity: 1,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
        alignSelf: 'center', 
    },
    circle: {
        width: 12,
        height: 12,
        borderRadius: 50,
        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: 'rgba(61, 147, 249, 1.0)',
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedCircle: {
        width: 9,
        height: 9,
        borderRadius: 50,
        backgroundColor: '#0560FA',
    },
    textContainer: {
        flex: 1,
    },
    paymentTitle: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 20,
        color: '#3A3A3A',
        marginBottom: 5,
    },
    paymentSubtitle: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 16,
        color: '#A7A7A7',
    },
    proceedButton: {
        width: 342,
        height: 46,
        borderRadius: 4,
        backgroundColor: '#0560FA',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        bottom: 105, 
        alignSelf: 'center', 
    },
    proceedButtonText: {
        width: 108,
        height: 16,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: 16,
        textAlign: 'center',
        color: '#FFFFFF',
    },
});