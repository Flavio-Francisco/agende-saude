import { Conteiner, Name, Text1, TextBold, ViewText } from "./styles";

interface Props {
    name: string;
    horario: string;
    local: string;
    consulta: string;


}


export function CardShedules2(props: Props) {
    return (
        <Conteiner style={{ elevation: 7 }} >
            <ViewText>
                <Name>{props.name}</Name>
            </ViewText>
            <ViewText>
                <TextBold>Horário : </TextBold>
                <Text1>{props.horario}</Text1>
            </ViewText>
            <ViewText>
                <TextBold>Consulta : </TextBold>
                <Text1>{props.consulta}</Text1>
            </ViewText>
            <ViewText>
                <TextBold>Local : </TextBold>
                <Text1>{props.local}</Text1>
            </ViewText>

        </Conteiner>
    )
}