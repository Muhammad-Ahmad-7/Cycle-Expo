import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const CycleLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="[id]" options={{ headerShown: false }} />
        <Stack.Screen name="detail/[detail]" options={{ headerShown: false }} />
    </Stack>
  )
}

export default CycleLayout

const styles = StyleSheet.create({})