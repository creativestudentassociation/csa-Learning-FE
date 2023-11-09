import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRoleAdmin } from "../API/login";

export const useAdmin = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const role = getRoleAdmin(token)
            if (role !== 'mentor' && role !== 'admin') {
                navigate('/home')
            }
        } else {
            navigate('/')
        }
    }, []);
}
