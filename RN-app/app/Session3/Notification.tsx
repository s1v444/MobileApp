import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import ArrowSquareRight from '@/assets/images/Session3/ArrowSquareRight';
import Notification2 from '@/assets/images/Session3/Notification2';

const Notification = () => {
    const router = useRouter();
    const handleArrowSquareRightPress = () => {
        router.push('/Session3/ProfileScreen');
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.profileHeaderContent}>
                    <Pressable onPress={handleArrowSquareRightPress} style={styles.arrowContainer}>
                        <ArrowSquareRight />
                    </Pressable>
                    <View style={styles.centerContainer}>
                        <Text style={styles.profileText}>Notification</Text>
                    </View>
                </View>
            </View>
            <View style={styles.notificationIcon}>
                <Notification2 />
            </View>
            <View style={styles.notificationTextContainer}>
                <Text style={styles.notificationText}>You have no notifications</Text>
            </View>
        </View>
    );
};

export default Notification;

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
    notificationIcon: {
        marginTop: 120,
        alignSelf: 'center',
        width: 82,
        height: 82,
    },
    notificationTextContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    notificationText: {
        width: 181,
        height: 16,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 16,
        textAlign: 'center',
        color: '#3A3A3A',
    },
});