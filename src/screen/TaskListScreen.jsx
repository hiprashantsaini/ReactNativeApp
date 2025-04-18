import React, { useState } from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import FooterNav from '../components/FooterNav';
import Header from '../components/Header';
import TaskCard from '../components/TaskCard';
import TaskTabs from '../components/TaskTabs';
import TaskTypeSelector from '../components/TaskTypeSelector';
import { TASKS } from '../data/taskData';
import { styles } from './taskListStyle';

const TaskListScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Available');
    const [expandedTaskId, setExpandedTaskId] = useState(null);
    const [selectedType, setSelectedType] = useState('Install App');

    const toggleExpand = (taskId) => {
        setExpandedTaskId(expandedTaskId === taskId ? null : taskId);
    };

    const navigateToTaskDetail = (taskId) => {
        navigation.navigate('TaskDetail', { taskId });
    };

    const renderItem = ({ item }) => (
        <TaskCard
            task={item}
            isExpanded={expandedTaskId === item.id}
            onToggleExpand={() => toggleExpand(item.id)}
            onCardPress={() => navigateToTaskDetail(item.id)}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#4169e1" barStyle="light-content" />
            <Header />
            <View style={styles.content}>
                <Text style={styles.title}>Task Home</Text>

                <View style={styles.taskTypeContainer}>
                    <TaskTypeSelector
                        types={['Refer And Earn', 'Install App']}
                        selectedType={selectedType}
                        onSelectType={setSelectedType}
                    />
                </View>

                <TaskTabs
                    tabs={['Available (5)', 'Ongoing (0)', 'History (0)']}
                    activeTab={activeTab}
                    onTabPress={setActiveTab}
                />

                <FlatList
                    data={TASKS}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContainer}
                />

                <View style={styles.pagination}>
                    <View style={styles.paginationSelector}>
                        <Text>10</Text>
                        <Image source={require('../assets/images/dropDown.png')} style={styles.dropdownIcon} />
                    </View>
                    <View style={styles.paginationControls}>
                        <TouchableOpacity style={styles.paginationButton}>
                            <Text style={styles.paginationButtonText}>Prev</Text>
                        </TouchableOpacity>
                        <Text style={styles.paginationText}>1/1</Text>
                        <TouchableOpacity style={styles.paginationButton}>
                            <Text style={styles.paginationButtonText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <FooterNav activeTab="Tasks" />
        </SafeAreaView>
    );
};

export default TaskListScreen;
