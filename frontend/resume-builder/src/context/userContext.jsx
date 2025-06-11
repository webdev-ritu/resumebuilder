import React, {createContext, useState, useEffect} from 'react';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS} from '../utils/apiPaths';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        if (user) return;

        const accessToken = localStorage.getItem('Token');
        if (!accessToken) {
            setLoading(false);
            return;
        }
        const fetchUser = async () => {
            try {
                const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
                clearUser();
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);
    const  updateUser = (userData) => {
        setUser(userData);
        localStorage.setItem('Token', userData.token);
        setLoading(false);
    };
    const clearUser = () => {
        setUser(null);
        localStorage.removeItem('Token');
    };


    return(
        <UserContext.Provider value={{ user, loading, updateUser, clearUser}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;