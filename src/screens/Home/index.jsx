import React, { useState, useCallback, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SearchBar';
import { LoginDataItem } from '../../components/LoginDataItem';

import {
  Container,
  Metadata,
  Title,
  TotalPassCount,
  LoginList,
} from './styles';
import { Alert, BackHandler  } from 'react-native';
import { UserAuth } from '../../context/userAuth';
import { avatares } from '../../data/avatares';


export function Home() {
  const [searchText, setSearchText] = useState("");
  const [searchListData, setSearchListData] = useState([]);
  const [data, setData] = useState([]);
  const { user } = useContext(UserAuth);
  const [avatar, setAvatar] = useState({});

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          'Sair do aplicativo',
          'Deseja realmente sair do aplicativo?',
          [
            { text: 'Não', style: 'cancel' },
            { text: 'Sim', onPress: () => BackHandler.exitApp() },
          ]
        );
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  async function loadData() {
    const dataKey = '@savepass:logins';

    try {
      const response = await AsyncStorage.getItem(dataKey);
      const responseFormatted = response ? JSON.parse(response) : [];
      setData(responseFormatted);
      setSearchListData(responseFormatted);
    } catch(error) {
      console.log(error);
      Alert.alert('Erro ao buscar dados');

    }
  }

  function handleChangeInputText(text) {
    setSearchText(text)
  }

  useEffect(() => {
    if(searchText === "") {
      setSearchListData(data);
    } else {
      setSearchListData(data.filter(register => register.service_name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())))
    }
  }, [searchText])

  useFocusEffect(useCallback(() => {
    loadData();
    setAvatar(avatares.find((a) => a.id === user.avatarId));
  }, []));

  return (
    <>
      <Header
        user={{
          name: user.username,
          avatar_url: avatar.image
        }}
      />
      <Container>
        <SearchBar
          placeholder="Qual senha você procura?"
          onChangeText={handleChangeInputText}
          value={searchText}
          returnKeyType="search"
        />

        <Metadata>
          <Title>Suas senhas</Title>
          <TotalPassCount>
            {searchListData.length
              ? `${`${searchListData.length}`.padStart(2, '0')} ao total`
              : 'Nada a ser exibido'
            }
          </TotalPassCount>
        </Metadata>

        <LoginList
          keyExtractor={(item) => item.id}
          data={searchListData}
          renderItem={({ item: loginData }) => {
            return <LoginDataItem
              service_name={loginData.service_name}
              email={loginData.email}
              password={loginData.password}
              id={loginData.id}
            />
          }}
        />
      </Container>
    </>
  )
}