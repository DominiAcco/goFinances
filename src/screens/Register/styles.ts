import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";

interface TransactionButtonProps {
  isActive: boolean;
  activeColor: "success" | "attention";
}

interface IconProps {
  isActive: boolean;
  activeColor: "success" | "attention";
}

const colors = {
  success: theme.colors.success,
  attention: theme.colors.attention,
};

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(100)}px;
  background-color: ${theme.colors.primary};
  justify-content: flex-end;
  align-items: center;
  padding-bottom: ${RFValue(theme.spacing.medium)}px;
`;

export const Title = styled.Text`
  color: ${theme.colors.shape};
  font-size: ${RFValue(theme.fontSize.large)}px;
  font-family: ${theme.fonts.medium};
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: ${RFValue(theme.spacing.large)}px;
`;

export const TransactionTypeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${RFValue(theme.spacing.small)}px;
  margin-bottom: ${RFValue(theme.spacing.small)}px;
`;

export const TransactionButton = styled.TouchableOpacity<TransactionButtonProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(theme.spacing.medium)}px;
  border-radius: ${RFValue(theme.borderRadius.medium)}px;
  border-width: 1.5px;
  border-color: ${({ isActive, activeColor }) =>
    isActive ? colors[activeColor] : theme.colors.text_light};
  background-color: ${({ isActive, activeColor }) =>
    isActive ? colors[activeColor] + "33" : theme.colors.shape};
  margin-right: ${RFValue(theme.spacing.small)}px;
`;

export const Icon = styled(AntDesign).attrs<IconProps>(({ isActive, activeColor }) => ({
  color: isActive ? colors[activeColor] : theme.colors.text_light,
  size: RFValue(theme.fontSize.small),
}))<IconProps>``;

export const ButtonText = styled.Text`
  font-size: ${RFValue(theme.fontSize.small)}px;
  font-family: ${theme.fonts.medium};
  margin-left: ${RFValue(theme.spacing.small)}px;
`;

export const CategorySelect = styled.TouchableOpacity`
  background-color: ${theme.colors.shape};
  border-radius: ${RFValue(theme.borderRadius.medium)}px;
  padding: ${RFValue(theme.spacing.medium)}px;
  border-width: 1px;
  border-color: ${theme.colors.text_light};
  margin-top: ${RFValue(theme.spacing.small)}px;
`;

export const SendButton = styled.TouchableOpacity`
  background-color: ${theme.colors.secondary};
  align-items: center;
  justify-content: center;
  padding: ${RFValue(theme.spacing.medium)}px;
  border-radius: ${RFValue(theme.borderRadius.medium)}px;
  margin: ${RFValue(theme.spacing.large)}px;
`;

export const SendButtonText = styled.Text`
  font-size: ${RFValue(theme.fontSize.small)}px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.shape};
`;
