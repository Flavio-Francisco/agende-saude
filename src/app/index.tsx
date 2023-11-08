
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


export default function Home() {

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
                    placeholder="Digite Sua Senha"
                    placeholderTextColor={theme.color.white3}
                />
            </ConteinerLogin>
            <Link href="../setting" asChild>
                <ConteinerText>
                    <TextRight>Esqueci minha senha</TextRight>
                </ConteinerText>
            </Link>


            <Link href="../home" asChild>
                <ButtomLogin >
                    <TextButton>Entrar</TextButton>
                </ButtomLogin>
            </Link>
            <Link href="../setting" asChild>
                <Footer>
                    <TextFooter>Quero me cadastrar</TextFooter>
                </Footer>
            </Link>
        </Conteiner>
    )
}
