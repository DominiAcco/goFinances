import styled from "styled-components/native";
// import theme from "../../global/styles/theme";

import{
    RFPercentage,
    RFValue,
} from 'react-native-responsive-fontsize'
import theme from "../../global/styles/theme";
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};

`
export const Title = styled.Text`
    font-family: ${({ theme}) => theme.fonts.bold};
    font-size: 24px;
    color: ${({ theme }) => theme.colors.text};
`

export const Header = styled.View`
    width: 100%;
    height: ${ RFPercentage(42) };
    background-color: ${ ({theme}) => theme.colors.primary };
    justify-content: flex-start;
    align-items: center;
`
export const UserWrapper = styled.View`
    width: 100%;
    align-items: center;
    padding: 0 25px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${RFValue(60)}px
`   

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`
export const Photo = styled.Image`
    width: ${ RFPercentage(10) }px;
    height: ${ RFPercentage(10) }px;
    border-radius: ${ ({theme}) => theme.borderRadius.medium}px;
`
export const User = styled.View`
    margin-left: 10px;
`
export const UserGreeting  = styled.Text`
    color: ${ ({theme}) => theme.colors.shape};
    font-size: ${ RFValue(18)}px;
    font-family: ${ ({theme}) => theme.fonts.regular};    
`
export const UserName  = styled.Text`
    color: ${ ({theme}) => theme.colors.shape};
    font-size: ${ RFValue(18)}px;
    font-family: ${ ({theme}) => theme.fonts.bold};  
`

export const Icon = styled(Feather)`
    color: ${({theme}) => theme.colors.secundary};
    font-size: ${RFValue(24)}px;
`
export const HighlightCards = styled.ScrollView.attrs
({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle:  {paddingHorizontal: 24},
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(21)}px;
    z-index: 9;
`

export const Transactions = styled.View
 `
    flex: 1;
    padding-top: ${RFPercentage(5)}px;
    background-color: ${({theme}) => theme.colors.background};
    align-items:center;
    
`

export const Text = styled.Text`
    font-size: ${RFValue(18)}px;
    text-align: left;
    padding: 0 24px;
    width: 100%;
    margin-top: ${RFValue(18)}px;
    margin-bottom: ${ RFValue(10)}px;
`
export const TransationList= styled.FlatList.attrs({  showsVerticalScrollIndicator: false,})`
  
`