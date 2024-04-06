import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata : Metadata = {
    title:"Next step",
    description:"Next step to join us."
}

export default function Rootlayoutt({children}:Readonly<{children:React.ReactNode}>){
    return (
        <html>
            <body>
                <ChakraProvider>
                    {children}
                </ChakraProvider>
            </body>
        </html>
    )
}