import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { videos } from '../../data/videos';

export default function VideoList({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderVideoItem = ({ item }) => (
        <TouchableOpacity
            style={styles.videoCard}
            onPress={() => navigation.navigate('VideoDetail', { videoId: item.id, title: item.title })}
        >
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <View style={styles.videoInfo}>
                <Text style={styles.videoTitle}>{item.title}</Text>
                <Text style={styles.videoSubtitle}>{item.subject} • {item.instructor}</Text>
                <View style={styles.videoMeta}>
                    <Text style={styles.videoDuration}>
                        <Ionicons name="time-outline" size={14} /> {item.duration}
                    </Text>
                    <Text style={styles.videoDate}>{item.dateAdded}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#777" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search videos..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                {searchQuery ? (
                    <TouchableOpacity onPress={() => setSearchQuery('')}>
                        <Ionicons name="close-circle" size={20} color="#777" />
                    </TouchableOpacity>
                ) : null}
            </View>

            <FlatList
                data={filteredVideos}
                keyExtractor={item => item.id}
                renderItem={renderVideoItem}
                contentContainerStyle={styles.listContainer}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No videos found</Text>
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        height: 50,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: '100%',
    },
    listContainer: {
        padding: 15,
    },
    videoCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 15,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    thumbnail: {
        width: 120,
        height: 90,
    },
    videoInfo: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
    },
    videoTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    videoSubtitle: {
        color: '#555',
        fontSize: 14,
    },
    videoMeta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    videoDuration: {
        color: '#888',
        fontSize: 12,
    },
    videoDate: {
        color: '#888',
        fontSize: 12,
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
