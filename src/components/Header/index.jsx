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

export function Header({ user }) {
  const [buttonBg, setButtonBg] = useState('#624ee4');
  const { navigate, goBack } = useNavigation();

  function handleAddPass() {
    navigate('RegisterLoginData');
  }

  return (
    <Container
      hasUserData={!!user}
      style={{...(user ? { backgroundColor: '#624ee4' } : { backgroundColor: '#111111' })}}
    >
      {user ? (
        <>
          <AboutUser>
            <Avatar source={user.avatar_url} />

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
            onPressIn={() => setButtonBg('#5f4dd4')}
            onPressOut={() => setButtonBg('#624ee4')}
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