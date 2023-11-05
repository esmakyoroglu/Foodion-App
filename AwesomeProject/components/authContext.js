import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext=createContext();
 
export const AuthProvider=({children})=>{
    const [isLoading, setIsLoading]=useState(false);
    const [userToken, setUserToken]=useState(null);

    const login = () =>{
        setIsLoading(true);
        setUserToken('foodion');
        AsyncStorage.setItem('userToken', 'foodion');
        setIsLoading(false);
    }
    const logout=  () =>{
        setIsLoading(true);
        setUserToken(null);
        setIsLoading(false);
        AsyncStorage.removeItem('userToken');
    }
    const isLoggedIn= async()=>{
        try{
            setIsLoading(true);
            let userToken= await AsyncStorage.getItem('userToken');
            setUserToken(userToken);
            setIsLoading(false);
        }catch(e){
            console.log(`isLogged da hata var ${e}`);
        }
       
    }
    useEffect(()=>{
        isLoggedIn();
    }, []);
    return(
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    );
}
