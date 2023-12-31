import { Link } from "expo-router";
import { Body, ButtomBody, Conteiner, Header, Imagebody, TextButton, TextHeaderHome } from "./styles";





export default function home() {
    return (
        <Conteiner >
            < Header>
                <TextHeaderHome>Escolha um Serviço</TextHeaderHome>
            </Header>
            <Body style={{ elevation: 10 }}>
                <Link href={'/(stack)/exams'} asChild>
                    < ButtomBody style={{ elevation: 10 }}>
                        <Imagebody source={require('../../../../assets/icone-exames.webp')} />
                        <TextButton>Exames</TextButton>
                    </ButtomBody>
                </Link>

                <Link href={'/(stack)/schedules'} asChild>
                    < ButtomBody style={{ elevation: 10 }}>
                        <Imagebody source={require('../../../../assets/icone-consulta.jpg')} />
                        <TextButton>Consultas</TextButton>
                    </ButtomBody>
                </Link>

                <Link href={'/(stack)/ubs'} asChild>
                    < ButtomBody style={{ elevation: 10 }}>
                        <Imagebody source={require('../../../../assets/icone-unidade-de-saude.png')} />
                        <TextButton>Unidade de saúde</TextButton>
                    </ButtomBody>
                </Link>

                <Link href={'/(stack)/evolution'} asChild>
                    < ButtomBody style={{ elevation: 10 }}>
                        <Imagebody source={require('../../../../assets/icone-gestantes.jpg')} />
                        <TextButton>Evolução</TextButton>
                    </ButtomBody>
                </Link>
            </Body>
        </Conteiner>

    );
}