// data/tests.js
export const tests = [
    {
        id: '1',
        title: 'React Native Basics',
        description: 'Test your knowledge of React Native fundamentals',
        timeLimit: 15, // minutes
        questions: [
            {
                id: 'q1',
                question: 'Which of the following is NOT a core component in React Native?',
                options: [
                    'View',
                    'Text',
                    'Div',
                    'Image'
                ],
                correctAnswer: 'Div'
            },
            {
                id: 'q2',
                question: 'What is the command to create a new Expo project?',
                options: [
                    'expo create',
                    'expo init',
                    'expo new',
                    'expo start'
                ],
                correctAnswer: 'expo init'
            },
            {
                id: 'q3',
                question: 'Which component is used to handle user input text in React Native?',
                options: [
                    'InputText',
                    'TextField',
                    'TextInput',
                    'Input'
                ],
                correctAnswer: 'TextInput'
            },
            {
                id: 'q4',
                question: 'How do you apply styles in React Native?',
                options: [
                    'Using CSS files',
                    'Using JavaScript objects',
                    'Using HTML style attributes',
                    'Using SCSS'
                ],
                correctAnswer: 'Using JavaScript objects'
            },
            {
                id: 'q5',
                question: 'Which of the following is true about React Native?',
                options: [
                    'It compiles to native code only for iOS',
                    'It uses WebView to render UI components',
                    'It uses the same codebase for web and mobile',
                    'It renders native components using JavaScript'
                ],
                correctAnswer: 'It renders native components using JavaScript'
            }
        ],
        subject: 'Programming',
        dateAdded: '2023-10-10'
    },
    {
        id: '2',
        title: 'JavaScript Advanced Concepts',
        description: 'Test your understanding of advanced JavaScript concepts',
        timeLimit: 20, // minutes
        questions: [
            {
                id: 'q1',
                question: 'What is a closure in JavaScript?',
                options: [
                    'A function that returns another function',
                    'A function that has access to variables in its outer scope',
                    'A function that closes the program execution',
                    'A design pattern to encapsulate code'
                ],
                correctAnswer: 'A function that has access to variables in its outer scope'
            },
            {
                id: 'q2',
                question: 'Which method is used to handle asynchronous operations in JavaScript?',
                options: [
                    'setTimeout()',
                    'Promise.all()',
                    'forEach()',
                    'map()'
                ],
                correctAnswer: 'Promise.all()'
            }
        ],
        subject: 'Programming',
        dateAdded: '2023-09-25'
    }
];
