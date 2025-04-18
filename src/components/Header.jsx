// src/components/common/Header.js
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.time}>Task Home</Text>
            <View style={styles.rightContainer}>
                <View style={styles.coinsContainer}>
                <Text style={styles.coinText}>121880.35</Text>
                    <Image
                        source={require('../assets/images/star.webp')}
                        style={styles.coinIcon}
                    />
                </View>

                <View style={styles.statusIcons}>
                    <View style={styles.balanceContainer}>
                        <Text style={styles.balanceText}>₹2043.00</Text>
                    </View>

                    <View style={styles.notificationContainer}>
                        <Image
                            source={require('../assets/images/notification.png')}
                            style={styles.notificationIcon}
                        />
                        <View style={styles.notificationBadge}>
                            <Text style={styles.badgeText}>1</Text>
                        </View>
                    </View>

                    <View style={styles.profileContainer}>
                        <Image
                            source={require('../assets/images/userLogo.jpeg')}
                            style={styles.profileIcon}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#4169e1',
        paddingTop: 4,
        paddingBottom: 8,
        paddingHorizontal: 16,
    },
    time: {
        color: 'white',
        fontWeight:'500',
        fontSize: 16,
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    coinsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 16,
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginRight: 8,
        gap:5,
    },
    coinIcon: {
        width: 16,
        height: 16,
        marginRight: 4,
    },
    coinText: {
        color: 'white',
        fontSize: 12,
    },
    statusIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    balanceContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 16,
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginRight: 8,
    },
    balanceText: {
        color: 'white',
        fontSize: 12,
    },
    notificationContainer: {
        position: 'relative',
        marginRight: 8,
    },
    notificationIcon: {
        width: 20,
        height: 20,
    },
    notificationBadge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    profileContainer: {
        marginRight: 8,
    },
    profileIcon: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#ffc107',
    },
    batteryContainer: {
        marginLeft: 4,
    },
    batteryIcon: {
        width: 20,
        height: 20,
    },
});

export default Header;
