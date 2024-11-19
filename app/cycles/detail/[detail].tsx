import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import CycleInfo from '@/components/CycleInfo';

const EachCycle = () => {
  const { detail } = useLocalSearchParams(); // Retrieve the encoded object from the route

  let decodedObject = {};
  if (detail) {
    try {
      decodedObject = JSON.parse(decodeURIComponent(Array.isArray(detail) ? detail[0] : detail)); // Decode and parse the object
    } catch (error) {
      console.error('Error parsing object:', error);
    }
  }
  console.log(decodedObject);
  const [data, setData] = useState(decodedObject);
  return (
    <SafeAreaView style={styles.container}>
      <CycleInfo item= {data}/>
    </SafeAreaView>
  )
}

export default EachCycle

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1f28',
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'center'
  }
})