
import { Button, Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { Buttom } from "../components/Button";
import {
    Conteiner,
    ConteinerLogin,
    ConteinerImage,
    ImageLogin,
    TextLabel,
    Label,
    TextP,
    TextG,
    ButtomLogin,
    TextButton,
    TextFooter,
    TextRight,
    ConteinerText,
    Footer
} from "./styles";
import { theme } from "../../theme";


export default function Register() {

    return (
        <Conteiner >
            <ConteinerImage>
                <ImageLogin source={require("../../assets/cegonha-colorida.jpg")} />
            </ConteinerImage>
            <TextG>Agende</TextG>
            <TextP>Saúde</TextP>
            < ConteinerLogin>
                <TextLabel >Número do cartão SUS</TextLabel>
                <Label
                    placeholder="Digite o Número do Cartão SUS"
                    placeholderTextColor={theme.color.white3}
                />
                <TextLabel >Senha</TextLabel>
                <Label
                    placeholder="Cadastre uma Senha"
                    placeholderTextColor={theme.color.white3}
                />
            </ConteinerLogin>


            <ButtomLogin >
                <TextButton>Cadastrar</TextButton>
            </ButtomLogin>


        </Conteiner>
    )
}
