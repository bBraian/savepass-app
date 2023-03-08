import { useNavigation } from "@react-navigation/native";
import { Container, Footer, Header, Photo, SignInTitle, Title, TitleWrapper } from "./styles";

import img from '../../../assets/adaptive-icon.png';

export function CreateAccount() {
    const { navigate } = useNavigation();

    function handleSignInWithGoogle() {
        navigate('Home');
    }

    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <Photo source={img} />

                    <Title>
                        Controle suas{'\n'}
                        senhas de forma{'\n'}
                        simples e segura
                    </Title>
                </TitleWrapper>

                <SignInTitle>
                    Faça seu login com{'\n'}
                    sua conta google
                </SignInTitle>
            </Header>
            <Footer>
            </Footer>
        </Container>
    )
}