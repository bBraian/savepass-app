import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: #624ee4;
    justify-content: space-evenly;
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
    width: 100%;
    background-color: #624ee4;
`;

export const Box = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const Texts = styled.View`
    align-items: center;
    flex-direction: column;
`;

export const Span = styled.Text`
    font-family: 'Rubik_400Regular';
    font-size: ${RFValue(15)}px;
    color: #FFFFFF;
    margin-bottom: 7px;
`;

export const PassInput = styled.TextInput`
    background: #ebebeb;
    border: 1px #303030;
    padding: 0 20px;
    border-radius: 4px;
    height: ${RFValue(56)}px;
    width: 100%;

    color: #888D97;
    font-size: ${(RFValue(15))}px;
`;

export const InputBox = styled.View`
    margin-top: 12px;
    flex-direction: column;
    width: 100%;
    padding: 0 32px;
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
    transition: ease-in-out;
    border: ${props => props.selected ? 3 : 1}px solid ${props => props.selected ? "#cfcf20" : "#fff"};
    padding: 14px 26px;
    border-radius: 4px;
    margin: 0 12px;
    justify-content: center;
    align-items: center;
`;

export const ErrorMessage = styled.Text`
    font-family: 'Rubik_400Regular';
    font-size: ${RFValue(15)}px;
    color: red;
    margin-top: 5px;
`;