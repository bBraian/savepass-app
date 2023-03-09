import { useNavigation } from "@react-navigation/native";
import * as LocalAuthentication from "expo-local-authentication";
import { AuthButton, Box, ButtonTitle, Container, Desc, Hello, Logo, Options, Title, UserName } from "./styles";

import { Alert } from "react-native";

import img from '../../../assets/adaptive-icon.png';
import { useContext, useEffect, useState } from "react";
import { UserAuth } from "../../context/userAuth";
import { Ionicons } from "@expo/vector-icons";

export function Auth() {
    const [fingerPrintSupported, setFingerPrintSupported] = useState(false);
    const { navigate } = useNavigation();
    const { user } = useContext(UserAuth);

    function alertComponent(title, message, btnText, btnFunction) {
        return Alert.alert(title, message), [
            { text: btnText, onPress: btnFunction }
        ]
    }

    async function handleFingerPrintAuth() {
        const available = await LocalAuthentication.hasHardwareAsync();
        if (!available) {
            Alert.alert('Não é possível usar a biometria neste dispositivo');
            return;
        }

        const bioAuth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Entrar com biometria',
            cancelLabel: 'Cancelar',
            disableDeviceFallback: true
        })
        console.log(bioAuth);
        if(bioAuth.success) {
            navigate('Home')
        }
    }
    
    useEffect(() => {
        async function verifyFingerPrintSupport() {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setFingerPrintSupported(compatible);
        }

        verifyFingerPrintSupport();
    }, [])
    return (
        <Container>
            <Logo source={img} />
            <Title>
                <Box>
                    <Hello>Ola, </Hello>
                    <UserName>{user.username}</UserName>
                </Box>
                <Desc>Como deseja se autenticar?</Desc>
            </Title>
            <Options>
                <AuthButton onPress={handleFingerPrintAuth}>
                    <Ionicons name="ios-finger-print" size={56} color="white" />
                    <ButtonTitle>Digital</ButtonTitle>
                </AuthButton>
                <AuthButton >
                    <Ionicons name="ios-key-outline" size={56} color="white" />
                    <ButtonTitle>Senha</ButtonTitle>
                </AuthButton>
            </Options>

        </Container>
    )
}