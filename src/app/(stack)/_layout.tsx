
import { Stack } from "expo-router";
import { theme } from "../../../theme";


export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.color.white1,
                },
                headerTintColor: theme.color.black1,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}

        />
    )

}