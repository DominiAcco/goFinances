import styled, { css } from "styled-components/native"
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize"


interface TypeProps {
    type: 'up' | 'down' | 'total'
}

export const Container = styled.View<TypeProps>`
    background-color: ${ ({theme, type}) => 
        type === 'total' ? theme.colors.secondary : theme.colors.shape
    };
    width: ${RFValue(300)}px;
    border-radius: ${({theme}) => theme.borderRadius.large}px;
    padding: 20px 23px;
    
   
    padding-bottom: ${RFValue(42)}px;
    margin-right: ${({theme}) => theme.spacing.small};
`
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
export const Title = styled.Text<TypeProps>`
    font-size: ${({theme}) => theme.fontSize.small}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme, type}) => 
        type === 'total' ? theme.colors.shape : theme.colors.text
    };
`
export const Icon = styled(Feather)<TypeProps>`
    font-size: ${({theme}) => theme.fontSize.xlarge}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.success};
    ${
        ({ type }) => type === 'up' && css`
            color: ${({ theme }) => theme.colors.success}
        ` 
    }
    ${
        ({ type }) => type === 'down' && css`
            color: ${({ theme }) => theme.colors.attention}
         ` 
    }
    ${
        ({ type }) => type === 'total' && css`
            color: ${({ theme }) => theme.colors.shape}
         ` 
    }

`
export const Footer = styled.View``

export const Amount = styled.Text<TypeProps>`
    font-size: ${({theme}) => theme.fontSize.xxlarge};
    font-family: ${({theme}) => theme.fonts.medium};
    margin-top: ${({theme}) => theme.spacing.xlarge};
    color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.text};

`
export const LastTransaction = styled.Text<TypeProps>`
    font-size: ${({theme}) => theme.fontSize.small};
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.text};
`