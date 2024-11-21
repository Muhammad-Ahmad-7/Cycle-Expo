import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CycleInfo from '@/components/CycleInfo';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure this package is installed
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation

const EachCycle = () => {
  const { detail } = useLocalSearchParams(); // Retrieve the encoded object from the route
  const navigation = useNavigation(); // Initialize navigation hook

  let decodedObject = {};
  if (detail) {
    try {
      decodedObject = JSON.parse(decodeURIComponent(Array.isArray(detail) ? detail[0] : detail)); // Decode and parse the object
    } catch (error) {
      console.error('Error parsing object:', error);
    }
  }

  const [data, setData] = useState<any>(decodedObject);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Back and Cart buttons */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()} // Navigate back to the previous screen
        >
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartButton} onPress={() => router.push('/(tabs)/cart')}>
          <Icon name="cart" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Item Name */}
      <Text style={styles.heading}>{data?.name}</Text>

      {/* Cycle Info Component */}
      <CycleInfo item={data} />
    </SafeAreaView>
  );
};

export default EachCycle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1f28',
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'flex-start', // Ensure content aligns correctly with header
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Make sure buttons are spaced out evenly
    paddingHorizontal: 16,
    width: '100%',
    marginBottom: 10, // Add margin to separate header from name
  },
  backButton: {
    backgroundColor: '#f95f2e', // Orange background
    borderRadius: 20, // Circular button
    padding: 8,
    marginRight: 16, // Add space between buttons
  },
  cartButton: {
    backgroundColor: '#f95f2e',
    borderRadius: 50, // Circular button
    padding: 12,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    zIndex: 1, // Ensure the button stays on top
  },
  heading: {
    fontSize: 24,
    color: '#F95f2e',
    fontWeight: 'bold',
    textAlign: 'center', // Ensure name is centered
    marginBottom: 20, // Space between name and other content
  },
});

