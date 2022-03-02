import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WelcomeProps{
    text: string;
}

export function Welcome({ text } : WelcomeProps) {
    return (
        <View style={styles.container}>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  