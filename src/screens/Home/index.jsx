import React, { useState, useCallback, useEffect } from 'react';
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
import { Alert } from 'react-native';


export function Home() {
  const [searchText, setSearchText] = useState("");
  const [searchListData, setSearchListData] = useState([]);
  const [data, setData] = useState([]);

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
  }, []));

  return (
    <>
      <Header
        user={{
          name: 'Braian',
          avatar_url: 'https://github.com/bBraian.png'
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