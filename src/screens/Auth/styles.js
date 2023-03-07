import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: #624ee4;
  justify-content: space-between;
  padding: 120px 0;
  align-items: center;
`;

export const Logo = styled.Image`
    width: ${RFValue(120)}px;
    height: ${RFValue(120)}px;
`;

export const Title = styled.View`
    flex-direction: row;
`;

export const Hello = styled.Text`
    font-family: 'Rubik_400Regular';
    font-size: ${RFValue(30)}px;
    text-align: center;
    color: #ffffff;
`;

export const UserName = styled.Text`
    font-family: 'Rubik_500Medium';
    font-size: ${RFValue(30)}px;
    text-align: center;
    color: #ffffff;
`;

export const ButtonTitle = styled.Text`
    font-family: 'Rubik_500Medium';
    font-size: ${RFValue(30)}px;
    text-align: center;
    color: #ffffff;
`;

export const AuthButton = styled.TouchableOpacity``;