// data/notes.js
export const notes = [
    {
        id: '1',
        title: 'React Native Fundamentals',
        content: `
  # React Native Fundamentals
  
  ## Core Components
  - View: A container that supports layout with flexbox, style, touch handling
  - Text: Displays text content
  - Image: Displays images
  - ScrollView: A generic scrolling container
  - TextInput: Allows the user to enter text
  
  ## Key Concepts
  - Components: Building blocks of React Native applications
  - Props: Configuration options for components
  - State: Data that changes over time
  - Lifecycle Methods: Functions that execute at different stages
  
  ## Getting Started
  1. Install Node.js
  2. Install Expo CLI: \`npm install -g expo-cli\`
  3. Create a new project: \`expo init MyProject\`
  4. Start development server: \`expo start\`
      `,
        subject: 'Programming',
        dateAdded: '2023-09-15'
    },
    {
        id: '2',
        title: 'JavaScript ES6 Features',
        content: `
  # JavaScript ES6 Features
  
  ## Arrow Functions
  \`\`\`javascript
  // Traditional function
  function add(a, b) {
    return a + b;
  }
  
  // Arrow function
  const add = (a, b) => a + b;
  \`\`\`
  
  ## Template Literals
  \`\`\`javascript
  const name = 'World';
  console.log(\`Hello, \${name}!\`);
  \`\`\`
  
  ## Destructuring
  \`\`\`javascript
  // Array destructuring
  const [first, second] = [1, 2];
  
  // Object destructuring
  const { name, age } = { name: 'John', age: 30 };
  \`\`\`
  
  ## Spread Operator
  \`\`\`javascript
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
  
  const obj1 = { x: 1, y: 2 };
  const obj2 = { ...obj1, z: 3 }; // { x: 1, y: 2, z: 3 }
  \`\`\`
      `,
        subject: 'Programming',
        dateAdded: '2023-09-20'
    },
    {
        id: '3',
        title: 'React Navigation Guide',
        content: `
  # React Navigation Guide
  
  ## Installation
  \`\`\`bash
  npm install @react-navigation/native
  npm install react-native-screens react-native-safe-area-context
  \`\`\`
  
  ## Stack Navigator
  \`\`\`javascript
  import { createStackNavigator } from '@react-navigation/stack';
  
  const Stack = createStackNavigator();
  
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    );
  }
  \`\`\`
  
  ## Tab Navigator
  \`\`\`javascript
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  
  const Tab = createBottomTabNavigator();
  
  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
  }
  \`\`\`
  
  ## Navigation Between Screens
  \`\`\`javascript
  // Navigate to another screen
  navigation.navigate('Details', { itemId: 86 });
  
  // Go back
  navigation.goBack();
  \`\`\`
      `,
        subject: 'Programming',
        dateAdded: '2023-10-05',
    },
];
