import { Conteiner, Text1, TextBold, ViewText } from "./styles";

interface Props {
    exame: string;
    horario: string;
    local: string;
    status: string;

}


export function CardShedules(props: Props) {
    return (
        <Conteiner >
            <ViewText>
                <TextBold>Exame: </TextBold>
                <Text1>{props.exame}</Text1>
            </ViewText>
            <ViewText>
                <TextBold>Horário : </TextBold>
                <Text1>{props.horario}</Text1>
            </ViewText>
            <ViewText>
                <TextBold>Local : </TextBold>
                <Text1>{props.local}</Text1>
            </ViewText>
            <ViewText>
                <TextBold>Status : </TextBold>
                <Text1>{props.exame}</Text1>
            </ViewText>

        </Conteiner>
    )
}