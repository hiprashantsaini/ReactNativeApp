// components/common/Card.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Card({
    title,
    subtitle,
    children,
    onPress,
    style = {},
    contentStyle = {},
    titleStyle = {},
    subtitleStyle = {}
}) {
    const CardComponent = onPress ? TouchableOpacity : View;

    return (
        <CardComponent
            style={[styles.card, style]}
            onPress={onPress}
            activeOpacity={onPress ? 0.7 : 1}
        >
            {(title || subtitle) && (
                <View style={styles.header}>
                    {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
                    {subtitle && <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>}
                </View>
            )}
            <View style={[styles.content, contentStyle]}>
                {children}
            </View>
        </CardComponent>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    header: {
        marginBottom: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
    },
    content: {},
});
