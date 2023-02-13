import React from "react";
import { 
    Container,
    ImageContainer,
    Text,
} from "./styles";

import GoogleSvg from '../../../assets/google.svg';


export function SignInButton({...rest}: any) {
    return (
        <Container {...rest}>
            <ImageContainer>
                <GoogleSvg />
            </ImageContainer>

            <Text>Logar com o Google</Text>

        </Container>
    )
}