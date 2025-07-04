// src/screens/Resume/styles.ts

import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { height } = Dimensions.get('window');
const CHART_SIZE = Math.min(height * 0.35, 340);

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(100)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: flex-end;
  align-items: center;
  padding-bottom: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.medium || 'sans-serif-medium'};
  color: ${({ theme }) => theme.colors.shape};
`;

export const MonthNavigation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
`;

export const MonthText = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.medium || 'sans-serif-medium'};
  color: ${({ theme }) => theme.colors.text};
  margin: 0 16px;
`;

export const IconButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const PieContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  height: ${CHART_SIZE}px;
`;

export const CategoryListContainer = styled.View`
  flex: 1;
  width: 100%;
  max-height: ${height * 0.4}px;
`;

export const CategoryList = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 16,
    paddingBottom: 32,
  },
  showsVerticalScrollIndicator: false
})`
  width: 100%;
`;

export const CategoryCard = styled.View`
  background-color: #FFF;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
`;

export const CategoryHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const ColorDot = styled.View<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  margin-right: 16px;
`;

export const CategoryName = styled.Text`
  flex: 1;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium || 'sans-serif-medium'};
  color: #2C3E50;
`;

export const CategoryDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryPercent = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.bold || 'sans-serif-bold'};
  color: #666;
  background-color: #F5F5F5;
  border-radius: 12px;
  padding: 8px 16px;
`;

export const CategoryAmount = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.bold || 'sans-serif-bold'};
  color: #2C3E50;
`;