import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { avatares } from "../../data/avatares";
import { AvatarImage, AvatarList, Box, ButtonCreateUser, ButtonSelectAvatar, Container, Content, Form, InputDescription, NameInput, TextCreateUser, Title } from "./styles";

export function CreateAccount() {
    const { navigate } = useNavigation();

    const [avatarSelected, setAvatarSelected] = useState(0);
    function handleCreateUser() {
        navigate('Home');
    }

    return (
        <Container>
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
                    </Box>
                    <Box>
                        <InputDescription>Seu nome de usuário</InputDescription>
                        <NameInput />
                    </Box>
                    <Box>
                        <InputDescription>Senha para entrar no app</InputDescription>
                        <NameInput />
                    </Box>
                </Form>

            </Content>
            <ButtonCreateUser onPress={handleCreateUser}>
                <TextCreateUser>Criar usuário</TextCreateUser>
            </ButtonCreateUser>
        </Container>
    )
}