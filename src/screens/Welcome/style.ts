import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.primary };
`;

export const TextLogo = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.white};
    font-size: 30px;
`;

