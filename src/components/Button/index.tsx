import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { forwardRef } from "react";
import { Text } from 'react-native'
import { theme } from "../../../theme";


type Props = TouchableOpacityProps & {
    title: string
}

export const Buttom = forwardRef<TouchableOpacity, Props>(({ title, ...rest }, ref) => {
    return (
        <TouchableOpacity
            ref={ref}
            {...rest}
            style={{ width: 200, padding: 16, backgroundColor: theme.color.white1, alignItems: "center", borderRadius: 7 }}>
            <Text style={{ fontSize: 16, color: '#ffff', fontWeight: '700' }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
})