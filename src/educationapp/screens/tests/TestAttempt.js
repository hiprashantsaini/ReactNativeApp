// screens/Tests/TestAttempt.js
import React, { useEffect, useState } from 'react';
import {
    Alert,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { tests } from '../../data/tests';

export default function TestAttempt({ route, navigation }) {
    const { testId } = route.params;
    const test = tests.find(t => t.id === testId);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [timeRemaining, setTimeRemaining] = useState(test ? test.timeLimit * 60 : 0);
    const [isTestCompleted, setIsTestCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [showResultModal, setShowResultModal] = useState(false);

    useEffect(() => {
        if (!test) return;

        // Initialize timer
        const timer = setInterval(() => {
            setTimeRemaining(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    handleTestSubmit();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        // Clear timer on unmount
        return () => clearInterval(timer);
    }, []);

    if (!test) {
        return (
            <View style={styles.container}>
                <Text>Test not found</Text>
            </View>
        );
    }

    const currentQuestion = test.questions[currentQuestionIndex];

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const handleAnswerSelect = (answer) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [currentQuestion.id]: answer
        }));
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < test.questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleTestSubmit = () => {
        // Calculate score
        let correctAnswers = 0;
        test.questions.forEach(question => {
            if (selectedAnswers[question.id] === question.correctAnswer) {
                correctAnswers++;
            }
        });

        const calculatedScore = Math.round((correctAnswers / test.questions.length) * 100);
        setScore(calculatedScore);
        setIsTestCompleted(true);
        setShowResultModal(true);
    };

    const confirmSubmit = () => {
        Alert.alert(
            'Submit Test',
            'Are you sure you want to submit this test? You cannot change your answers after submission.',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Submit', onPress: handleTestSubmit }
            ]
        );
    };

    const navigateToQuestionByIndex = (index) => {
        setCurrentQuestionIndex(index);
    };

    const renderQuestionNavigator = () => {
        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.questionNavigator}>
                {test.questions.map((question, index) => (
                    <TouchableOpacity
                        key={question.id}
                        style={[
                            styles.questionNumberButton,
                            currentQuestionIndex === index && styles.currentQuestionButton,
                            selectedAnswers[question.id] && styles.answeredQuestionButton
                        ]}
                        onPress={() => navigateToQuestionByIndex(index)}
                    >
                        <Text
                            style={[
                                styles.questionNumberText,
                                currentQuestionIndex === index && styles.currentQuestionText,
                                selectedAnswers[question.id] && styles.answeredQuestionText
                            ]}
                        >
                            {index + 1}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        );
    };

    return (
        <View style={styles.container}>
            {/* Header with timer */}
            <View style={styles.header}>
                <Text style={styles.title}>{test.title}</Text>
                <View style={styles.timer}>
                    <Ionicons name="time-outline" size={16} color={timeRemaining < 60 ? '#ff3b30' : '#333'} />
                    <Text
                        style={[
                            styles.timerText,
                            timeRemaining < 60 && styles.timerWarning
                        ]}
                    >
                        {formatTime(timeRemaining)}
                    </Text>
                </View>
            </View>

            {/* Question Navigator */}
            {renderQuestionNavigator()}

            {/* Current Question */}
            <ScrollView style={styles.questionContainer}>
                <Text style={styles.questionNumber}>Question {currentQuestionIndex + 1} of {test.questions.length}</Text>
                <Text style={styles.questionText}>{currentQuestion.question}</Text>

                <View style={styles.optionsContainer}>
                    {currentQuestion.options.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.optionButton,
                                selectedAnswers[currentQuestion.id] === option && styles.selectedOption
                            ]}
                            onPress={() => handleAnswerSelect(option)}
                            disabled={isTestCompleted}
                        >
                            <Text
                                style={[
                                    styles.optionText,
                                    selectedAnswers[currentQuestion.id] === option && styles.selectedOptionText
                                ]}
                            >
                                {option}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            {/* Navigation and Submit Buttons */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={[styles.navButton, currentQuestionIndex === 0 && styles.disabledButton]}
                    onPress={handlePreviousQuestion}
                    disabled={currentQuestionIndex === 0}
                >
                    <Ionicons name="chevron-back" size={20} color={currentQuestionIndex === 0 ? '#999' : '#4a90e2'} />
                    <Text style={[styles.navButtonText, currentQuestionIndex === 0 && styles.disabledButtonText]}>Previous</Text>
                </TouchableOpacity>

                {currentQuestionIndex === test.questions.length - 1 ? (
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={confirmSubmit}
                        disabled={isTestCompleted}
                    >
                        <Text style={styles.submitButtonText}>Submit Test</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.navButton}
                        onPress={handleNextQuestion}
                    >
                        <Text style={styles.navButtonText}>Next</Text>
                        <Ionicons name="chevron-forward" size={20} color="#4a90e2" />
                    </TouchableOpacity>
                )}
            </View>

            {/* Results Modal */}
            <Modal
                visible={showResultModal}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.resultTitle}>Test Completed!</Text>

                        <View style={styles.scoreContainer}>
                            <Text style={styles.scoreLabel}>Your Score</Text>
                            <Text style={styles.scoreValue}>{score}%</Text>
                            <View style={styles.resultBadge}>
                                <Text style={styles.resultBadgeText}>
                                    {score >= 70 ? 'PASSED' : 'NEEDS IMPROVEMENT'}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.resultDetails}>
                            <View style={styles.resultDetailItem}>
                                <Text style={styles.resultDetailLabel}>Questions</Text>
                                <Text style={styles.resultDetailValue}>{test.questions.length}</Text>
                            </View>
                            <View style={styles.resultDetailItem}>
                                <Text style={styles.resultDetailLabel}>Correct</Text>
                                <Text style={styles.resultDetailValue}>
                                    {test.questions.filter(q => selectedAnswers[q.id] === q.correctAnswer).length}
                                </Text>
                            </View>
                            <View style={styles.resultDetailItem}>
                                <Text style={styles.resultDetailLabel}>Incorrect</Text>
                                <Text style={styles.resultDetailValue}>
                                    {test.questions.filter(q => selectedAnswers[q.id] && selectedAnswers[q.id] !== q.correctAnswer).length}
                                </Text>
                            </View>
                            <View style={styles.resultDetailItem}>
                                <Text style={styles.resultDetailLabel}>Unanswered</Text>
                                <Text style={styles.resultDetailValue}>
                                    {test.questions.filter(q => !selectedAnswers[q.id]).length}
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={styles.reviewButton}
                            onPress={() => {
                                setShowResultModal(false);
                                navigation.navigate('Tests');
                            }}
                        >
                            <Text style={styles.reviewButtonText}>Return to Tests</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    timer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
    },
    timerText: {
        marginLeft: 5,
        fontWeight: '500',
    },
    timerWarning: {
        color: '#ff3b30',
    },
    questionNavigator: {
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    questionNumberButton: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    questionNumberText: {
        fontWeight: '500',
        color: '#555',
    },
    currentQuestionButton: {
        backgroundColor: '#4a90e2',
    },
    currentQuestionText: {
        color: '#fff',
    },
    answeredQuestionButton: {
        backgroundColor: '#e5f1ff',
        borderWidth: 1,
        borderColor: '#4a90e2',
    },
    answeredQuestionText: {
        color: '#4a90e2',
    },
    questionContainer: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
        margin: 15,
        borderRadius: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    questionNumber: {
        color: '#888',
        fontSize: 14,
        marginBottom: 10,
    },
    questionText: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 20,
        lineHeight: 26,
    },
    optionsContainer: {
        marginTop: 10,
    },
    optionButton: {
        backgroundColor: '#f7f7f7',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    selectedOption: {
        backgroundColor: '#e5f1ff',
        borderColor: '#4a90e2',
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    selectedOptionText: {
        color: '#4a90e2',
        fontWeight: '500',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    navButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    navButtonText: {
        color: '#4a90e2',
        fontWeight: '500',
        fontSize: 16,
    },
    disabledButton: {
        opacity: 0.5,
    },
    disabledButtonText: {
        color: '#999',
    },
    submitButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    resultTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    scoreContainer: {
        alignItems: 'center',
        marginBottom: 25,
    },
    scoreLabel: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
    },
    scoreValue: {
        fontSize: 42,
        fontWeight: 'bold',
        color: '#4a90e2',
        marginBottom: 10,
    },
    resultBadge: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 15,
    },
    resultBadgeText: {
        fontWeight: 'bold',
        color: '#555',
    },
    resultDetails: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 25,
    },
    resultDetailItem: {
        width: '45%',
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    resultDetailLabel: {
        color: '#666',
        fontSize: 14,
        marginBottom: 5,
    },
    resultDetailValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    reviewButton: {
        backgroundColor: '#4a90e2',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
    reviewButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});