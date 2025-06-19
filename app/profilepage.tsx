import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { supabase } from '../src/lib/supabase';
import { router } from 'expo-router';

export default function ProfilePage() {
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) return Alert.alert('Error', error.message);
    router.replace('/');
  };

  const goToCamera = () => {
    router.push('/camera');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Page</Text>

      <TouchableOpacity onPress={goToCamera} style={styles.cameraButton}>
        <Text style={styles.cameraButtonText}>Open Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#111827',
  },
  cameraButton: {
    backgroundColor: '#4f46e5',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
  },
  cameraButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signOutButton: {
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  signOutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
