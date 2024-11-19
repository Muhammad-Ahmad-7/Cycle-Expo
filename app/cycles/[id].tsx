import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Cycle from '@/components/Cycle';

const CycleDetail = () => {
    const { id } = useLocalSearchParams();
    // console.log(id);

    let decodedArray = [];
    if (id) {
        try {
            decodedArray = JSON.parse(decodeURIComponent(Array.isArray(id) ? id[0] : id));
        } catch (error) {
            console.error('Error decoding data:', error);
        }
    }

    // console.log(decodedArray);

    const [cycleData, setCycleData] = useState(decodedArray);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.name}>
                    {cycleData[0].name.split(" ")[0]} Cycles
                </Text>
            </View>
            <FlatList
                data={cycleData}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Cycle item={item} />
                )}
            />
        </SafeAreaView>
    );
};

export default CycleDetail;

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
