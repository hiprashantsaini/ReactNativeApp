// components/TestQuestion.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TestQuestion({
    question,
    options,
    selectedAnswer,
    onSelectAnswer,
    showCorrectAnswer = false,
    correctAnswer = null,
    questionNumber,
    totalQuestions,
    disabled = false
}) {
    const getOptionStyle = (option) => {
        if (!showCorrectAnswer) {
            return [
                styles.optionButton,
                option === selectedAnswer && styles.selectedOption
            ];
        }

        if (option === correctAnswer) {
            return [styles.optionButton, styles.correctOption];
        }

        if (option === selectedAnswer && option !== correctAnswer) {
            return [styles.optionButton, styles.incorrectOption];
        }

        return [styles.optionButton];
    };

    const getOptionTextStyle = (option) => {
        if (!showCorrectAnswer) {
            return [
                styles.optionText,
                option === selectedAnswer && styles.selectedOptionText
            ];
        }

        if (option === correctAnswer) {
            return [styles.optionText, styles.correctOptionText];
        }

        if (option === selectedAnswer && option !== correctAnswer) {
            return [styles.optionText, styles.incorrectOptionText];
        }

        return [styles.optionText];
    };

    return (
        <View style={styles.container}>
            {questionNumber && totalQuestions && (
                <Text style={styles.questionNumber}>
                    Question {questionNumber} of {totalQuestions}
                </Text>
            )}

            <Text style={styles.questionText}>{question}</Text>

            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={getOptionStyle(option)}
                    onPress={() => !disabled && onSelectAnswer(option)}
                    disabled={disabled}
                >
                    <Text style={getOptionTextStyle(option)}>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
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
    correctOption: {
        backgroundColor: '#e6f7e6',
        borderColor: '#4CAF50',
    },
    incorrectOption: {
        backgroundColor: '#fee',
        borderColor: '#ff3b30',
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    selectedOptionText: {
        color: '#4a90e2',
        fontWeight: '500',
    },
    correctOptionText: {
        color: '#4CAF50',
        fontWeight: '500',
    },
    incorrectOptionText: {
        color: '#ff3b30',
        fontWeight: '500',
    },
});
