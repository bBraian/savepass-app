import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
export const Container = styled.View`
  flex: 1;
  background-color: #111111;
  padding: 0 24px;
`;

export const Metadata = styled.View`
  margin-top: 32px;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: 'Rubik_500Medium';
  color: #FDFDFD;
`;

export const TotalPassCount = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: 'Rubik_400Regular';
  color: #B1B1B1;
`;


export const LoginList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${RFValue(16)}px;
`;