// screens/courses/CourseDetail.js
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    FlatList,
    Image,
    Modal,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Video from 'react-native-video';

const DemoVideoCard = ({ video, onPress }) => {
    return (
        <TouchableOpacity style={styles.videoCard} onPress={onPress}>
            {/* <Image source={{ uri: video.thumbnail }} style={styles.videoThumbnail} /> */}
            <Image source={{ uri: 'https://courses.iid.org.in/public//uploads/media_manager/628.jpg' }} style={styles.videoThumbnail} />
            <View style={styles.playIconContainer}>
                <Icon name="playcircleo" size={40} color="#fff" />
            </View>
            <View style={styles.videoDurationContainer}>
                <Text style={styles.videoDuration}>{video.duration}</Text>
            </View>
            <View style={styles.videoInfoContainer}>
                <Text style={styles.videoTitle} numberOfLines={2}>{video.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const FeatureItem = ({ feature }) => {
    return (
        <View style={styles.featureItem}>
            <Icon name="check" size={16} color="#4a90e2" />
            <Text style={styles.featureText}>{feature}</Text>
        </View>
    );
};

const CourseDetail = ({ route }) => {
    const { course } = route.params;
    const navigation = useNavigation();
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videoModalVisible, setVideoModalVisible] = useState(false);

    const handleVideoPress = (video) => {
        setSelectedVideo(video);
        setVideoModalVisible(true);
    };

    const closeVideoModal = () => {
        setVideoModalVisible(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#4a90e2" barStyle="light-content" />

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Course Thumbnail */}
                <Image source={{ uri: course.thumbnail }} style={styles.thumbnail} />

                {/* Course Info */}
                <View style={styles.infoSection}>
                    <Text style={styles.title}>{course.title}</Text>
                    <Text style={styles.description}>{course.description}</Text>

                    <View style={styles.instructorRow}>
                        <Icon name="user" size={16} color="#666" />
                        <Text style={styles.instructorText}>Instructor: {course.instructor}</Text>
                    </View>

                    <View style={styles.statsRow}>
                        <View style={styles.statItem}>
                            <Icon name="star" size={16} color="#FFD700" />
                            <Text style={styles.statText}>{course.rating} Rating</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Icon name="team" size={16} color="#666" />
                            <Text style={styles.statText}>{course.studentsEnrolled.toLocaleString()} Students</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Icon name="clockcircleo" size={16} color="#666" />
                            <Text style={styles.statText}>{course.totalHours} Hours</Text>
                        </View>
                    </View>

                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>₹{course.price}</Text>
                        <Text style={styles.originalPrice}>₹{course.originalPrice}</Text>
                        <View style={styles.discountBadge}>
                            <Text style={styles.discountText}>
                                {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.enrollButton}>
                        <Text style={styles.enrollButtonText}>Enroll Now</Text>
                    </TouchableOpacity>
                </View>

                {/* Course Features */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>This Course Includes:</Text>
                    <View style={styles.featuresContainer}>
                        {course.features.map((feature, index) => (
                            <FeatureItem key={index} feature={feature} />
                        ))}
                    </View>
                </View>

                {/* Course Details */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Course Details</Text>
                    <View style={styles.detailsGrid}>
                        <View style={styles.detailItem}>
                            <Icon name="book" size={20} color="#4a90e2" />
                            <Text style={styles.detailLabel}>Lectures</Text>
                            <Text style={styles.detailValue}>{course.totalLectures}</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Icon name="clockcircleo" size={20} color="#4a90e2" />
                            <Text style={styles.detailLabel}>Duration</Text>
                            <Text style={styles.detailValue}>{course.totalHours} hours</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Icon name="calendar" size={20} color="#4a90e2" />
                            <Text style={styles.detailLabel}>Updated</Text>
                            <Text style={styles.detailValue}>{course.lastUpdated}</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Icon name="message1" size={20} color="#4a90e2" />
                            <Text style={styles.detailLabel}>Language</Text>
                            <Text style={styles.detailValue}>{course.language}</Text>
                        </View>
                    </View>
                </View>

                {/* Demo Videos */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Demo Lectures</Text>
                    <FlatList
                        data={course.demoVideos}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <DemoVideoCard video={item} onPress={() => handleVideoPress(item)} />
                        )}
                        contentContainerStyle={styles.videosList}
                    />
                </View>
            </ScrollView>
            {/* Video Player Modal */}
            <Modal
                visible={videoModalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => {
                    // Ensures back button on Android also closes the modal
                    closeVideoModal();
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.videoPlayerContainer}>
                        <TouchableOpacity style={styles.closeButton} onPress={closeVideoModal}>
                            <Icon name="close" size={24} color="#fff" />
                        </TouchableOpacity>

                        {selectedVideo && (
                            <View style={styles.videoPlayer}>
                                <Text style={styles.videoPlayerTitle}>{selectedVideo.title}</Text>
                                <Video
                                    source={{ uri: selectedVideo.videoUrl }}
                                    style={styles.video}
                                    controls
                                    resizeMode="contain"
                                    paused={false}
                                />
                            </View>
                        )}
                    </View>
                </View>
            </Modal>


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    thumbnail: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    infoSection: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
        marginBottom: 16,
    },
    instructorRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    instructorText: {
        fontSize: 14,
        color: '#666',
        marginLeft: 8,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statText: {
        fontSize: 12,
        color: '#666',
        marginLeft: 4,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4a90e2',
        marginRight: 10,
    },
    originalPrice: {
        fontSize: 18,
        color: '#999',
        textDecorationLine: 'line-through',
        marginRight: 10,
    },
    discountBadge: {
        backgroundColor: '#e53935',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    discountText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    enrollButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    enrollButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    sectionContainer: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 8,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
    },
    featuresContainer: {
        marginBottom: 8,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    featureText: {
        fontSize: 14,
        color: '#666',
        marginLeft: 10,
    },
    detailsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    detailItem: {
        width: '48%',
        backgroundColor: '#f9f9f9',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    detailLabel: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
    detailValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 2,
    },
    videosList: {
        paddingRight: 16,
    },
    videoCard: {
        width: 240,
        marginRight: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    videoThumbnail: {
        width: '100%',
        height: 135,
        resizeMode: 'cover',
    },
    playIconContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoDurationContainer: {
        position: 'absolute',
        bottom: 40,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    videoDuration: {
        color: '#fff',
        fontSize: 12,
    },
    videoInfoContainer: {
        padding: 10,
    },
    videoTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoPlayerContainer: {
        width: '90%',
        backgroundColor: '#000',
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        padding: 5,
    },
    video: {
        width: '100%',
        height: 200,
        backgroundColor: '#000',
    },
    videoPlayer: {
        width: '100%',
    },
    videoPlayerTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 16,
    },
    videoPlaceholder: {
        height: 200,
        position: 'relative',
    },
    videoPlaceholderImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    videoPlaceholderOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoPlaceholderText: {
        color: '#fff',
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
});

export default CourseDetail;
