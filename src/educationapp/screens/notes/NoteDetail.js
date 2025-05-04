// screens/Notes/NoteDetail.js
import React from 'react';
import { ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Markdown from 'react-native-markdown-display';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { notes } from '../../data/notes';

export default function NoteDetail({ route }) {
    const { noteId } = route.params;
    const note = notes.find(n => n.id === noteId);

    const handleShare = async () => {
        try {
            await Share.share({
                message: `${note.title}\n\n${note.content}`,
                title: note.title,
            });
        } catch (error) {
            console.error('Error sharing note:', error);
        }
    };

    if (!note) {
        return (
            <View style={styles.container}>
                <Text>Note not found</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.contentContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>{note.title}</Text>
                    <Text style={styles.meta}>{note.subject} • {note.dateAdded}</Text>
                </View>

                <View style={styles.markdownContainer}>
                    <Markdown style={markdownStyles}>
                        {note.content}
                    </Markdown>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
                    <Ionicons name="share-outline" size={22} color="#4a90e2" />
                    <Text style={styles.actionText}>Share</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="download-outline" size={22} color="#4a90e2" />
                    <Text style={styles.actionText}>Download</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="bookmark-outline" size={22} color="#4a90e2" />
                    <Text style={styles.actionText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
        paddingBottom: 70, // Space for footer
    },
    header: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    meta: {
        color: '#666',
        fontSize: 14,
    },
    markdownContainer: {
        padding: 20,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    actionButton: {
        alignItems: 'center',
    },
    actionText: {
        marginTop: 5,
        color: '#4a90e2',
        fontSize: 12,
    },
});

const markdownStyles = {
    body: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
    },
    heading1: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 16,
        color: '#222',
    },
    heading2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 14,
        color: '#333',
    },
    heading3: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 12,
        color: '#444',
    },
    paragraph: {
        marginVertical: 10,
    },
    code_block: {
        backgroundColor: '#f5f5f5',
        padding: 12,
        borderRadius: 5,
        fontFamily: 'monospace',
        marginVertical: 8,
    },
    code_inline: {
        backgroundColor: '#f5f5f5',
        fontFamily: 'monospace',
        padding: 2,
        borderRadius: 3,
    },
};
