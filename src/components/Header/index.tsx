import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


import {
  Container,
  AboutUser,
  Avatar,
  TextContainer,
  HelloMessage,
  BoldText,
  SecondaryMessage,
  AddButton,
  Icon,
  BackButton,
  Title,
} from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

interface HeaderProps {
  user?: {
    name: string;
    avatar_url: string;
  }
}

type RootStackParamList = {
  Home: undefined;
  RegisterLoginData: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

export function Header({ user }: HeaderProps) {
  const [buttonBg, setButtonBg] = useState('#282B4D');
  const { navigate, goBack } = useNavigation<NavigationProps>();

  function handleAddPass() {
    navigate('RegisterLoginData');
  }

  return (
    <Container
      hasUserData={!!user}
      style={{...(user ? { backgroundColor: '#282B4D' } : { backgroundColor: '#111111' })}}
    >
      {user ? (
        <>
          <AboutUser>
            <Avatar source={{ uri: user.avatar_url }} />

            <TextContainer>
              <HelloMessage>
                Olá, <BoldText>{user.name}</BoldText>
              </HelloMessage>

              <SecondaryMessage>
                Sinta-se seguro aqui
              </SecondaryMessage>
            </TextContainer>
          </AboutUser>

          <AddButton 
            onPress={handleAddPass} 
            onPressIn={() => setButtonBg('#323560')}
            onPressOut={() => setButtonBg('#282B4D')}
            style={{backgroundColor: buttonBg}}
          >
            <Icon
              name="plus"
              color="#FFFFFF"
              size={24}
            />
          </AddButton>
        </>
      ) : (
        <>
          <BackButton onPress={goBack}>
            <Icon
              name="chevron-left"
              color="#FFFFFF"
              size={28}
            />
          </BackButton>

          <Title>Cadastro</Title>
        </>
      )}
    </Container>
  );
}