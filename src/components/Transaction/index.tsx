import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    DataTransaction,
    TypeExpense,
    LeftGroup
} from "./styles"
import React from 'react';

interface TransactionProps {
    type: 'negative'|'positive'| 'total'
    title: string
    amount: string
    typeExpense: string
    dataTransaction: string
    icon?: string
}
interface Props{
    data:TransactionProps
}
   


export function Transaction({data }: Props) {
    return (
        <Container type={data.type}>
            <Header>
                <Title type={data.type}>
                    {data.title}
                </Title>
                <Amount type={data.type}>
                    {data.amount}
                </Amount>
            </Header>

            <Footer>
                <LeftGroup>
                    <Icon
                        name={data.icon ?? (data.type === 'positive' ? 'arrow-up-circle' : 'arrow-down-circle')}
                        type={data.type}
                    />
                    <TypeExpense type={data.type}>
                        {data.typeExpense}
                    </TypeExpense>
                </LeftGroup>

                <DataTransaction type={data.type}>
                    {data.dataTransaction}

                </DataTransaction>
            </Footer>
        </Container>
    )
}