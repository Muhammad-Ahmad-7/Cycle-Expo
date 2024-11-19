import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import AccessoriesInfo from '@/components/AccessoriesInfo';

const AccessoriesDetailScreen = () => {
  const { detail } = useLocalSearchParams(); // Retrieve the encoded object from the route

    let decodedObject = {};
    if (detail) {
        try {
            if (typeof detail === 'string') {
                decodedObject = JSON.parse(decodeURIComponent(detail)); // Decode and parse the object
            }
        } catch (error) {
            console.error('Error parsing object:', error);
        }
    }
    console.log(decodedObject);
    const [data, setData] = useState(decodedObject);
    return (
        <SafeAreaView style={styles.container}>
            <AccessoriesInfo item={data} />
        </SafeAreaView>
    )
}

export default AccessoriesDetailScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#1e1f28',
      alignItems: 'center',
      paddingTop: 20,
      justifyContent: 'center'
  }
})