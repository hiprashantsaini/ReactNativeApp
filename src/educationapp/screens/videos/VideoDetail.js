import AsyncStorage from '@react-native-async-storage/async-storage';
import CameraRoll from '@react-native-camera-roll/camera-roll';
import React, { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RNFS from 'react-native-fs';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomVideoPlayer from '../../components/CustomVideoPlayer';
import { videos } from '../../data/videos';

export default function VideoDetail({ route }) {
    const { videoId } = route.params;
    const video = videos.find(v => v.id === videoId);

    const [downloading, setDownloading] = useState(false);
    const [downloadProgress, setDownloadProgress] = useState(0);
    const [isDownloaded, setIsDownloaded] = useState(false);

    useEffect(() => {
        checkDownloadStatus();
    }, []);

    const checkDownloadStatus = async () => {
        try {
            const downloadedVideos = await AsyncStorage.getItem('downloadedVideos');
            if (downloadedVideos !== null) {
                const videos = JSON.parse(downloadedVideos);
                setIsDownloaded(videos.includes(videoId));
            }
        } catch (error) {
            console.error('Error checking download status:', error);
        }
    };

    const requestPermission = async () => {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Storage Permission Required',
                    message: 'App needs access to your storage to download the video',
                }
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } else {
            const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY);
            return result === RESULTS.GRANTED;
        }
    };

    const handleDownload = async () => {
        const hasPermission = await requestPermission();
        if (!hasPermission) {
            Alert.alert('Permission Denied', 'Cannot download without permission');
            return;
        }

        try {
            setDownloading(true);

            const fileName = `${videoId}.mp4`;
            const downloadDest = `${RNFS.CachesDirectoryPath}/${fileName}`;

            const downloadOptions = {
                fromUrl: video.videoUrl,
                toFile: downloadDest,
                progress: res => {
                    const progress = res.bytesWritten / res.contentLength;
                    setDownloadProgress(progress);
                },
                progressDivider: 1,
            };

            const { promise } = RNFS.downloadFile(downloadOptions);
            await promise;

            // Save to camera roll
            await CameraRoll.save(downloadDest, { type: 'video' });

            // Mark as downloaded
            const downloadedVideos = await AsyncStorage.getItem('downloadedVideos');
            let videos = [];
            if (downloadedVideos !== null) {
                videos = JSON.parse(downloadedVideos);
            }
            videos.push(videoId);
            await AsyncStorage.setItem('downloadedVideos', JSON.stringify(videos));

            setIsDownloaded(true);
            setDownloading(false);
            Alert.alert('Success', 'Video downloaded and saved to gallery!');
        } catch (error) {
            console.error('Download error:', error);
            setDownloading(false);
            Alert.alert('Error', 'Failed to download video');
        }
    };

    if (!video) {
        return (
            <View style={styles.container}>
                <Text>Video not found</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            {/* <Video
                source={{ uri: video.videoUrl }}
                resizeMode="contain"
                style={styles.video}
                controls
            /> */}
            <CustomVideoPlayer videoUrl={video.videoUrl }/>

            <View style={styles.infoContainer}>
                <Text style={styles.title}>{video.title}</Text>
                <View style={styles.metaContainer}>
                    <Text style={styles.metaInfo}>{video.subject} • {video.instructor}</Text>
                    <Text style={styles.metaInfo}>{video.duration} • {video.dateAdded}</Text>
                </View>

                <View style={styles.actionButtons}>
                    {!isDownloaded ? (
                        <TouchableOpacity
                            style={styles.downloadButton}
                            onPress={handleDownload}
                            disabled={downloading}
                        >
                            {downloading ? (
                                <Text style={styles.buttonText}>
                                    Downloading... {Math.round(downloadProgress * 100)}%
                                </Text>
                            ) : (
                                <>
                                    <Ionicons name="download-outline" size={18} color="#fff" />
                                    <Text style={styles.buttonText}>Download</Text>
                                </>
                            )}
                        </TouchableOpacity>
                    ) : (
                        <View style={[styles.downloadButton, styles.downloadedButton]}>
                            <Ionicons name="checkmark-circle" size={18} color="#fff" />
                            <Text style={styles.buttonText}>Downloaded</Text>
                        </View>
                    )}
                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.description}>{video.description}</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    video: {
        width: '100%',
        height: 230,
        backgroundColor: '#000',
    },
    infoContainer: {
        padding: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    metaContainer: {
        marginBottom: 15,
    },
    metaInfo: {
        color: '#666',
        fontSize: 14,
        marginBottom: 4,
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    downloadButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4a90e2',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    downloadedButton: {
        backgroundColor: '#4CAF50',
    },
    buttonText: {
        color: '#fff',
        marginLeft: 5,
        fontWeight: '500',
    },
    descriptionContainer: {
        marginTop: 10,
    },
    descriptionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
    description: {
        color: '#333',
        lineHeight: 22,
    },
});

