import React, { useContext, useEffect, useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
} from 'react-native';
import { cycle_images } from './image-uri';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import { AppContext } from '@/context/CartContext';

const CycleInfo = ({ item }: any) => {
    const { state, setState } = useContext(AppContext);
    // Shared values for animations
    const imageTranslateY = useSharedValue(-500); // Image slides in from the top
    const contentTranslateY = useSharedValue(500); // Content slides in from the bottom

    // State variables for loader and success message
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Animated styles for the image
    const imageAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: imageTranslateY.value }],
    }));

    // Animated styles for the content
    const contentAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: contentTranslateY.value }],
    }));

    useEffect(() => {
        // Trigger animations
        imageTranslateY.value = withTiming(0, { duration: 1200 }); // Slower animation for image
        contentTranslateY.value = withSpring(0, {
            damping: 15,
            stiffness: 80,
        });
    }, []);

    const handleCart = () => {
        setIsLoading(true); // Start loader

        // Simulate API call or delay for processing
        setTimeout(() => {
            // Add item to cart
            setState((prevState: any) => [...prevState, item]);

            // Turn off loader and show success message
            setIsLoading(false);
            setShowSuccess(true);

            // Hide success message after 2 seconds
            setTimeout(() => setShowSuccess(false), 2000);
        }, 1500); // Simulate a delay of 1.5 seconds
    };


    return (
        <ScrollView style={styles.container}>
            {/* Activity Indicator and Success Message */}
            {(isLoading || showSuccess) && (
                <View style={styles.overlay}>
                    {isLoading ? (
                        <ActivityIndicator size="large" color="#fff" />
                    ) : (
                        <Text style={styles.successMessage}>
                            Product added to cart successfully!
                        </Text>
                    )}
                </View>
            )}
            {/* Animated Image */}
            <Animated.Image
                source={cycle_images[item.image]}
                style={[styles.image, imageAnimatedStyle]}
            />
            {/* Animated Content */}
            <Animated.View style={[styles.content, contentAnimatedStyle]}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.featuresHeading}>Key Features:</Text>
                <View style={styles.featuresList}>
                    {item.features.map((feature: string, index: number) => (
                        <Text key={index} style={styles.featureItem}>
                            • {feature}
                        </Text>
                    ))}
                </View>
                {/* Add to Cart Button */}
                <TouchableOpacity style={styles.addButton} onPress={handleCart}>
                    <Text style={styles.addButtonText}>Add to Cart</Text>
                </TouchableOpacity>
            </Animated.View>
        </ScrollView>
    );
};

export default CycleInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1f28',
    },
    image: {
        width: '100%',
        height: 350,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    content: {
        padding: 16,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1e90ff',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: '#555',
        lineHeight: 24,
        marginBottom: 16,
    },
    featuresHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    featuresList: {
        marginLeft: 8,
    },
    featureItem: {
        fontSize: 16,
        color: '#555',
        lineHeight: 22,
        marginBottom: 6,
    },
    addButton: {
        marginTop: 20,
        backgroundColor: '#f95f2e',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1, // Ensures it's above all other content
    },
    successMessage: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
});
