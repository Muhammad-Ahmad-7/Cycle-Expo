import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import data from '../../data.json'; // Ensure this is correctly linked to your data
import {cycle_images} from "../../components/image-uri";
import CycleType from '@/components/CycleType';

const CyclesScreen = () => {
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Cycles</Text>
      <FlatList
        data={data.cycles}
        numColumns={2} // Two-column layout
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CycleType item={item} />
        )}
        contentContainerStyle={styles.listContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default CyclesScreen;

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
});
