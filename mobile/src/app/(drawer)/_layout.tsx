
import { Drawer, } from "expo-router/drawer";
import { MaterialIcons } from "@expo/vector-icons"
import { EvilIcons } from '@expo/vector-icons';
import { View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../../theme";
import { DrawerItemList } from "@react-navigation/drawer";
import { ConteinerHeader, ImageHeader, TextHeader } from "./home/styles";




export default function Layout() {
    return (
        <Drawer
            drawerContent={(props) => {
                return (
                    <SafeAreaView >
                        <View style={{
                            width: '100%',
                            height: 200,
                            justifyContent: "center",
                            alignItems: "center",
                            borderBottomWidth: 1,
                            borderBottomColor: theme.color.blue1,
                            paddingBottom: 8,
                        }}>
                            <Image source={require('../../../assets/gestante.jpg')} style={{ width: 100, height: 100, borderRadius: 25 }} />
                            <Text style={{
                                fontSize: 22,
                                fontFamily: theme.font.roboto,
                                marginVertical: 6,
                                color: theme.color.blue1
                            }}>Gestante </Text>
                        </View>
                        <DrawerItemList  {...props} />
                    </SafeAreaView>
                )
            }}
        >
            <Drawer.Screen

                name="home/index"

                options={{
                    drawerLabel: "Home",
                    headerTitle: () => {
                        return (
                            <ConteinerHeader>
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <TextHeader>Bem Vida</TextHeader>
                                    <TextHeader> Mãe</TextHeader>
                                </View>
                                <ImageHeader source={require('../../../assets/gestante.jpg')} />
                            </ConteinerHeader>
                        )
                    },
                    headerStyle: {
                        height: 100,
                        backgroundColor: theme.color.white1,
                    },
                    drawerIcon: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} />
                }}
            />


            <Drawer.Screen
                name="profile"
                options={{
                    drawerLabel: "Pefil",


                    drawerIcon: ({ color, size }) => <EvilIcons name="user" size={size} color={color} />
                }}

            />
            <Drawer.Screen
                name="setting/index"
                options={{
                    drawerLabel: "Configurações",
                    headerTitle: () => {
                        return (
                            <View style={{
                                width: 315,
                                flexDirection: "row",
                                justifyContent: 'space-between',
                                alignItems: "center"

                            }}>
                                <TextHeader style={{ fontSize: 22, marginLeft: 45 }}>Configurações</TextHeader>
                                <ImageHeader
                                    style={{}}
                                    source={require('../../../assets/gestante.jpg')} />
                            </View>
                        )
                    },
                    drawerIcon: ({ color, size }) => <MaterialIcons name="settings" size={size} color={color} />
                }}
            />

        </Drawer>
    )
}

