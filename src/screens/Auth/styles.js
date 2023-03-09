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
    margin-top: -30px;
`;

export const Title = styled.View`
    flex-direction: column;
    align-items: center;
    margin-top: -70px;
`;

export const Box = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const Hello = styled.Text`
    font-family: 'Rubik_400Regular';
    font-size: ${RFValue(30)}px;
    text-align: center;
    color: #ffffff;
`;

export const Desc = styled.Text`
    font-family: 'Rubik_300Light';
    font-size: ${RFValue(16)}px;
    text-align: center;
    color: #ffffff;
    margin-top: 8px;
`;

export const UserName = styled.Text`
    font-family: 'Rubik_500Medium';
    font-size: ${RFValue(30)}px;
    text-align: center;
    color: #ffffff;
`;

export const ButtonTitle = styled.Text`
    font-family: 'Rubik_500Medium';
    font-size: ${RFValue(16)}px;
    text-align: center;
    color: #ffffff;
    margin-top: 6px;
`;

export const Options = styled.View`
    flex-direction: row;
`;

export const AuthButton = styled.TouchableOpacity`
    border: 1px solid white;
    padding: 14px 26px;
    border-radius: 4px;
    margin: 0 12px;
    justify-content: center;
    align-items: center;
`;