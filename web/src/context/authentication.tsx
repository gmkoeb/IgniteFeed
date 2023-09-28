import { ReactNode, createContext, useState } from "react";

type PropTypes = {
    children: ReactNode
}

export const AuthContext = createContext({
    token: undefined, 
    setToken: (_param: React.SetStateAction<undefined>) => {},
    logout: () => {},
    isAuthenticated: (): boolean => false,
});

export default function AuthProvider({children}: PropTypes){
    const [auth, setAuth] = useState(undefined)

    const checkAuthentication = () => {
        return auth != undefined
    }
    
    const logout = () => {
        setAuth(undefined)
    }
    return(
        <AuthContext.Provider value={{token: auth, setToken: setAuth, logout: logout, isAuthenticated: checkAuthentication}}>
            {children}
        </AuthContext.Provider>
    )
}