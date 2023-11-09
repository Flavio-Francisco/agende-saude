import React, { useState } from 'react';
import { Stack } from "expo-router";
import { Body, Conteiner, ConteinerHeader, Search, SearchButtom } from "./style";
import { FlatList, RefreshControl } from 'react-native';
import { theme } from "../../../../theme";
import HeaderStack from '../../../components/HeaderStack';
import { MaterialIcons } from "@expo/vector-icons"
import { CardShedules2 } from '../../../components/CardShedules2';



export default function Schedules() {
    const [refreshing, setRefreshing] = useState(false);
    const FakeData = [
        {
            id: "1",
            name: "Dr Meire Lúcia",
            horario: "12:00",
            local: "Salgado",
            consulta: "agendado"
        },
        {
            id: "2",
            name: "Dr Meire Lúcia",
            horario: "14:00",
            local: "caruaru",
            consulta: "agendado"
        },
        {
            id: "3",
            name: "Dr Meire Lúcia",
            horario: "17:00",
            local: "santa cruz",
            consulta: "agendado"
        },
        {
            id: "4",
            name: "Dr Meire Lúcia",
            horario: "12:00",
            local: "Salgado",
            consulta: "agendado"
        },
        {
            id: "5",
            name: "Dr Meire Lúcia",
            horario: "14:00",
            local: "caruaru",
            consulta: "agendado"
        },
        {
            id: "6",
            name: "Dr Meire Lúcia",
            horario: "17:00",
            local: "santa cruz",
            consulta: "agendado"
        },
    ]
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    };

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
                    refreshControl={
                        <RefreshControl

                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    data={FakeData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <CardShedules2 name={item.name} horario={item.horario} consulta={item.consulta} local={item.local} />}
                />
            </Body>

        </Conteiner>
    )
}

