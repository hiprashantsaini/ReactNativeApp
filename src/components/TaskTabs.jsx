import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TaskTabs = ({ tabs, activeTab, onTabPress }) => {
    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab}
                    style={[
                        styles.tab,
                        activeTab === tab.split(' ')[0] && styles.activeTab
                    ]}
                    onPress={() => onTabPress(tab.split(' ')[0])}
                >
                    <Text style={[
                        styles.tabText,
                        activeTab === tab.split(' ')[0] && styles.activeTabText
                    ]}>
                        {tab}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
        marginRight: 8,
        backgroundColor: '#f0f0f0',
    },
    activeTab: {
        backgroundColor: '#e6f0ff',
    },
    tabText: {
        color: '#666',
        fontSize: 14,
    },
    activeTabText: {
        color: '#4169e1',
        fontWeight: '500',
    }
});

export default TaskTabs;
