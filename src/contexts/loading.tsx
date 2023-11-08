'use client'

import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react";

interface ILoading {
    isLoading: boolean
    setIsLoading: Dispatch<SetStateAction<boolean>>
}

export const LoadingContext = createContext({} as ILoading)

export default function LoadingProvider({ children }: PropsWithChildren) {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}
