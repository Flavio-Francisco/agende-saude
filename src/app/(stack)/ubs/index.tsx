import React, { useState } from 'react';
import { Stack } from "expo-router";
import { Body, Conteiner, ConteinerHeader, Search, SearchButtom } from "./style";
import { FlatList, RefreshControl } from 'react-native';
import { theme } from "../../../../theme";
import HeaderStack from '../../../components/HeaderStack';
import { MaterialIcons } from "@expo/vector-icons"
import { CardShedules3 } from '../../../components/CardShedules3';



export default function Ubs() {
    const [refreshing, setRefreshing] = useState(false);
    const FakeData = [
        {
            id: "1",
            name: "Ubs do Salgado",
            endereço: "rua Justino Francisco da Silva",
            numero: "72",
            barrio: "52",
            fone: "37214545"
        },
        {
            id: "2",
            name: "Ubs do Salgado",
            endereço: "rua Justino Francisco da Silva",
            numero: "72",
            barrio: "52",
            fone: "37214545"
        },
        {
            id: "3",
            name: "Ubs do Salgado",
            endereço: "rua Justino Francisco da Silva",
            numero: "72",
            barrio: "52",
            fone: "37214545"
        },
        {
            id: "4",
            name: "Ubs do Salgado",
            endereço: "rua Justino Francisco da Silva",
            numero: "72",
            barrio: "52",
            fone: "37214545"
        },
        {
            id: "5",
            name: "Ubs do Salgado",
            endereço: "rua Justino Francisco da Silva",
            numero: "72",
            barrio: "52",
            fone: "37214545"
        },
        {
            id: "6",
            name: "Ubs do Salgado",
            endereço: "rua Justino Francisco da Silva",
            numero: "72",
            barrio: "52",
            fone: "37214545"
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

                    headerTitle: () => <HeaderStack href={'../(drawer)/home'} text='UBS' />
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
                    renderItem={({ item }) => <CardShedules3 name={item.name} endereço={item.endereço} numero={item.numero} barrio={item.barrio} fone={item.fone} />}
                />
            </Body>

        </Conteiner>
    )
}

