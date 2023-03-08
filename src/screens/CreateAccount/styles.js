import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height: 70%;
    background-color: #624ee4;
    justify-content: flex-end;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(120)}px;
    height: ${RFValue(120)}px;
`;

export const TitleWrapper = styled.View`
    align-items: center;
`;

export const Title = styled.Text`
    font-family: 'Rubik_500Medium';
    font-size: ${RFValue(30)}px;
    text-align: center;
    margin-top: 45px;
    color: #ffffff;
`;

export const SignInTitle = styled.Text`
    font-family: 'Rubik_400Regular';
    font-size: ${RFValue(16)}px;
    text-align: center;
    margin-top: 65px;
    margin-bottom: 67px;
    color: #ffffff;
`;

export const Footer = styled.View`
    width: 100%;
    height: 30%;
    background-color: #624ee4;
    padding: 0 ${RFValue(24)}px;
`;