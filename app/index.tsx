import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const index = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={"#1e1f28"}/>
            <Pressable onPress={() => router.navigate('/(tabs)')}>
                <Text style={styles.btn}>
                    Get Started
                </Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e1f28',
    },
    btn: {
        color: "white",
        padding: 20,
        fontSize: 20,
        fontWeight: "bold",
        borderRadius: 10,
        backgroundColor: "#f95d2e",
    }
})