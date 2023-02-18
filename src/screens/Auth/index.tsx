import { useNavigation } from "@react-navigation/native";
import { Container } from "./styles";

import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Text } from "react-native";

type RootStackParamList = {
    Home: undefined;
    RegisterLoginData: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

export function Auth() {
    const { navigate } = useNavigation<NavigationProps>();

    function handleSignInWithGoogle() {
        navigate('Home');
    }

    return (
        <Container>
            <Text>auth</Text>
            <Button onPress={() => handleSignInWithGoogle}>Login</Button>
        </Container>
    )
}