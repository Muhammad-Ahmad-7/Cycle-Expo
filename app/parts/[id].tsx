import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import Parts from '@/components/Parts';

const PartsDetail = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation(); // Initialize navigation

  let decodedArray = [];
  if (id) {
    try {
      if (typeof id === 'string') {
        decodedArray = JSON.parse(decodeURIComponent(id));
      }
    } catch (error) {
      console.error('Error decoding data:', error);
    }
  }

  const [partsData, setPartsData] = useState(decodedArray);
  console.log("Parts DATA: ", partsData);

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <View>
        <Text style={styles.name}>
          {partsData[0].id.split("-")[0].toUpperCase()}
        </Text>
      </View>
      <FlatList
        data={partsData}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Parts item={item} />
        )}
      />
    </SafeAreaView>
  );
}

export default PartsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1f28',
    alignItems: 'center',
    paddingTop: 8,
  },
  name: {
    fontSize: 36,
    color: '#f95f2e',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  // Back button style
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 12,
    backgroundColor: '#f95f2e',
    borderRadius: 50, // Rounded full button
    
  },
});
