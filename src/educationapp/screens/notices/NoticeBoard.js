// screens/Notices/NoticeBoard.js
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { notices } from '../../data/notices';

export default function NoticeBoard() {
    const [expandedNoticeId, setExpandedNoticeId] = useState(null);

    const toggleNoticeExpansion = (id) => {
        if (expandedNoticeId === id) {
            setExpandedNoticeId(null);
        } else {
            setExpandedNoticeId(id);
        }
    };

    const renderNoticeItem = ({ item }) => {
        const isExpanded = expandedNoticeId === item.id;

        return (
            <TouchableOpacity
                style={[
                    styles.noticeCard,
                    item.important && styles.importantNotice
                ]}
                onPress={() => toggleNoticeExpansion(item.id)}
                activeOpacity={0.7}
            >
                <View style={styles.noticeHeader}>
                    {item.important && (
                        <View style={styles.importantBadge}>
                            <Text style={styles.importantText}>Important</Text>
                        </View>
                    )}
                    <Text style={styles.noticeDate}>{item.date}</Text>
                </View>

                <Text style={styles.noticeTitle}>{item.title}</Text>

                <Text
                    style={styles.noticeContent}
                    numberOfLines={isExpanded ? undefined : 2}
                >
                    {item.content}
                </Text>

                <View style={styles.expandButton}>
                    <Ionicons
                        name={isExpanded ? 'chevron-up' : 'chevron-down'}
                        size={18}
                        color="#888"
                    />
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={notices}
                keyExtractor={item => item.id}
                renderItem={renderNoticeItem}
                contentContainerStyle={styles.listContainer}
                ListHeaderComponent={
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Notice Board</Text>
                        <Text style={styles.headerSubtitle}>Stay updated with the latest announcements</Text>
                    </View>
                }
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No notices available</Text>
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
    noticeCard: {
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
    importantNotice: {
        borderLeftWidth: 4,
        borderLeftColor: '#ff3b30',
    },
    noticeHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    importantBadge: {
        backgroundColor: '#ffeeee',
        borderRadius: 4,
        paddingVertical: 2,
        paddingHorizontal: 8,
    },
    importantText: {
        color: '#ff3b30',
        fontSize: 12,
        fontWeight: '500',
    },
    noticeDate: {
        color: '#888',
        fontSize: 12,
    },
    noticeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    noticeContent: {
        color: '#555',
        lineHeight: 22,
    },
    expandButton: {
        alignItems: 'center',
        marginTop: 10,
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
