import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
    // State for user data and edit mode
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: 'Muhammad Ahmad',
        email: 'ahmad@gmail.com',
        phone: '+923 456 7890',
    });

    // Function to handle input changes
    const handleInputChange = (field: any, value: any) => {
        setProfile({ ...profile, [field]: value });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileCard}>
                <Image
                    source={{
                        uri: 'https://instagram.flhe13-1.fna.fbcdn.net/v/t51.2885-19/429307795_1138159464277005_4877841898572076122_n.jpg?_nc_ht=instagram.flhe13-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=f3dCaFAuDzQQ7kNvgFlIm_a&_nc_gid=c762dad37ad94003b28d4a33ac40153d&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYA-rOubhBtq6yNpYmnSZKvq8Lq1Td6c9ziDgU7XekApPQ&oe=6740DB6E&_nc_sid=7a9f4b',
                    }}
                    style={styles.profilePicture}
                />
                {isEditing ? (
                    <>
                        <TextInput
                            style={styles.input}
                            value={profile.name}
                            onChangeText={(text) => handleInputChange('name', text)}
                            placeholder="Name"
                            placeholderTextColor="#a1a1a1"
                        />
                        <TextInput
                            style={styles.input}
                            value={profile.email}
                            onChangeText={(text) => handleInputChange('email', text)}
                            placeholder="Email"
                            placeholderTextColor="#a1a1a1"
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={styles.input}
                            value={profile.phone}
                            onChangeText={(text) => handleInputChange('phone', text)}
                            placeholder="Phone"
                            placeholderTextColor="#a1a1a1"
                            keyboardType="phone-pad"
                        />
                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={() => setIsEditing(false)}
                        >
                            <Text style={styles.saveButtonText}>Save</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <Text style={styles.profileName}>{profile.name}</Text>
                        <Text style={styles.profileEmail}>{profile.email}</Text>
                        <Text style={styles.profilePhone}>{profile.phone}</Text>
                        <TouchableOpacity
                            style={styles.editButton}
                            onPress={() => setIsEditing(true)}
                        >
                            <Text style={styles.editButtonText}>Edit Profile</Text>
                        </TouchableOpacity>
                    </>
                )}
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
    input: {
        backgroundColor: '#3a3d47',
        color: '#fff',
        fontSize: 16,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        width: '100%',
    },
    saveButton: {
        backgroundColor: '#1e90ff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});
