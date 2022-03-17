import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
    width: 100%;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.shape};

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-radius: 10px;
    margin-bottom: ${RFValue(23)}px;

`;

export const ContainerAccount = styled.View``;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title};
    line-height: ${RFValue(17.5)}px;
`;

export const Category = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(11)}px;
    color: ${({ theme }) => theme.colors.title};
    line-height: ${RFValue(13.75)}px;
`;

export const Amount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.light};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.debit};
`;