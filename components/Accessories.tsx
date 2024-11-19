import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import { accessories_images } from './image-uri';

const Accessories = ({ item }: any) => {
    const handlePress = () => {
        console.log("HI")
        const encodedObject = encodeURIComponent(JSON.stringify(item)); // Serialize and encode the object
        router.push(`/accessories/details/${encodedObject}`)
    };
    return (
        <Pressable style={styles.card} onPress={handlePress}>
            <Image source={accessories_images[item.image]} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
        </Pressable>
    )
}

export default Accessories

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#2a2c36',
        paddingBottom: 8,
        margin: 5,
        marginVertical: 10,
        borderRadius: 15,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5, // Adds shadow for Android
        shadowColor: '#000', // Adds shadow for iOS
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    image: {
        width: 170,
        height: 170,
        borderTopLeftRadius: 10, // Rounded image
        resizeMode: 'cover',
        marginBottom: 12, // Adds space between image and text
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
    },
});