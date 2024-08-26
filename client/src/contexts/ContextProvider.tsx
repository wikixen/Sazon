import { createContext, useContext, useState } from "react";

type tokenType = string | null;

const StateContext = createContext({
    user: null as unknown as {},
    token: null as tokenType,
    setUser: (user:Object) => {user}, 
    setToken: (token: tokenType) => {token}
})

export const ContextProvider = ({children}: any) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('AUTHORIZATION'));

    const setToken = (token: tokenType) => {
        _setToken(token);
        if (token) {
            localStorage.setItem('AUTHORIZATION', token);
        } else {
            localStorage.removeItem('AUTHORIZATION');
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)