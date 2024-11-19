import { StyleSheet, Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const index = () => {


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or fetching data
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust the delay as needed
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2a2c36' }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  const handlePress = (category: string) => {
    if (category === 'Cycles') {
      router.push('/cycles');
    }
    if (category === 'Parts') {
      router.push('/parts');
    }
    if (category === 'Accessories') {
      router.push('/accessories')
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.txt, styles.heading]}>Categories</Text>
      <View style={styles.cardsContainer}>
        <Pressable
          style={styles.card}
          onPress={() => handlePress('Cycles')}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Cycles</Text>
            <Image
              source={require('../../assets/categories/bicycles/BMX/BX1.jpg')} // Update with the correct path
              style={styles.cardImage}
            />
          </View>
        </Pressable>
        <Pressable
          style={styles.card}
          onPress={() => handlePress('Parts')}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Parts</Text>
            <Image
              source={{ uri: 'https://img.freepik.com/free-vector/realistic-bicycle-parts-set-with-isolated-illustration_1284-55952.jpg' }} // Update with the correct path
              style={styles.cardImage}
            />
          </View>
        </Pressable>
        <Pressable
          style={styles.card}
          onPress={() => handlePress('Accessories')}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Accessories</Text>
            <Image
              source={{ uri: 'https://media.istockphoto.com/id/1162926874/photo/set-of-bicycle-accessories-and-equipment-isolated.jpg?s=612x612&w=0&k=20&c=nDYchr_ZnnPKUyK5lkN6_unDYiFpyWM__Eib0iAKAJM=' }} // Update with the correct path
              style={styles.cardImage}
            />
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1f28',
    padding: 8,
  },
  txt: {
    color: '#f95f2e',
  },
  heading: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  cardsContainer: {
    flex: 1,
  },
  card: {
    flex: 1,
    backgroundColor: '#2a2c36', // Match the screen background
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 10,
    overflow: 'hidden', // Ensure the image stays within the card bounds
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    flex: 1, // Image takes up all available height and adjusts width proportionally
    height: '100%',
    resizeMode: 'stretch', // Stretch the image to fit the card
  },
  cardText: {
    flex: 1,
    color: 'white', // Match the "Categories" color
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
