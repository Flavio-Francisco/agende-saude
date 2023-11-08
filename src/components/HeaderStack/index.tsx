import { TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"
import { Conteiner, ConteinerText, TextHeader } from "./styles";
import { theme } from "../../../theme";
import { Link } from 'expo-router';


interface Props {
    href: any;
    text: string;
}

export default function HeaderStack({ href, text }: Props) {
    return (
        <Conteiner >
            <Link href={href} asChild>
                <ConteinerText>
                    <MaterialIcons name="chevron-left" size={35} color={theme.color.blue1} />
                </ConteinerText>
            </Link>
            <TextHeader>{text}</TextHeader>
        </Conteiner>
    )
}