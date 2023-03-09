import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserAuth = createContext();

export function UserAuthProvider({ children }) {
    const [user, setUser] = useState({})
    const [userStorageLoading, setUserStorageLoading] = useState(true);

    async function createUser(data) {
        await AsyncStorage.setItem('@savepass:user', JSON.stringify(data))
    }

    useEffect(() => {
        async function loadUserStorageData() {
            const userStorage = await AsyncStorage.getItem('@savepass:user');

            if(userStorage) {
                const userLogged = JSON.parse(userStorage);
                setUser(userLogged);
            }
            setUserStorageLoading(false);
        }

        loadUserStorageData();
    }, [])
    return (
        <UserAuth.Provider
            value={{
                user,
                setUser,
                userStorageLoading,
                setUserStorageLoading,
                createUser
            }}
        >
            { children }
        </UserAuth.Provider>
    )
}