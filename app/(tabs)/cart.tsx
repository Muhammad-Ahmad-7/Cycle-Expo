import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import React, { useContext } from 'react';
import { AppContext } from '@/context/CartContext';

const Cart = () => {
  const { state, setState } = useContext(AppContext);

  const updateItemQuantity = (index: number, action: 'increase' | 'decrease') => {
    setState((prevState: any) => {
      const updatedState = [...prevState];
      const item = updatedState[index];
      
      if (action === 'increase') {
        item.quantity = item.quantity ? item.quantity + 1 : 1; // Increase the quantity
      } else if (action === 'decrease' && item.quantity > 1) {
        item.quantity -= 1; // Decrease the quantity if greater than 1
      }

      return updatedState;
    });
  };

  const removeItem = (index: number) => {
    setState((prevState: any) => prevState.filter((_: any, i: number) => i !== index));
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <View style={styles.card}>
      <View style={styles.details}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>

        {/* Quantity Controls */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity 
            style={styles.quantityButton} 
            onPress={() => updateItemQuantity(index, 'decrease')}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity || 1}</Text>
          <TouchableOpacity 
            style={styles.quantityButton} 
            onPress={() => updateItemQuantity(index, 'increase')}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Remove Button */}
        <TouchableOpacity 
          style={styles.removeButton}
          onPress={() => removeItem(index)}
        >
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleCheckout = () => {
    // Handle checkout logic here
    alert('Proceeding to checkout');
  };

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

      {/* Checkout Button */}
      {state.length > 0 && (
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
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
    paddingBottom: 100, // Ensure enough space for the fixed button
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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  quantityButton: {
    backgroundColor: '#f95f2e',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginHorizontal: 8,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  quantity: {
    fontSize: 18,
    color: '#333',
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
  checkoutButton: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#f95f2e',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
