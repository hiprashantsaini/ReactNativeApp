// src/components/navigation/FooterNav.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FooterNav = ({ activeTab }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.tabItem}>
                <Image
                    source={require('../assets/images/home.png')}
                    style={styles.tabIcon}
                />
            </TouchableOpacity>

            <View style={styles.centerContainer}>
                <TouchableOpacity style={styles.centerButton} onPress={() => navigation.navigate('TaskList')}>
                    <Image
                        source={require('../assets/images/task-icon.png')}
                        style={styles.centerIcon}
                    />
                </TouchableOpacity>
                <Text style={styles.centerText}>Tasks</Text>
            </View>

            <TouchableOpacity style={styles.tabItem}>
                <Image
                    source={require('../assets/images/games.jpg')}
                    style={styles.tabIcon}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 64,
        backgroundColor: '#4169e1',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
    },
    tabIcon: {
        width: 30,
        height: 30,
        borderRadius: 25,
        padding: 10,
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: -20,
    },
    centerButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#4169e1',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    centerIcon: {
        width: 24,
        height: 24,
        tintColor: 'white',
    },
    centerText: {
        color: 'white',
        fontSize: 12,
        marginTop: 4,
    }
});

export default FooterNav;
