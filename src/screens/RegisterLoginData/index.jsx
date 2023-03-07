import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm } from 'react-hook-form';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { Header } from '../../components/Header';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

import { Container, Form } from './styles';

const schema = Yup.object().shape({
  service_name: Yup.string().required('Nome do serviço é obrigatório!'),
  email: Yup.string().required('Email é obrigatório!'),
  password: Yup.string().required('Senha é obrigatória!'),
})

export function RegisterLoginData({ route }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});

  const { navigate } = useNavigation()
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: {
      errors
    }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const formControll = control;

  async function handleRegister(formData) {
    const newLoginData = {
      id: String(uuid.v4()),
      ...formData
    }

    const dataKey = '@savepass:logins';

    try {
      const storageData = await AsyncStorage.getItem(dataKey);
      const currentData = storageData ? JSON.parse(storageData) : [];
      const dataFormatted = [ ...currentData, newLoginData ];
      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted))

      reset();
      navigate('Home');
    } catch(error) {
      console.log(error);
      Alert.alert("Não foi possível salvar");
    }
  }

  async function handleUpdate(formData) {
    const dataKey = '@savepass:logins';

    try {
      const storageData = await AsyncStorage.getItem(dataKey);
      const currentData = storageData ? JSON.parse(storageData) : [];
      const dataWithOutUpdatedOne = currentData.filter(data => {
        if(data.id !== formData.id) {
          return data;
        }
      })
      const dataFormatted = [ ...dataWithOutUpdatedOne, formData ];
      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted))

      reset();
      navigate('Home');
    } catch(error) {
      console.log(error);
      Alert.alert("Não foi possível salvar");
    }
  }

  function handleDelete() {

    Alert.alert('Deseja excluir o registro?', 'Essa ação não poderá ser revertida depois', [
      { text: 'Cancel' },
      { text: 'Sim', onPress: async function() {
        const dataKey = '@savepass:logins';

        try {
          const storageData = await AsyncStorage.getItem(dataKey);
          const currentData = storageData ? JSON.parse(storageData) : [];
          const newData = currentData.filter(data => {
            if(data.id !== editData.id) {
              return data;
            }
          })
          await AsyncStorage.setItem(dataKey, JSON.stringify(newData))
    
          reset();
          navigate('Home');
        } catch(error) {
          console.log(error);
          Alert.alert("Não foi possível excluir");
        }
      }},
    ]);

  }

  function handleGetFormError(e) {
    console.log(e);
  }

  useEffect(() => {
    const router = route.params;
    if(router) {
      setIsEditing(true);
      setEditData(router);
    }
  }, [])

  useEffect(() => {
    if(isEditing) {
      setValue('id', editData.id);
      setValue('service_name', editData.service_name);
      setValue('email', editData.email);
      setValue('password', editData.password);
    }

  }, [setValue, isEditing]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Header />
      <Container>
        <Form>
          <Input
            testID="service-name-input"
            title="Nome do serviço"
            name="service_name"
            error={false}
            control={formControll}
            edit={isEditing ? editData.service_name : ""}
            autoCapitalize="sentences"
            autoCorrect
          />
          <Input
            testID="email-input"
            title="E-mail ou usuário"
            name="email"
            error={false}
            control={formControll}
            edit={isEditing ? editData.email : ""}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Input
            testID="password-input"
            title="Senha"
            name="password"
            error={false}
            edit={isEditing ? editData.password : ""}
            control={formControll}
            secureTextEntry
          />

          { isEditing && 
            <Button
              style={{
                marginTop: RFValue(8),
                marginBottom: RFValue(8),
                backgroundColor: '#BB2D3A'
              }}
              title='Excluir'
              onPress={handleDelete}
            />
          }

          <Button
            style={{
              marginTop: RFValue(8)
            }}
            title={isEditing ? 'Atualizar' : 'Salvar'}
            onPress={handleSubmit(isEditing ? handleUpdate : handleRegister, handleGetFormError)}
          />
        </Form>
      </Container>
    </KeyboardAvoidingView>
  )
}