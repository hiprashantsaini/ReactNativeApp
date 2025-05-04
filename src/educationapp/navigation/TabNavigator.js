// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import React from 'react';
// import Icon from 'react-native-vector-icons/AntDesign';

// import Home from '../screens/Home';
// import NotesList from '../screens/notes/NotesList';
// import NoticeBoard from '../screens/notices/NoticeBoard';
// import TestsList from '../screens/tests/TestsList';
// import VideoList from '../screens/videos/VideoList';

// const Tab = createBottomTabNavigator();

// export default function TabNavigator() {
//     return (
//         <Tab.Navigator
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ color, size }) => {
//                     let iconName;

//                     switch (route.name) {
//                         case 'Home':
//                             iconName = 'home';
//                             break;
//                         case 'Videos':
//                             iconName = 'videocamera';
//                             break;
//                         case 'Notes':
//                             iconName = 'filetext1';
//                             break;
//                         case 'Tests':
//                             iconName = 'profile';
//                             break;
//                         case 'Notices':
//                             iconName = 'notification';
//                             break;
//                         default:
//                             iconName = 'questioncircleo';
//                     }

//                     return <Icon name={iconName} size={size} color={color} />;
//                 },
//                 tabBarActiveTintColor: '#4a90e2',
//                 tabBarInactiveTintColor: 'gray',
//             })}
//         >
//             <Tab.Screen name="Home" component={Home} />
//             <Tab.Screen name="Videos" component={VideoList} />
//             <Tab.Screen name="Notes" component={NotesList} />
//             <Tab.Screen name="Tests" component={TestsList} />
//             <Tab.Screen name="Notices" component={NoticeBoard} />
//         </Tab.Navigator>
//     );
// }


// navigation/TabNavigator.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import CoursesList from '../screens/courses/CourseList';
import Home from '../screens/Home';
import NotesList from '../screens/notes/NotesList';
import NoticeBoard from '../screens/notices/NoticeBoard';
import TestsList from '../screens/tests/TestsList';
import VideoList from '../screens/videos/VideoList';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = 'home';
                            break;
                        case 'Videos':
                            iconName = 'videocamera';
                            break;
                        case 'Notes':
                            iconName = 'filetext1';
                            break;
                        case 'Tests':
                            iconName = 'profile';
                            break;
                        case 'Notices':
                            iconName = 'notification';
                            break;
                        case 'Courses':
                            iconName = 'book';
                            break;
                        default:
                            iconName = 'questioncircleo';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#4a90e2',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Courses" component={CoursesList} />
            <Tab.Screen name="Videos" component={VideoList} />
            <Tab.Screen name="Notes" component={NotesList} />
            <Tab.Screen name="Tests" component={TestsList} />
            <Tab.Screen name="Notices" component={NoticeBoard} />
        </Tab.Navigator>
    );
}
