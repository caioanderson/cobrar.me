import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container, TextLogo } from './style';
interface WelcomeProps{
    text: string;
}

export function Welcome({ text } : WelcomeProps) {
    return (
        <Container>
            <TextLogo>{text}</TextLogo>
            <StatusBar style='light'/>
        </Container>
    )
}
  