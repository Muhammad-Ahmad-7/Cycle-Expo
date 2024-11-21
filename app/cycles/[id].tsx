import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Cycle from '@/components/Cycle';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure this package is installed
import { useNavigation } from '@react-navigation/native';

const CycleDetail = () => {
    const { id } = useLocalSearchParams();
    const navigation = useNavigation(); // Hook for navigation

    let decodedArray = [];
    if (id) {
        try {
            decodedArray = JSON.parse(decodeURIComponent(Array.isArray(id) ? id[0] : id));
        } catch (error) {
            console.error('Error decoding data:', error);
        }
    }

    const [cycleData, setCycleData] = useState(decodedArray);

    return (
        <SafeAreaView style={styles.container}>
            {/* Back Button */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()} // Navigate back to the previous screen
                >
                    <Icon name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.name}>
                    {cycleData[0]?.name.split(" ")[0]} Cycles
                </Text>
            </View>

            {/* List of Cycles */}
            <FlatList
                data={cycleData}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Cycle item={item} />
                )}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
};

export default CycleDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1f28',
        alignItems: 'center',
        paddingTop: 8,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        width: '100%',
        marginBottom: 10,
    },
    backButton: {
        backgroundColor: '#f95f2e', // Orange background
        borderRadius: 20, // Circular button
        padding: 8,
        marginRight: 16,
    },
    name: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    listContainer: {
        paddingHorizontal: 10,
        paddingBottom: 16,
        alignItems: 'center', // Center items within the columns
    },
});
