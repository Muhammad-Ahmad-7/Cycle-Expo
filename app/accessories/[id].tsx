import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import Accessories from '@/components/Accessories';

const AccessoriesDetail = () => {
  const { id } = useLocalSearchParams(); // Get the `id` from the route params
  const navigation = useNavigation(); // Navigation hook

  let decodedArray = [];
  if (id) {
    try {
      if (typeof id === 'string') {
        decodedArray = JSON.parse(decodeURIComponent(id)); // Decode and parse the data
      }
    } catch (error) {
      console.error('Error decoding data:', error);
    }
  }

  const [partsData, setPartsData] = useState(decodedArray);
  console.log("Parts DATA: ", partsData);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Back Button and Name */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.name}>
          {partsData[0]?.id.split("-")[0].toUpperCase()}
        </Text>
      </View>

      {/* FlatList for Accessories */}
      <FlatList
        data={partsData}
        numColumns={2} // Two-column layout
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Accessories item={item} />}
      />
    </SafeAreaView>
  );
};

export default AccessoriesDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1f28',
    paddingTop: 8,
    paddingHorizontal: 16, // For responsiveness
  },
  // Header containing both Back Button and Name in the same row
  header: {
    flexDirection: 'row',
    alignItems: 'center', // Center align vertically
    justifyContent: 'space-between', // Space between button and text
    width: '100%', // Take full width
    // paddingVertical: 20, // Add some padding at the top
  },
  name: {
    fontSize: 36,
    color: '#f95f2e',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1, // Take available space to center text
  },
  // Back button style
  backButton: {
    padding: 12,
    backgroundColor: '#f95f2e',
    borderRadius: 50, // Rounded full button
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
