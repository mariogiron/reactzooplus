import React, { useContext, useState } from 'react';

const LoginContext = React.createContext();
const LoginToggleContext = React.createContext();

export function useLoginContext() {
    return useContext(LoginContext);
}

export function useLoginToggleContext() {
    return useContext(LoginToggleContext);
}

export function LoginProvider({ children }) {

    const [user, setUser] = useState(null);

    function cambiaLogin() {
        if (user) {
            setUser(null);
        } else {
            setUser({
                nombre: 'Mario',
                email: 'mario@gmail.com'
            })
        }
    }

    return (
        <LoginContext.Provider value={user}>
            <LoginToggleContext.Provider value={cambiaLogin}>
                {children}
            </LoginToggleContext.Provider>
        </LoginContext.Provider>
    );

}