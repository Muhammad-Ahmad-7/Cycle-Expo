import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import PartInfo from '@/components/PartInfo';

const PartsDetail = () => {
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

  const [data, setData] = useState<any>(decodedObject);

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.cartButton} onPress={() => router.push('/cart')}>
        <Icon name="cart" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Part Info Section */}
      <View style={styles.partInfoContainer}>
        <Text style={styles.partName}>{data.name}</Text>
      </View>

      {/* Part Info */}
      <PartInfo item={data} />
    </SafeAreaView>
  );
};

export default PartsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1f28',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 16, // For responsiveness
  },
  // Back button style
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 12,
    backgroundColor: '#f95f2e',
    borderRadius: 50, // Rounded full button
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    zIndex: 1, // Ensure button stays on top
  },

  cartButton: {
    position: 'absolute',
    top: 20,
    right: 20,
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
  // Part Info Section
  partInfoContainer: {
    marginTop: 50, // Adjust top margin to give space for the back button
    width: '100%',
    alignItems: 'center',
  },
  partName: {
    fontSize: 24,
    color: '#f95f2e',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
