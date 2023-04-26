import { PropsWithChildren, createContext, useEffect, useState } from "react";

export type AuthContextType = null | {
    setAuthState: (token: string) => void,
    isAuthenticated: () => boolean,
    logOut: () => void,
    token: string | null,
}

export const AuthContext = createContext<AuthContextType>(null);

export const AuthProvider = (props: PropsWithChildren) => {
    const [auth, setAuth] = useState<string | null>(null);

    useEffect(() => {
        setAuth(localStorage.getItem('token'));
    }, [])

    const setAuthState = (token: string) => {
        localStorage.setItem('token', token);
        setAuth(token);
    }

    const isAuthenticated = () => {
        if (auth !== null) {
            return true;
        }
        return false;
    }

    const logOut = () => {
        if (typeof window !== undefined) {
            localStorage.removeItem('token');
        }
        setAuth(null);
    }

    return (
        <AuthContext.Provider value={{ setAuthState, isAuthenticated, logOut, token: auth }}>
            {props.children}
        </AuthContext.Provider>
    )
}

