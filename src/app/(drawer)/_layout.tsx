import { Tabs, } from "expo-router";
import { Drawer, } from "expo-router/drawer";
import { MaterialIcons } from "@expo/vector-icons"
import { View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../../theme";
import { DrawerItemList } from "@react-navigation/drawer";



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
                name="setting"
                options={{
                    headerTitle: '',
                    drawerIcon: ({ color, size }) => <MaterialIcons name="settings" size={size} color={color} />
                }}
            />
            <Drawer.Screen
                name="profile"
                options={{
                    headerTitle: '',
                    drawerIcon: ({ color, size }) => <MaterialIcons name="pages" size={size} color={color} />
                }}
            />
        </Drawer>
    )
}
