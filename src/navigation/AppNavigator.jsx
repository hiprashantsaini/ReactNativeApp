import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TaskDetailScreen from '../screen/TaskDetailScreen';
import TaskListScreen from '../screen/TaskListScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="TaskList"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="TaskList" component={TaskListScreen} />
                <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
