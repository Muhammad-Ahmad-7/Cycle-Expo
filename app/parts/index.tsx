import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import data from '../../data.json';
import PartType from '@/components/PartType';

const PartsScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button with Icon */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.heading}>Parts</Text>
      <FlatList
        data={data.parts}
        numColumns={2} // Two-column layout
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PartType item={item} />
        )}
        contentContainerStyle={styles.listContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default PartsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1f28',
    alignItems: 'center',
    paddingTop: 20,
  },
  heading: {
    fontSize: 36,
    color: '#f95f2e',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 16,
    alignItems: 'center', // Center the items within the columns
  },
  card: {
    backgroundColor: '#2a2c36',
    padding: 16,
    margin: 12,
    borderRadius: 15,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10, // Rounded image
    resizeMode: 'cover',
    marginBottom: 12, // Adds space between image and text
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
  // Back button style
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    padding: 10,
    backgroundColor: '#f95f2e',
    borderRadius: 50,
  },
});
