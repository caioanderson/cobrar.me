import React from 'react';
import {
    Container, Header, ContainerWelcome,
    WelcomeTitle, WelcomeSubtitle, Photo, WrapperContainerWelcome,
    Notification, ContainerNotification, CardCountAccounts,
    Logo, Line, TitleCardCount, Main, CountBold, ContainerMyAccounts, Title,
    AccountList
} from './style';

import { Account } from '../../components/Account';
import { Divider } from '../../components/Divider';

export function Home() {

    const data = [
        {
            id: '1',
            name: 'Spotify',
            category: '#musica',
            amount: 'R$ 4.00'
        },
        {
            id: '2',
            name: 'Netflix',
            category: '#filmes e séries',
            amount: 'R$ 4.00'
        },
        {
            id: '3',
            name: 'Netflix',
            category: '#filmes e séries',
            amount: 'R$ 4.00'
        },
        {
            id: '4',
            name: 'Netflix',
            category: '#filmes e séries',
            amount: 'R$ 4.00'
        },
        {
            id: '5',
            name: 'Netflix',
            category: '#filmes e séries',
            amount: 'R$ 4.00'
        },
        {
            id: '6',
            name: 'Netflix',
            category: '#filmes e séries',
            amount: 'R$ 4.00'
        },
    ]

    return (
        <Container>
            <Header>
                <WrapperContainerWelcome>
                    <ContainerWelcome>
                        <WelcomeTitle>Olá, Caio</WelcomeTitle>
                        <WelcomeSubtitle>Mantenha suas contas em dia</WelcomeSubtitle>
                    </ContainerWelcome>
                    <ContainerNotification>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/28605252?v=4' }} />
                        <Notification />
                    </ContainerNotification>
                </WrapperContainerWelcome>
            </Header>

            <Main>
                <CardCountAccounts>
                    <Logo>cobrar.me</Logo>
                    <Line />
                    <TitleCardCount>
                        Você tem
                        <CountBold> 5 contas </CountBold> {`\n`}
                        cadastrados para pagar</TitleCardCount>

                </CardCountAccounts>


                <ContainerMyAccounts>
                    <Title>Minhas Contas</Title>
                    <Divider />

                    <Account />

                </ContainerMyAccounts>


            </Main>
            

        </Container>
    )
}