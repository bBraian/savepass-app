import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: #111111;
    justify-content: space-between;
    padding: 36px 24px;
`;

export const Content = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    font-family: 'Rubik_500Medium';
    font-size: ${RFValue(26)}px;
    text-align: center;
    color: #ffffff;
    margin-top: 26px;
`;

export const Form = styled.View`
    justify-content: center;
    margin: 100px 0;
    flex: 1;
`;

export const Box = styled.View`
margin-top: 32px;
`;

export const InputDescription = styled.Text`
    font-family: 'Rubik_400Regular';
    font-size: ${RFValue(15)}px;
    color: #FFFFFF;
    margin-bottom: 7px;
`;

export const AvatarList = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`

`;

export const NameInput = styled.TextInput`
  flex-direction: row;
  align-items: center;

  background: #242424;
  border: 1px #303030;
  padding: 0 20px;
  border-radius: 4px;
  height: ${RFValue(56)}px;
  width: 100%;
`;

export const ButtonSelectAvatar = styled.TouchableOpacity`
    height: ${RFValue(120)}px;
    width: ${RFValue(120)}px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: blue;
    margin-right: 18px;
    overflow: hidden;
    opacity: ${props => props.selected ? 1 : 0.8};
    border-width: ${props => props.selected ? 4 : 0}px;
    border-color: ${props => props.selected ? "#624ee4" : "#111111"};
`;

export const AvatarImage = styled.Image`
    height: ${RFValue(120)}px;
    width: ${RFValue(120)}px;
    border-radius: 4px;
`;

export const ButtonCreateUser = styled.TouchableOpacity`
    background-color: #cfcf20;
    height: ${RFValue(56)}px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`;

export const TextCreateUser = styled.Text`
    font-family: 'Rubik_500Medium';
    font-size: ${RFValue(15)}px;
    color: #FFFFFF;
    textShadow-color: rgba(0, 0, 0, 0.75);
    text-shadow-radius: 8px;
`;