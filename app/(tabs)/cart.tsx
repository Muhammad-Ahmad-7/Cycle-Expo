import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { AppContext } from '@/context/CartContext';

const Cart = () => {
  const { state, setState } = useContext(AppContext);

  const removeItem = (index: number) => {
    setState((prevState: any) => prevState.filter((_: any, i: number) => i !== index));
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <View style={styles.card}>
      <View style={styles.details}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => removeItem(index)}
        >
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      {state.length > 0 ? (
        <FlatList
          data={state}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.emptyMessage}>Your cart is empty!</Text>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1f28',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f95f2e',
    marginBottom: 16,
    textAlign: 'center',

  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
    resizeMode: 'cover',
  },
  details: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e90ff',
    marginBottom: 8,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  removeButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#f95f2e',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  removeButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  emptyMessage: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
  },
});
