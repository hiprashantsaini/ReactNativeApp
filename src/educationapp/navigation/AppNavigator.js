// // navigation/AppNavigator.js
// import { createStackNavigator } from '@react-navigation/stack';
// import React from 'react';
// import NoteDetail from '../screens/notes/NoteDetail';
// import TestAttempt from '../screens/tests/TestAttempt';
// // import VideoDetail from '../screens/Videos/VideoDetail';
// import VideoDetail from '../screens/videos/VideoDetail';
// import TabNavigator from './TabNavigator';

// const Stack = createStackNavigator();

// export default function AppNavigator() {
//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 headerStyle: {
//                     backgroundColor: '#4a90e2',
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                     fontWeight: 'bold',
//                 },
//             }}
//         >
//             <Stack.Screen
//                 name="Main"
//                 component={TabNavigator}
//                 options={{ headerShown: false }}
//             />
//             <Stack.Screen
//                 name="NoteDetail"
//                 component={NoteDetail}
//                 options={({ route }) => ({ title: route.params?.title || 'Note' })}
//             />
//             <Stack.Screen
//                 name="TestAttempt"
//                 component={TestAttempt}
//                 options={({ route }) => ({ title: route.params?.title || 'Test' })}
//             />

//             <Stack.Screen
//                 name="VideoDetail"
//                 component={VideoDetail}
//                 options={({ route }) => ({ title: route.params?.title || 'Video' })}
//             />

//         </Stack.Navigator>
//     );
// }

// navigation/AppNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CourseDetail from '../screens/courses/CourseDetail';
import NoteDetail from '../screens/notes/NoteDetail';
import TestAttempt from '../screens/tests/TestAttempt';
import VideoDetail from '../screens/videos/VideoDetail';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#4a90e2',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="Main"
                component={TabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NoteDetail"
                component={NoteDetail}
                options={({ route }) => ({ title: route.params?.title || 'Note' })}
            />
            <Stack.Screen
                name="TestAttempt"
                component={TestAttempt}
                options={({ route }) => ({ title: route.params?.title || 'Test' })}
            />
            <Stack.Screen
                name="VideoDetail"
                component={VideoDetail}
                options={({ route }) => ({ title: route.params?.title || 'Video' })}
            />
            <Stack.Screen
                name="CourseDetail"
                component={CourseDetail}
                options={({ route }) => ({ title: route.params?.course?.title || 'Course' })}
            />
        </Stack.Navigator>
    );
}
