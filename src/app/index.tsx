
import { Button, Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { Buttom } from "../components/Button";


export default function Home() {

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            //usando css

        }}>
            <Text style={{ fontSize: 44, fontWeight: "700", color: 'black' }}>Home</Text>
            <Link href="../product/5" asChild>
                <Buttom title="Ver Produtos" />
            </Link>

        </View>
    )
}
