import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import AccessoriesInfo from '@/components/AccessoriesInfo';
import { useNavigation } from '@react-navigation/native'; // Navigation hook
import Icon from 'react-native-vector-icons/Ionicons'; // Ionicons for back button

const AccessoriesDetailScreen = () => {
    const { detail } = useLocalSearchParams(); // Retrieve the encoded object from the route
    const navigation = useNavigation(); // Navigation hook

    let decodedObject = {};
    if (detail) {
        try {
            if (typeof detail === 'string') {
                decodedObject = JSON.parse(decodeURIComponent(detail)); // Decode and parse the object
            }
        } catch (error) {
            console.error('Error parsing object:', error);
        }
    }
    console.log(decodedObject);
    const [data, setData] = useState<any>(decodedObject);

    return (
        <SafeAreaView style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>

            {/* Cart Button */}
            <TouchableOpacity style={styles.cartButton} onPress={() => router.push('/(tabs)/cart')}>
                <Icon name="cart" size={24} color="#fff" />
            </TouchableOpacity>

            {/* Scrollable content for larger items */}
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Item Name */}
                <View style={styles.nameContainer}>
                    <Text style={styles.itemName}>
                        {data?.name}
                    </Text>
                </View>

                {/* Display Accessories Info */}
                <AccessoriesInfo item={data} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default AccessoriesDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1f28',
        paddingTop: 20,
        paddingHorizontal: 16,
    },
    // Back button style
    backButton: {
        position: 'absolute',
        top: 40,
        left: 16,
        padding: 12,
        backgroundColor: '#f95f2e',
        borderRadius: 50,
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        zIndex: 1, // Ensure the button stays on top
    },
    cartButton: {
        position: 'absolute',
        top: 40,
        right: 16,
        padding: 12,
        backgroundColor: '#f95f2e',
        borderRadius: 50, // Circular button
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        zIndex: 1, // Ensure the button stays on top
    },
    // Scrollable content for larger items
    scrollContent: {
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 20, // Space at the bottom for safe area
    },
    // Item name container to display the accessory name
    nameContainer: {
        marginTop: 60, // Increased to avoid overlap with the back button
        marginBottom: 20,
        alignItems: 'center',
        width: '100%',
    },
    itemName: {
        fontSize: 20,
        color: '#f95f2e',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

