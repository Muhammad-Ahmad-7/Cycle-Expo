import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { AppProvider } from '@/context/CartContext';

const HomeLayout = () => {
  return (
    <AppProvider>
      <View style={styles.container}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
              animation: 'slide_from_right',
              animationDuration: 100, // Adjust for smoother transitions
            }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
              animation: 'slide_from_right',
              animationDuration: 100, // Animation duration in milliseconds
            }}
          />
          <Stack.Screen name="cycles" options={{ headerShown: false }} />
          <Stack.Screen name="parts" options={{ headerShown: false }} />
          <Stack.Screen name="accessories" options={{ headerShown: false }} />
        </Stack>
      </View>
    </AppProvider>
  );
};

export default HomeLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1f28',
  },
});
