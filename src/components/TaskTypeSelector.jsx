import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TaskTypeSelector = ({ types, selectedType, onSelectType }) => {
    return (
        <View style={styles.container}>
            {types.map((type) => (
                <TouchableOpacity
                    key={type}
                    style={[
                        styles.typeButton,
                        selectedType === type && styles.selectedTypeButton
                    ]}
                    onPress={() => onSelectType(type)}
                >
                    <Image
                        source={require('../assets/images/task-icon.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.typeText}>{type}</Text>
                    <Image
                        source={require('../assets/images/dropDown.png')}
                        style={styles.dropdownIcon}
                    />
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    typeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e6f0ff',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginRight: 8,
        flex: 1,
    },
    selectedTypeButton: {
        backgroundColor: '#d1e3ff',
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    typeText: {
        fontSize: 14,
        color: '#4169e1',
        flex: 1,
    },
    dropdownIcon: {
        width: 12,
        height: 12,
    }
});

export default TaskTypeSelector;
