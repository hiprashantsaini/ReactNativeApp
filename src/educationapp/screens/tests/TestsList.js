// screens/Tests/TestsList.js
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { tests } from '../../data/tests';

export default function TestsList({ navigation }) {
    const renderTestItem = ({ item }) => (
        <TouchableOpacity
            style={styles.testCard}
            onPress={() => navigation.navigate('TestAttempt', { testId: item.id, title: item.title })}
        >
            <View style={styles.testInfo}>
                <Text style={styles.testTitle}>{item.title}</Text>
                <Text style={styles.testDescription}>{item.description}</Text>
                <View style={styles.testMeta}>
                    <Text style={styles.testMetaText}>
                        <Ionicons name="help-circle-outline" size={14} /> {item.questions.length} questions
                    </Text>
                    <Text style={styles.testMetaText}>
                        <Ionicons name="time-outline" size={14} /> {item.timeLimit} min
                    </Text>
                    <Text style={styles.testMetaText}>
                        <Ionicons name="calendar-outline" size={14} /> {item.dateAdded}
                    </Text>
                </View>
            </View>
            <View style={styles.startTestButton}>
                <Text style={styles.startTestText}>Start Test</Text>
                <Ionicons name="arrow-forward" size={16} color="#fff" />
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={tests}
                keyExtractor={item => item.id}
                renderItem={renderTestItem}
                contentContainerStyle={styles.listContainer}
                ListHeaderComponent={
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Available Tests</Text>
                        <Text style={styles.headerSubtitle}>Take any test to assess your knowledge</Text>
                    </View>
                }
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No tests available</Text>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    headerSubtitle: {
        color: '#666',
        fontSize: 14,
    },
    listContainer: {
        padding: 15,
    },
    testCard: {
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
    testInfo: {
        marginBottom: 15,
    },
    testTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    testDescription: {
        color: '#555',
        fontSize: 14,
        marginBottom: 12,
    },
    testMeta: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    testMetaText: {
        color: '#777',
        fontSize: 12,
        marginRight: 15,
    },
    startTestButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4a90e2',
        paddingVertical: 10,
        borderRadius: 5,
    },
    startTestText: {
        color: '#fff',
        fontWeight: '500',
        marginRight: 5,
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
    },
    emptyText: {
        color: '#888',
        fontSize: 16,
    },
});
