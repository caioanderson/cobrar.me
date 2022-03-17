import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled(LinearGradient).attrs({
    colors: ['#F8A836', '#FABF6B']
})`
    height: ${RFPercentage(25)}px;
    padding-left: ${RFValue(29)}px;
    padding-right: ${RFValue(19)}px;

`;

export const WrapperContainerWelcome = styled.View`
    margin-top: ${getStatusBarHeight() + RFValue(18)}px;

    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;

export const ContainerWelcome = styled.View``;
export const WelcomeTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.semi_bold};
    color: ${({ theme }) => theme.colors.title_light};
    font-size: ${RFValue(20)}px;
    line-height: 25px;
`;

export const WelcomeSubtitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title_light};
    font-size: ${RFValue(13)}px;
    line-height: 16.5px;
`;

export const ContainerNotification = styled.View`
    position: relative;
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px; 
    height: ${RFValue(48)}px; 
    border-radius: 8px;
`;

export const Notification = styled(Ionicons).attrs({
    name: 'alert-circle',
    size: 24,
})`
    position: absolute;
    right: -10px;
    top: -10px;

    color: ${({ theme }) => theme.colors.debit};
`;

export const Main = styled.View`
    flex: 1;

    margin-left: ${RFValue(25)}px;
    margin-right: ${RFValue(25)}px;

`;

export const CardCountAccounts = styled.View`
    margin-top: ${RFValue(-38)}px;

    background-color: ${({ theme }) => theme.colors.secondary};
    height: ${RFValue(80)}px;
    width: 100%;
    border-radius: 5px;

    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const Logo = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.title_light};
    font-size: ${RFValue(14)}px;
`;

export const Line = styled.View`
    height: 32px;
    width: .5px;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const TitleCardCount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title_light};
    font-size: ${RFValue(13)}px;

`;

export const CountBold = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.title_light};
    font-size: ${RFValue(13)}px;
`;

export const ContainerMyAccounts = styled.View`
    margin-top: ${RFValue(44)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(18)}px;

    margin-bottom: ${RFValue(23)}px;
`;

export const AccountList = styled(FlatList)`

`;

