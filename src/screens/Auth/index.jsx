import { useNavigation } from "@react-navigation/native";
import * as LocalAuthentication from "expo-local-authentication";
import { AuthButton, Box, ButtonTitle, Container, Desc, ErrorMessage, Hello, InputBox, Logo, Options, PassInput, Span, Texts, Title, UserName } from "./styles";

import img from '../../../assets/adaptive-icon.png';
import { useContext, useEffect, useState } from "react";
import { UserAuth } from "../../context/userAuth";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export function Auth() {
    const { navigate } = useNavigation();
    const { user, autenticateWithPassword } = useContext(UserAuth);
    const [authMethod, setAuthMethod] = useState("");
    const [errors, setErrors] = useState("");
    const [password, setPassword] = useState("");

    async function handleFingerPrintAuth() {
        setAuthMethod("fingerprint");
        const bioAuth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Entrar com biometria',
            cancelLabel: 'Cancelar',
            disableDeviceFallback: true
        })
        if(bioAuth.success) {
            navigate('Home')
        }
    }

    function handleAutenticate() {
        setErrors('');
        let error = false;
        if(password === "") {
            error = true;
            setErrors("Insira sua senha!");
        }

        if(!error) {
            if(autenticateWithPassword(password)) {
                navigate('Home');   
            } else {
                setErrors("Senha errada!"); 
            }
        }
    }
    
    useEffect(() => {
        async function checkFingerPrintSupport() {
            const available = await LocalAuthentication.hasHardwareAsync();
            if (!available) {
                setAuthMethod("fingerprint");
            }
        }

        checkFingerPrintSupport();
    }, [])

    return (
        <Container>
            <Logo source={img} />
            <Title>
                { authMethod !== "password" && 
                    <Texts>
                        <Box>
                            <Hello>Ola, </Hello>
                            <UserName>{user.username}</UserName>
                        </Box>
                        <Desc>Como deseja se autenticar?</Desc>
                    </Texts>
                }
                { authMethod === "password" &&  
                    <InputBox>
                        <Span>Digite sua senha</Span>
                        <PassInput onChangeText={setPassword} secureTextEntry keyboardType="numeric" />
                        { errors !== "" && <ErrorMessage>{errors}</ErrorMessage> }
                    </InputBox>
                }
            </Title>
            <Options>
                <AuthButton onPress={handleFingerPrintAuth} selected={authMethod==="fingerprint"}>
                    <Ionicons name="ios-finger-print" size={56} color="white" />
                    <ButtonTitle>Digital</ButtonTitle>
                </AuthButton>
                {authMethod === "password" ?
                    <AuthButton onPress={handleAutenticate} selected={authMethod==="password"}>
                        <AntDesign name="right" size={53} color="white" />
                        <ButtonTitle>Entrar</ButtonTitle>
                    </AuthButton>
                    :
                    <AuthButton onPress={() => setAuthMethod("password")} selected={authMethod==="password"}>
                        <Ionicons name="ios-key-outline" size={56} color="white" />
                        <ButtonTitle>Senha</ButtonTitle>
                    </AuthButton>
                }
                
            </Options>

        </Container>
    )
}