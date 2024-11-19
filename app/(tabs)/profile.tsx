import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileCard}>
                <Image
                    source={{ uri: 'https://instagram.flhe13-1.fna.fbcdn.net/v/t51.2885-19/429307795_1138159464277005_4877841898572076122_n.jpg?_nc_ht=instagram.flhe13-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=f3dCaFAuDzQQ7kNvgFlIm_a&_nc_gid=c762dad37ad94003b28d4a33ac40153d&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYA-rOubhBtq6yNpYmnSZKvq8Lq1Td6c9ziDgU7XekApPQ&oe=6740DB6E&_nc_sid=7a9f4b' }}
                    style={styles.profilePicture}
                />
                <Text style={styles.profileName}>Muhammad Ahmad</Text>
                <Text style={styles.profileEmail}>ahmad@gmail.com</Text>
                <Text style={styles.profilePhone}>+923 456 7890</Text>
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e1f28',
    },
    profileCard: {
        backgroundColor: '#2a2d37',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        width: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
        borderWidth: 2,
        borderColor: '#f95f2e',
    },
    profileName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    profileEmail: {
        fontSize: 16,
        color: '#a1a1a1',
        marginBottom: 4,
    },
    profilePhone: {
        fontSize: 16,
        color: '#a1a1a1',
        marginBottom: 16,
    },
    editButton: {
        backgroundColor: '#f95f2e',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    editButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});
