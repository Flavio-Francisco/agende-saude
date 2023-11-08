import { ScrollViewStyleReset } from "expo-router/html"
import { ReactNode } from "react"

export default function Root({ chidrem }: { chidrem: ReactNode }) {
    return (

        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <ScrollViewStyleReset />
            </head>
            <body>
                <h1>Adicionado no html</h1>
                {chidrem}
            </body>
        </html>
    )
}