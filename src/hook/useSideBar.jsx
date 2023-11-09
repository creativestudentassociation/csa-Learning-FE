import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRoleAdmin } from "../API/login";

export const useSideBar = () => {
    const navigate = useNavigate()

    const [rolData, setRolData] = useState('')
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setRolData(getRoleAdmin(token))
        } else {
            navigate('/')
        }
    }, []);

    return rolData
}