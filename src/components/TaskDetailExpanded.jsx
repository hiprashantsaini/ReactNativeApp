import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const TaskDetailExpanded = ({ task }) => {
    const [activeTab, setActiveTab] = useState('Details');

    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'Details' && styles.activeTab
                    ]}
                    onPress={() => setActiveTab('Details')}
                >
                    <Text style={[
                        styles.tabText,
                        activeTab === 'Details' && styles.activeTabText
                    ]}>Details</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'Earnings' && styles.activeTab
                    ]}
                    onPress={() => setActiveTab('Earnings')}
                >
                    <Text style={[
                        styles.tabText,
                        activeTab === 'Earnings' && styles.activeTabText
                    ]}>Earnings</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'Disclaimer' && styles.activeTab
                    ]}
                    onPress={() => setActiveTab('Disclaimer')}
                >
                    <Text style={[
                        styles.tabText,
                        activeTab === 'Disclaimer' && styles.activeTabText
                    ]}>Disclaimer</Text>
                </TouchableOpacity>
            </View>

            {activeTab === 'Details' && (
                <View style={styles.contentContainer}>
                    <Text style={styles.sectionTitle}>Task Description</Text>
                    <Text style={styles.description}>{task.description}</Text>

                    <View style={styles.actionsContainer}>
                        <TouchableOpacity style={styles.startButton}>
                            <Text style={styles.startButtonText}>Start Task</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.shareButton}>
                            <Text style={styles.shareButtonText}>Share</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.submitContainer}>
                        <TouchableOpacity style={styles.chooseFileButton}>
                            <Text style={styles.chooseFileText}>Choose File</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={styles.submitText}>Submit Task</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {activeTab === 'Earnings' && (
                <View style={styles.contentContainer}>
                    <Text style={styles.sectionTitle}>Earnings Information</Text>
                    <Text style={styles.description}>Complete this task to earn {task.points} points.</Text>
                </View>
            )}

            {activeTab === 'Disclaimer' && (
                <View style={styles.contentContainer}>
                    <Text style={styles.sectionTitle}>Disclaimer</Text>
                    <Text style={styles.description}>Terms and conditions apply. Rewards are subject to verification.</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        overflow: 'hidden',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    tabContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: '#4169e1',
    },
    tabText: {
        fontSize: 14,
        color: '#666',
    },
    activeTabText: {
        color: 'white',
        fontWeight: '500',
    },
    contentContainer: {
        padding: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        color: '#333',
        marginBottom: 16,
    },
    actionsContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    startButton: {
        flex: 1,
        backgroundColor: '#4caf50',
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginRight: 8,
    },
    startButtonText: {
        color: 'white',
        fontWeight: '500',
    },
    shareButton: {
        flex: 1,
        backgroundColor: '#2196f3',
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginLeft: 8,
    },
    shareButtonText: {
        color: 'white',
        fontWeight: '500',
    },
    submitContainer: {
        flexDirection: 'row',
    },
    chooseFileButton: {
        flex: 1,
        backgroundColor: '#9c27b0',
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginRight: 8,
    },
    chooseFileText: {
        color: 'white',
        fontWeight: '500',
    },
    submitButton: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginLeft: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    submitText: {
        color: '#666',
        fontWeight: '500',
    },
});

export default TaskDetailExpanded;
