import { Conteiner, Name, Text1, TextBold, ViewText } from "./styles";
import { View } from 'react-native';

interface Props {
    name: string;
    endereço: string;
    numero: string;
    barrio: string;
    fone: string;


}


export function CardShedules3(props: Props) {
    return (
        <Conteiner style={{ elevation: 7 }} >
            <ViewText>
                <Name>Nome: </Name>
                <Text1>{props.name}</Text1>
            </ViewText>
            <ViewText>
                <TextBold>endereço : </TextBold>
                <Text1>{props.endereço}</Text1>
            </ViewText>
            <ViewText style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <TextBold >Nº :</TextBold>
                    <Text1>{props.numero}</Text1>
                </View>
                <View style={{ flexDirection: 'row', gap: 10, marginLeft: 15 }}>
                    <TextBold>barrio: </TextBold>
                    <Text1>{props.barrio}</Text1>
                </View>
            </ViewText>
            <ViewText>
                <TextBold>fone : </TextBold>
                <Text1>{props.fone}</Text1>
            </ViewText>

        </Conteiner>
    )
}