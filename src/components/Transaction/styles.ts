import styled, { css } from "styled-components/native"
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize"

interface TransationProps{
    type: 'positive' | 'negative'
}


interface TypeProps {
    type: 'up' | 'down' 
}

export const Container = styled.View<TypeProps>`

    background-color: ${({ theme }) => theme.colors.shape};
    width: ${RFValue(320)}px;
    height: ${RFValue(150)}px;
    border-radius: ${({theme}) => theme.borderRadius.large}px;
    padding: 20px 23px;
    padding-bottom: ${RFValue(42)}px;
    margin-right: ${({theme}) => theme.spacing.small};
    margin-bottom: ${RFValue(15)}px;
    
   
    
`
export const Header = styled.View`
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`
export const Title = styled.Text<TypeProps>`
    font-size: ${({ theme }) => theme.fontSize.medium}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};

`
export const Amount = styled.Text<TransationProps>`
    font-size: ${({ theme }) => theme.fontSize.large};
    font-family: ${({ theme }) => theme.fonts.medium};
    margin-top: ${({ theme }) => theme.spacing.small};
    color: ${({ theme, type }) => 
        type === 'positive'
        ? theme.colors.success
        : theme.colors.attention
    };

`
export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacing.medium}

`
export const LeftGroup = styled.View`
    flex-direction: row;
    align-items: center;
    gap: ${RFValue(10)}px;
`

export const Icon = styled(Feather)<TypeProps>`
    font-size: ${({theme}) => theme.fontSize.xlarge}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text_light};

`
export const TypeExpense = styled.Text<TypeProps>`
    font-size: ${({theme}) => theme.fontSize.medium}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text_light};
`

export const DataTransaction = styled.Text<TypeProps>`
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_light};
  
`



