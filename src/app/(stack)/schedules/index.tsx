import React from 'react';
import { Stack } from "expo-router";
import { Body, Conteiner, ConteinerHeader, Search, SearchButtom } from "./style";
import { FlatList } from 'react-native';
import { theme } from "../../../../theme";
import HeaderStack from '../../../components/HeaderStack';
import { MaterialIcons } from "@expo/vector-icons"
import { CardShedules } from '../../../components/CardShedules';



export default function Schedules() {

    const FakeData = [
        {
            id: "1",
            exame: "USG",
            horario: "12:00",
            local: "Salgado",
            status: "agendado"
        },
        {
            id: "2",
            exame: "sangue",
            horario: "14:00",
            local: "caruaru",
            status: "falta"
        },
        {
            id: "3",
            exame: "ferro",
            horario: "17:00",
            local: "santa cruz",
            status: "realizado"
        },
    ]

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

                    headerTitle: () => <HeaderStack href={'../(drawer)/home'} text='Agendamentos' />
                }}
            />
            <ConteinerHeader >
                <Search />
                <SearchButtom>
                    <MaterialIcons name="search" size={35} color={theme.color.blue1} />
                </SearchButtom>
            </ConteinerHeader>
            <Body >
                < FlatList
                    data={FakeData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <CardShedules exame={item.exame} horario={item.horario} local={item.local} status={item.status} />}
                />
            </Body>

        </Conteiner>
    )
}

