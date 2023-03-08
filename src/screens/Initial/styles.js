import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.View`
    width: 100%;
    height: 60%;
    background-color: #624ee4;
    justify-content: center;
    align-items: center;
`;

export const Photo = styled.Image`
    width: 86%;
    height: 72%;
    resize-mode: contain;
    margin-top: 20px;
`;

export const Title = styled.Text`
    font-family: 'Rubik_500Medium';
    font-size: ${RFValue(26)}px;
    text-align: center;
    color: #ffffff;
`;

export const SignInTitle = styled.Text`
    font-family: 'Rubik_400Regular';
    font-size: ${RFValue(16)}px;
    text-align: center;
    margin-top: 22px;
    color: #ffffff;
`;

export const Footer = styled.View`
    width: 100%;
    height: 40%;
    background-color: #624ee4;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${RFValue(24)}px;
`;

export const Button = styled(TouchableOpacity)`
    margin-top: 35px;
    margin-bottom: 36px;
    width: 65px;
    height: 65px;
    border-radius: 9999px;
    background-color: #dbdb53;
    justify-content: center;
    align-items: center;
`;