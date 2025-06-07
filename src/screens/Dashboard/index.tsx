import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon,
    HighlightCards,
    Transactions,
    Text,
    TransationList
} from "./styles";
import { HighlightCard } from '../../components/HighlightCard';
import { Transaction } from '../../components/Transaction';
const data = [{
    type:'positive',
    icon:'dollar-sign',
    title:'Desenvolvimento de site',
    amount:'R$ 12.000,00',
    dataTransaction:'13/04/2020',
    typeExpense:'Vendas'
},
{
    type:'negative',
    icon:'dollar-sign',
    title:'Aluguel do apartamento',
    amount:'- R$ 1.000,00',
    dataTransaction:'10/04/2021',
    typeExpense:'Aluguel',
},
{
    type:'down',
    icon:'dollar-sign',
    title:'Hamburgueria Pizzy',
    amount:'- R$ 59,00',
    dataTransaction:'10/04/2020',
    typeExpense:'Alimentação',
}]



export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBANCPL-jtI4TIy52JaivBpQadyJQm1tyiBA&s' }} />
                        <User>
                            <UserGreeting>Olá</UserGreeting>
                            <UserName>Aluno</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />

                </UserWrapper>
            </Header>
            <HighlightCards>
                <HighlightCard
                    type='up'
                    title='Entradas'
                    amount='R$ 17.000,00'
                    lastTransaction='Última entrada em 16 de Junho'
                />
                <HighlightCard
                    type='down'
                    title='Saídas'
                    amount='- R$ 12.000,00'
                    lastTransaction='Última saída em 16 de Junho'
                />
                <HighlightCard
                    type='total'
                    title='Total'
                    amount='R$ 7.000,00'
                    lastTransaction='De 1 a 16 de Junho'
                />
            </HighlightCards>

            <Transactions>
                <Text>Listagem</Text>

                <TransationList
                    data={data}
                    renderItem={({ item })=><Transaction data = {item}/>}
                
                />




                

            </Transactions>
        </Container>
    );
}