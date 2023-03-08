import { useNavigation } from "@react-navigation/native";
import * as LocalAuthentication from "expo-local-authentication";
import { AuthButton, ButtonTitle, Container, Hello, Logo, Title, UserName } from "./styles";

import { Alert, Button } from "react-native";

import img from '../../../assets/adaptive-icon.png';
import { useEffect, useState } from "react";

export function Auth() {
    const [fingerPrintSupported, setFingerPrintSupported] = useState(false);
    const { navigate } = useNavigation();
    
    function handleSignInWithGoogle() {
        navigate('Home');
    }

    function fallBackToDefaultAuth() {

    }

    function alertComponent(title, message, btnText, btnFunction) {
        return Alert.alert(title, message), [
            { text: btnText, onPress: btnFunction }
        ]
    }

    async function handleFingerPrintAuth() {
        const isAuth = await LocalAuthentication.hasHardwareAsync();
        if(!isAuth) {
            return alertComponent(
                "Insira sua senha",
                "Autenticacao por biometria",
                "Ok",
                () => fallBackToDefaultAuth()
            );
        }

        let biometricSupport;

        if(isAuth) {
            biometricSupport = await LocalAuthentication.supportedAuthenticationTypesAsync();
        }
        const saveBiometrics = await LocalAuthentication.isEnrolledAsync();

        if(!saveBiometrics) {
            return alertComponent(
                "Insira sua senha",
                "Autenticacao por biometria",
                "Ok",
                () => fallBackToDefaultAuth()
            );
        }

        const bioAuth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Entrar com biometria',
            cancelLabel: 'Cancelar',
            disableDeviceFallback: true
        })

        if(bioAuth) {
            console.log('Sucess')
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
                <Hello>Ola, </Hello>
                <UserName>Braian</UserName>
            </Title>
            <AuthButton onPress={handleFingerPrintAuth}>
                <ButtonTitle>Entrar</ButtonTitle>
            </AuthButton>
        </Container>
    )
}