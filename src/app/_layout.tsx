import { Tabs, } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { MaterialIcons } from "@expo/vector-icons"


export default function Layout() {
    return (
        <Drawer>
            <Drawer.Screen
                name="index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: "home",
                    title: "pag1",
                }}
            />
            <Drawer.Screen
                name="user/[id]" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: "profile",
                    title: "pag2",
                }}
            />
        </Drawer>
    )
}

