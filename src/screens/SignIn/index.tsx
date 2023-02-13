import { useNavigation } from "@react-navigation/native";
import { SignInButton } from "../../components/SignInButton";
import { Container, Footer, Header, Photo, SignInTitle, Title, TitleWrapper } from "./styles";

import { StackNavigationProp } from '@react-navigation/stack';

import img from '../../../assets/images/adaptive-icon.png';

type RootStackParamList = {
    Home: undefined;
    RegisterLoginData: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

export function SignIn() {
    const { navigate } = useNavigation<NavigationProps>();

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
                <SignInButton onPress={handleSignInWithGoogle} />
            </Footer>
        </Container>
    )
}