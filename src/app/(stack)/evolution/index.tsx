import { Stack } from "expo-router";
import HeaderStack from '../../../components/HeaderStack';
import { Body, Conteiner, Header, ImageEvolition, TextEvolution } from "./styles";
import { TEXT, theme } from "../../../../theme";

export default function Evolution() {
    return (
        <Conteiner>
            <Stack.Screen

                options={{

                    headerStyle: { backgroundColor: theme.color.white2 },
                    headerTintColor: theme.color.blue1,
                    headerTitleAlign: "left",
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                    headerTitle: () => <HeaderStack href={'../(drawer)/home'} text='Evolução' />
                }}
            />
            <Header>
                <ImageEvolition source={require('../../../../assets/14semanas.jpg')} />
            </Header>
            < Body>
                <TextEvolution >
                    {TEXT}
                </TextEvolution>
            </Body>
        </Conteiner>
    )
}