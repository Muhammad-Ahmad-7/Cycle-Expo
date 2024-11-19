import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import Accessories from '@/components/Accessories';

const AccessoriesDetail = () => {
    const { id } = useLocalSearchParams();
    // console.log(id);

    let decodedArray = [];
    if (id) {
        try {
            if (typeof id === 'string') {
                decodedArray = JSON.parse(decodeURIComponent(id));
            }
        } catch (error) {
            console.error('Error decoding data:', error);
        }
    }


    const [partsData, setPartsData] = useState(decodedArray);
    console.log("Parts DATA: ", partsData);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.name}>
                    {partsData[0].id.split("-")[0].toUpperCase()}
                </Text>
            </View>
            <FlatList
                data={partsData}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Accessories item={item} />
                )}
            />
        </SafeAreaView>
    )
}

export default AccessoriesDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1f28',
        alignItems: 'center',
        paddingTop: 8,
    },
    name: {
        fontSize: 36,
        color: '#f95f2e',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    }
});