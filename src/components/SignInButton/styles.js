import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8
})`
    margin-top: ${RFPercentage(-4)}px;
    height: ${RFValue(56)}px;
    background-color: #ffffff;
    border-radius: 5px;
    align-items: center;
    flex-direction: row;
    margin-bottom: 16px;
`;

export const ImageContainer = styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: ${RFValue(16)}px;
    border-color: #c4c4c4;
    border-right-width: 1px;
`;

export const Text = styled.Text`
    flex: 1;
    text-align: center;
    color: #242424;
    font-size: ${RFValue(14)}px;
    font-family: 'Rubik_400Regular';
`;