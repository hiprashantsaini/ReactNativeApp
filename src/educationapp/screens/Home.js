import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { courses } from '../data/course-data';
import { notices } from '../data/notices';
import { tests } from '../data/tests';
import { videos } from '../data/videos';

// Featured courses for the home page
const featuredCourses = courses.filter(course =>
    ['1', '2', '4'].includes(course.id)
);

const CourseCard = ({ course, onPress }) => {
    return (
        <TouchableOpacity style={styles.courseCard} onPress={onPress}>
            <Image source={{ uri: course.thumbnail }} style={styles.courseThumbnail} />
            <View style={styles.courseContent}>
                <Text style={styles.courseTitle} numberOfLines={2}>{course.title}</Text>
                <View style={styles.courseInstructorRow}>
                    <Text style={styles.courseInstructor}>{course.instructor}</Text>
                </View>
                <View style={styles.courseRatingRow}>
                    <Icon name="star" size={14} color="#FFD700" />
                    <Text style={styles.courseRating}>{course.rating}</Text>
                </View>
                <View style={styles.coursePriceRow}>
                    <Text style={styles.coursePrice}>₹{course.price}</Text>
                    <Text style={styles.courseOriginalPrice}>₹{course.originalPrice}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const SectionHeader = ({ title, onSeeAll }) => {
    return (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <TouchableOpacity onPress={onSeeAll}>
                <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
        </View>
    );
};

export default function Home() {
    const navigation = useNavigation();

    // Get recent videos (last 3)
    const recentVideos = videos.slice(0, 3);

    // Get important notices
    const importantNotices = notices.filter(notice => notice.important);

    const navigateToCourse = (course) => {
        navigation.navigate('CourseDetail', { course });
    };

    const navigateToAllCourses = () => {
        navigation.navigate('Courses');
    };

    const renderAnnouncement = () => (
        <View style={styles.announcementContainer}>
            <Icon name="notification" size={20} color="#fff" />
            <Text style={styles.announcementText}>
                New UPSC 2025 Batch starting from 15th May!
            </Text>
            <TouchableOpacity style={styles.enrollNowButton}>
                <Text style={styles.enrollNowText}>ENROLL NOW</Text>
            </TouchableOpacity>
        </View>
    );

    const renderFeatureButtons = () => (
        <View style={styles.featureButtonsContainer}>
            <TouchableOpacity
                style={styles.featureButton}
                onPress={() => navigation.navigate('Courses')}
            >
                <View style={[styles.featureIconContainer, { backgroundColor: '#ff7043' }]}>
                    <Icon name="book" size={24} color="#fff" />
                </View>
                <Text style={styles.featureButtonText}>Courses</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.featureButton}
                onPress={() => navigation.navigate('Videos')}
            >
                <View style={[styles.featureIconContainer, { backgroundColor: '#42a5f5' }]}>
                    <Icon name="videocamera" size={24} color="#fff" />
                </View>
                <Text style={styles.featureButtonText}>Videos</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.featureButton}
                onPress={() => navigation.navigate('Tests')}
            >
                <View style={[styles.featureIconContainer, { backgroundColor: '#66bb6a' }]}>
                    <Icon name="profile" size={24} color="#fff" />
                </View>
                <Text style={styles.featureButtonText}>Tests</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.featureButton}
                onPress={() => navigation.navigate('Notes')}
            >
                <View style={[styles.featureIconContainer, { backgroundColor: '#ffca28' }]}>
                    <Icon name="filetext1" size={24} color="#fff" />
                </View>
                <Text style={styles.featureButtonText}>Notes</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#4a90e2" barStyle="light-content" />

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* App Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.greetingText}>Hello, Student!</Text>
                        <Text style={styles.taglineText}>What would you like to learn today?</Text>
                    </View>
                    <TouchableOpacity style={styles.profileButton}>
                        <Icon name="user" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

                {/* Announcement Banner */}
                {renderAnnouncement()}

                {/* Quick Access Feature Buttons */}
                {renderFeatureButtons()}

                {/* Featured Courses Section */}
                <View style={styles.section}>
                    <SectionHeader
                        title="Featured Courses"
                        onSeeAll={navigateToAllCourses}
                    />
                    <FlatList
                        data={featuredCourses}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <CourseCard
                                course={item}
                                onPress={() => navigateToCourse(item)}
                            />
                        )}
                        contentContainerStyle={styles.coursesList}
                    />
                </View>

                {/* Recent Videos Section */}
                <View style={styles.section}>
                    <SectionHeader
                        title="Recent Videos"
                        onSeeAll={() => navigation.navigate('Videos')}
                    />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                        {recentVideos.map(video => (
                            <TouchableOpacity
                                key={video.id}
                                style={styles.videoCard}
                                onPress={() => navigation.navigate('VideoDetail', { videoId: video.id, title: video.title })}
                            >
                                <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
                                <View style={styles.videoInfo}>
                                    <Text style={styles.videoTitle} numberOfLines={2}>{video.title}</Text>
                                    <Text style={styles.videoDuration}>{video.duration}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Banner */}
                <TouchableOpacity style={styles.promoBanner}>
                    <Image
                        source={{ uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/special-offer-video-thumbnail-design-template-91cd4a56bbc93f81ea6766a825061cdb_screen.jpg?ts=1634989275' }}
                        style={styles.promoBannerImage}
                    />
                    <View style={styles.promoBannerOverlay}>
                        <Text style={styles.promoBannerHeading}>Special Offer!</Text>
                        <Text style={styles.promoBannerText}>Get 50% off on all UPSC courses</Text>
                        <View style={styles.promoBannerButton}>
                            <Text style={styles.promoBannerButtonText}>CLAIM NOW</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Upcoming Tests Section */}
                <View style={styles.section}>
                    <SectionHeader
                        title="Available Tests"
                        onSeeAll={() => navigation.navigate('Tests')}
                    />
                    {tests.slice(0, 2).map(test => (
                        <TouchableOpacity
                            key={test.id}
                            style={styles.testCard}
                            onPress={() => navigation.navigate('TestAttempt', { testId: test.id, title: test.title })}
                        >
                            <View>
                                <Text style={styles.testTitle}>{test.title}</Text>
                                <Text style={styles.testDescription}>{test.description}</Text>
                                <View style={{ flexDirection: "row", justifyContent:"space-between",alignItems:"center"}}>
                                    <Text style={styles.testInfo}>{test.questions.length} questions • {test.timeLimit} min</Text>
                                    <Text style={styles.startButton}>Start</Text>
                                </View>
                            </View>

                        </TouchableOpacity>
                    ))}
                </View>

                {/* Popular Categories */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Popular Categories</Text>
                    <View style={styles.categoriesGrid}>
                        <TouchableOpacity style={styles.categoryCard}>
                            <Text style={styles.categoryText}>SSC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryCard}>
                            <Text style={styles.categoryText}>UPSC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryCard}>
                            <Text style={styles.categoryText}>Banking</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryCard}>
                            <Text style={styles.categoryText}>Teaching</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Important Notices Section */}
                <View style={styles.section}>
                    <SectionHeader
                        title="Important Notices"
                        onSeeAll={() => navigation.navigate('Notices')}
                    />
                    {importantNotices.map(notice => (
                        <View key={notice.id} style={styles.noticeCard}>
                            <View style={styles.noticeHeader}>
                                <Text style={styles.noticeTitle}>{notice.title}</Text>
                                <Text style={styles.noticeDate}>{notice.date}</Text>
                            </View>
                            <Text style={styles.noticeContent} numberOfLines={2}>{notice.content}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#4a90e2',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    greetingText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    taglineText: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 4,
    },
    profileButton: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    announcementContainer: {
        backgroundColor: '#ff7043',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    announcementText: {
        color: '#fff',
        flex: 1,
        marginLeft: 8,
        fontSize: 14,
    },
    enrollNowButton: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 4,
    },
    enrollNowText: {
        color: '#ff7043',
        fontWeight: 'bold',
        fontSize: 12,
    },
    featureButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#fff',
        marginBottom: 8,
    },
    featureButton: {
        alignItems: 'center',
    },
    featureIconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    featureButtonText: {
        fontSize: 12,
        color: '#666',
    },
    section: {
        padding: 16,
        backgroundColor: '#fff',
        marginBottom: 8,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    seeAllText: {
        color: '#4a90e2',
        fontSize: 14,
    },
    coursesList: {
        paddingRight: 16,
    },
    courseCard: {
        width: 200,
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    courseThumbnail: {
        width: '100%',
        height: 100,
    },
    courseContent: {
        padding: 10,
    },
    courseTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    courseInstructorRow: {
        marginBottom: 5,
    },
    courseInstructor: {
        fontSize: 12,
        color: '#666',
    },
    courseRatingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    courseRating: {
        fontSize: 12,
        color: '#666',
        marginLeft: 5,
    },
    coursePriceRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    coursePrice: {
        fontWeight: 'bold',
        color: '#4a90e2',
        marginRight: 5,
    },
    courseOriginalPrice: {
        fontSize: 12,
        color: '#999',
        textDecorationLine: 'line-through',
    },
    horizontalScroll: {
        flexDirection: 'row',
        marginLeft: -5,
    },
    videoCard: {
        width: 200,
        marginRight: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    thumbnail: {
        width: '100%',
        height: 120,
    },
    videoInfo: {
        padding: 10,
    },
    videoTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    videoDuration: {
        color: '#888',
        fontSize: 12,
    },
    promoBanner: {
        marginBottom: 8,
        position: 'relative',
    },
    promoBannerImage: {
        width: '100%',
        height: 120,
    },
    promoBannerOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#674ea7',
        padding: 16,
        justifyContent: 'center',
    },
    promoBannerHeading: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    promoBannerText: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 12,
    },
    promoBannerButton: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    promoBannerButtonText: {
        color: '#4a90e2',
        fontWeight: 'bold',
        fontSize: 12,
    },
    categoriesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    categoryCard: {
        width: '48%',
        height: 100,
        backgroundColor: '#f972ff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    testCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    testTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    testDescription: {
        color: '#555',
        fontSize: 14,
        marginBottom: 5,
    },
    testInfo: {
        color: '#888',
        fontSize: 12,
    },
    startButton: {
        color: '#4a90e2',
        fontWeight: 'bold',
    },
    noticeCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    noticeHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    noticeTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    noticeDate: {
        color: '#888',
        fontSize: 12,
    },
    noticeContent: {
        color: '#555',
    },
});
