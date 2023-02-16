import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Vibration } from 'react-native';

import {
  Container,
  ShowPasswordButton,
  Icon,
  PassData,
  Title,
  Password,
  LoginData,
  BoldTitle,
  Email,
} from './styles';

interface Props {
  id: string;
  service_name: string;
  email: string;
  password: string;
}

export interface EditProps {
  id: string;
  service_name?: string,
  email?: string,
  password?: string
}

type RootStackParamList = {
  Home: undefined;
  RegisterLoginData: EditProps;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

export function LoginDataItem({
  service_name,
  email,
  password,
  id
}: Props) {
  const [passIsVisible, setPassIsVisible] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#242424');
  const { navigate } = useNavigation<NavigationProps>();

  function handleTogglePassIsVisible() {
    setPassIsVisible(!passIsVisible);
  }

  function handleEditRegister() {
    Vibration.vibrate(35)
    navigate('RegisterLoginData', {
      id,
      service_name,
      email,
      password
    });
  }

  return (
    <Container 
      style={{backgroundColor: backgroundColor}}
      onLongPress={() => handleEditRegister()}
      onPressIn={() => setBackgroundColor('#303030')}
      onPressOut={() => setBackgroundColor('#242424')}
    >
      <ShowPasswordButton
        onPress={handleTogglePassIsVisible}
      >
        <Icon
          name={passIsVisible ? "eye" : "eye-off"}
          color={passIsVisible ? '#624ee4' : '#888D97'}
        />
      </ShowPasswordButton>

      {passIsVisible
        ? (
          <PassData>
            <Title>{service_name}</Title>
            <Password>{password}</Password>
          </PassData>
        )
        : (
          <LoginData>
            <BoldTitle>{service_name}</BoldTitle>
            <Email>{email}</Email>
          </LoginData>
        )
      }
    </Container>
  );
}