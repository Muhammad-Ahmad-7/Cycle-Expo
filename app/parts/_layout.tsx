import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const PartsLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="[id]" options={{ headerShown: false }} />
        <Stack.Screen name="details/[detail]" options={{ headerShown: false }} />
    </Stack>
  )
}

export default PartsLayout

const styles = StyleSheet.create({})