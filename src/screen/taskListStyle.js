import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 16,
    },
    taskTypeContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    listContainer: {
        paddingBottom: 16,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    paginationSelector: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    dropdownIcon: {
        width: 12,
        height: 12,
        marginLeft: 8,
    },
    paginationControls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paginationButton: {
        backgroundColor: '#ccc',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
    },
    paginationButtonText: {
        color: 'white',
    },
    paginationText: {
        marginHorizontal: 16,
    },
});