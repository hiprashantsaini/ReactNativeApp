// screens/courses/CoursesList.js
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
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
import { categories, courses } from '../../data/course-data';
// import { categories, courses } from '../../data/courses-data';

const CourseCard = ({ course, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{ uri: course.thumbnail }} style={styles.thumbnail} />
            {/* <Ionicons name="book-outline" color="purple" size={105} style={styles.courseThumbnail}/> */}
            <View style={styles.cardContent}>
                <Text style={styles.title} numberOfLines={2}>{course.title}</Text>
                <Text style={styles.instructor}>{course.instructor}</Text>
                <View style={styles.ratingContainer}>
                    <Icon name="star" size={16} color="#FFD700" />
                    <Text style={styles.rating}>{course.rating} ({course.studentsEnrolled.toLocaleString()} students)</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>₹{course.price}</Text>
                    <Text style={styles.originalPrice}>₹{course.originalPrice}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const CategoryButton = ({ category, isSelected, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.categoryButton, isSelected && styles.selectedCategory]}
            onPress={onPress}
        >
            <Text style={[styles.categoryText, isSelected && styles.selectedCategoryText]}>
                {category}
            </Text>
        </TouchableOpacity>
    );
};

const CoursesList = () => {
    const navigation = useNavigation();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredCourses, setFilteredCourses] = useState(courses);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredCourses(courses);
        } else {
            setFilteredCourses(courses.filter(course => course.category === selectedCategory));
        }
    }, [selectedCategory]);

    const handleCoursePress = (course) => {
        navigation.navigate('CourseDetail', { course });
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#4a90e2" barStyle="light-content" />

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Our Courses</Text>
            </View>

            {/* Categories ScrollView */}
            <View style={styles.categoriesContainer}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.categoriesScrollView}
                >
                    {categories.map((category, index) => (
                        <CategoryButton
                            key={index}
                            category={category}
                            isSelected={category === selectedCategory}
                            onPress={() => setSelectedCategory(category)}
                        />
                    ))}
                </ScrollView>
            </View>

            {/* Courses FlatList */}
            <FlatList
                data={filteredCourses}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CourseCard course={item} onPress={() => handleCoursePress(item)} />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.coursesList}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No courses available in this category yet.</Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#4a90e2',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    categoriesContainer: {
        backgroundColor: '#fff',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    categoriesScrollView: {
        paddingVertical: 12,
        paddingHorizontal: 10,
    },
    categoryButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        marginHorizontal: 6,
        backgroundColor: '#f0f0f0',
    },
    selectedCategory: {
        backgroundColor: '#4a90e2',
    },
    categoryText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#666',
    },
    selectedCategoryText: {
        color: '#fff',
    },
    coursesList: {
        padding: 12,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 16,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    thumbnail: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    cardContent: {
        padding: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6,
        color: '#333',
    },
    instructor: {
        fontSize: 14,
        color: '#666',
        marginBottom: 6,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    rating: {
        marginLeft: 5,
        fontSize: 14,
        color: '#666',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4a90e2',
        marginRight: 8,
    },
    originalPrice: {
        fontSize: 14,
        color: '#999',
        textDecorationLine: 'line-through',
    },
    emptyContainer: {
        padding: 20,
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
        color: '#666',
    },
    courseThumbnail: {
       marginHorizontal:'auto',
       padding:5,
    },
});

export default CoursesList;
