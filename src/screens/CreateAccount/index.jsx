import { useContext, useState } from "react";
import { avatares } from "../../data/avatares";
import { UserAuth } from "../../context/userAuth";
import { AvatarImage, AvatarList, Box, ButtonCreateUser, ButtonSelectAvatar, Container, Content, ErrorMessage, Form, InputDescription, NameInput, StatusBarFake, TextCreateUser, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

export function CreateAccount() {
    const { createUser, setUser } = useContext(UserAuth);
    const [avatarSelected, setAvatarSelected] = useState(0);
    const [avatarError, setAvatarError] = useState("");
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const { navigate } = useNavigation();

    function handleCreateUser() {
        resetErrors();
        let error = validations();
        if(!error) {
            try {
                createUser({avatarId: avatarSelected, username: username, password: password});
                setUser({avatarId: avatarSelected, username: username, password: password});
                navigate('Home');
            } catch(error) {
                Alert.alert('Erro ao criar usuário!')
            }
        }
    }

    function validations() {
        let error = false;
        if(avatarSelected === 0) {
            error = true;
            setAvatarError("Selecione um avatar");
        }
        if(username.length > 14) {
            error = true;
            setUsernameError("Usuário não pode ter mais de 14 caracteres");
        }
        if(username.length < 3) {
            error = true;
            setUsernameError("Usuário não pode ter menos de 3 caracteres");
        }
        if(Number.isInteger(parseInt(username))) {
            error = true;
            setUsernameError("Usuário não pode ser numérico");
        }
        if(password.length > 14) {
            error = true;
            setPasswordError("Senha não pode ter mais de 14 caracteres");
        }
        if(password.length < 4) {
            error = true;
            setPasswordError("Senha não pode ter menos de 4 caracteres");
        }
        if(isNaN(parseInt(password))) {
            error = true;
            setPasswordError("Senha deve ser numérica");
        }
        if(username == "") {
            error = true;
            setUsernameError("Preencha o nome de usuário");
        }
        if(password == "") {
            error = true;
            setPasswordError("Preencha o campo senha");
        }

        return error;
    }

    function resetErrors() {
        setAvatarError("");
        setUsernameError("");
        setPasswordError("");
    }

    return (
        <Container>
            <StatusBarFake></StatusBarFake>
            <Content>
                <Title>Vamos criar seu usuário!</Title>

                <Form>
                    <Box>
                        <InputDescription>Selecione um avatar</InputDescription>
                        <AvatarList>
                            {avatares.map(avatar => (
                                <ButtonSelectAvatar
                                    onPress={() => setAvatarSelected(avatar.id)}
                                    selected={avatar.id === avatarSelected} 
                                    key={avatar.id}
                                >
                                    <AvatarImage source={avatar.image} />
                                </ButtonSelectAvatar>
                            ))}
                        </AvatarList>
                        { avatarError !== "" && <ErrorMessage>{avatarError}</ErrorMessage> }
                    </Box>
                    <Box>
                        <InputDescription>Seu nome de usuário</InputDescription>
                        <NameInput onChangeText={setUsername} />
                        { usernameError !== "" && <ErrorMessage>{usernameError}</ErrorMessage> }
                    </Box>
                    <Box>
                        <InputDescription>Senha para entrar no app</InputDescription>
                        <NameInput onChangeText={setPassword} secureTextEntry keyboardType="numeric" />
                        { passwordError !== "" && <ErrorMessage>{passwordError}</ErrorMessage> }
                    </Box>
                </Form>

            </Content>
            <ButtonCreateUser onPress={handleCreateUser}>
                <TextCreateUser>Criar usuário</TextCreateUser>
            </ButtonCreateUser>
        </Container>
    )
}