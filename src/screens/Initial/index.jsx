import { useNavigation } from "@react-navigation/native";
import { Button, Container, Footer, Header, Photo, SignInTitle, Title } from "./styles";
import { AntDesign } from '@expo/vector-icons'; 

import img from '../../images/ilustration.png';

export function Initial() {
    const { navigate } = useNavigation();

    return (
        <Container>
            <Header>
                <Photo source={img} />
            </Header>
            <Footer>
                <Title>
                    Controle suas senhas de forma simples e segura
                </Title>
                <SignInTitle>
                    Crie sua conta e nunca{'\n'}
                    mais esqueça suas senhas
                </SignInTitle>
                <Button onPress={() => navigate('CreateAccount')}>
                <AntDesign name="right" size={32} color="white" />
                </Button>
            </Footer>
        </Container>
    )
}