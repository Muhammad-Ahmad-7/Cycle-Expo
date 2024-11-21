import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure to install react-native-vector-icons
import data from '../../data.json'; // Ensure this is correctly linked to your data
import CycleType from '@/components/CycleType';

const CyclesScreen = () => {
  const navigation = useNavigation();

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
        <Text style={styles.heading}>Cycles</Text>
      </View>

      <View style={styles.contentContainer}>
        <FlatList
          data={data.cycles}
          numColumns={2} // Two-column layout
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CycleType item={item} />}
          contentContainerStyle={styles.listContainer}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
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
  heading: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 16,
    alignItems: 'center', // Center the items within the columns
  },
});
