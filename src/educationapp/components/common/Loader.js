// components/common/Loader.js
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function Loader({
    loading = true,
    text = 'Loading...',
    size = 'large',
    color = '#4a90e2',
    fullScreen = false,
    style = {}
}) {
    if (!loading) return null;

    return (
        <View style={[
            styles.container,
            fullScreen ? styles.fullScreen : {},
            style
        ]}>
            <ActivityIndicator size={size} color={color} />
            {text && <Text style={styles.text}>{text}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 999,
    },
    text: {
        marginTop: 10,
        color: '#666',
        fontSize: 14,
    },
});
