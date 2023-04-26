import { PropsWithChildren, createContext, useEffect, useState } from "react";

export type AuthContextType = null | {
    setAuthState: (token: string) => void,
    token: string | null,
}

export const AuthContext = createContext<AuthContextType>(null);

export const AuthProvider = (props: PropsWithChildren) => {
    const [auth, setAuth] = useState<string | null>(null);

    useEffect(() => {
        setAuth(localStorage.getItem('token'));
    },[])

    const setAuthState = (token: string) => {
        localStorage.setItem('token', token);
        setAuth(token);
    }

    return (
        <AuthContext.Provider value={{setAuthState, token: auth}}>
            {props.children}
        </AuthContext.Provider>
    )
}

