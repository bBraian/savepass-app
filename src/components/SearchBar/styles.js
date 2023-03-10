import styled from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(-28)}px;
  width: 100%;
  height: ${RFValue(56)}px;
`;

export const Input = styled(TextInput)`
  font-size: ${(RFValue(15))}px;
  color: #888888;
  font-family: 'Rubik_400Regular';
  flex: 1;
  padding: 0 20px;
  background: #242424;
  
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 1px #242424;
  border-right-width: 0;
`;

export const Button = styled.Pressable`
  background: #dbdb53;
  padding: 16px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  justify-content: center;
`;

export const Icon = styled(Feather).attrs({
  size: 24,
  color: '#ffffff'
})``;

