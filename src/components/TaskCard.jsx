import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import TaskDetailExpanded from './TaskDetailExpanded';

const TaskCard = ({ task, isExpanded, onToggleExpand, onCardPress }) => {
    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={onCardPress}
                style={[styles.card, isExpanded && styles.expandedCard]}
            >
                <View style={styles.cardHeader}>
                    <View style={styles.logoContainer}>
                        {task.logo ? (
                            <Image source={task.logo} style={styles.logo} />
                        ) : (
                            <View style={styles.placeholderLogo} />
                        )}
                    </View>

                    <View style={styles.cardContent}>
                        <View style={styles.row}>
                            <Text style={styles.cardTitle}>{task.title}</Text>
                        </View>
                        <Text style={styles.taskId}>Task ID - {task.taskId}</Text>

                        <View style={styles.metaContainer}>
                            <View style={styles.pointsContainer}>
                                <Image
                                    source={require('../assets/images/star.webp')}
                                    style={styles.metaIcon}
                                />
                                <Text style={styles.metaText}>{task.points} Points</Text>
                            </View>

                            <View style={styles.separator} />

                            <View style={styles.timeContainer}>
                                <Image
                                    source={require('../assets/images/clockIcon.png')}
                                    style={styles.metaIcon}
                                />
                                <Text style={styles.metaText}>{task.time}</Text>
                            </View>

                            <View style={styles.separator} />

                            <View style={styles.usersContainer}>
                                <Image
                                    source={require('../assets/images/usersIcon.jpg')}
                                    style={styles.metaIcon}
                                />
                                <Text style={styles.metaText}>{task.completedUsers}/{task.totalUsers} Users</Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.expandButton}
                        onPress={(e) => {
                            e.stopPropagation();
                            onToggleExpand();
                        }}
                    >
                        <Image
                            source={
                                isExpanded
                                    ? require('../assets/images/chevron-up.webp')
                                    : require('../assets/images/chevron-down.webp')
                            }
                            style={styles.expandIcon}
                        />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

            {isExpanded && <TaskDetailExpanded task={task} />}
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 16,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    expandedCard: {
        backgroundColor: '#f5f5f5',
    },
    cardHeader: {
        flexDirection: 'row',
        padding: 16,
    },
    logoContainer: {
        width: 50,
        height: 50,
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 8,
    },
    placeholderLogo: {
        width: 40,
        height: 40,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
    },
    cardContent: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    taskId: {
        fontSize: 12,
        color: '#666',
        marginBottom: 8,
    },
    metaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pointsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    usersContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    metaIcon: {
        width: 14,
        height: 14,
        marginRight: 4,
    },
    metaText: {
        fontSize: 12,
        color: '#666',
    },
    separator: {
        width: 1,
        height: 12,
        backgroundColor: '#ddd',
        marginHorizontal: 8,
    },
    expandButton: {
        padding: 8,
    },
    expandIcon: {
        width: 16,
        height: 16,
    }
});

export default TaskCard;
