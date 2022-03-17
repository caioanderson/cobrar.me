import React from 'react';
import {
    Container, ContainerAccount, Name, 
    Category, Amount,
} from './styles';

export function Account() {
    return (
        <Container>
            <ContainerAccount>
                <Name>Spotify</Name>
                <Category>#musica</Category>
            </ContainerAccount>

            <Amount>R$ 4,00</Amount>

        </Container>
    )
}