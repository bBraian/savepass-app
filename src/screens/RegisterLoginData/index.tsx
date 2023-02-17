import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { Header } from '../../components/Header';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';


import {
  Container,
  Form
} from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

interface FormData {
  id?: string | undefined;
  service_name: string;
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  service_name: Yup.string().required('Nome do serviço é obrigatório!'),
  email: Yup.string().email('Não é um email válido').required('Email é obrigatório!'),
  password: Yup.string().required('Senha é obrigatória!'),
})

type RootStackParamList = {
  Home: undefined;
  RegisterLoginData: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'RegisterLoginData'>;
type RouteProps = RouteProp<RootStackParamList, 'RegisterLoginData'>;

export function RegisterLoginData({ route }: any) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({} as FormData);

  const { navigate } = useNavigation<NavigationProps>()
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: {
      errors
    }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const formControll = control as unknown as Control<FieldValues, any>

  async function handleRegister(formData: FormData) {
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

  async function handleUpdate(formData: FormData) {
    const dataKey = '@savepass:logins';

    try {
      const storageData = await AsyncStorage.getItem(dataKey);
      const currentData: FormData[] = storageData ? JSON.parse(storageData) : [];
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

  async function handleDelete() {
    const dataKey = '@savepass:logins';

    try {
      const storageData = await AsyncStorage.getItem(dataKey);
      const currentData: FormData[] = storageData ? JSON.parse(storageData) : [];
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
  }

  function handleGetFormError(e: any) {
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