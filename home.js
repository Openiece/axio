import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Card } from './component/card';

export const instance = axios.create({
    baseURL: 'https://dummyapi.io/data/v1',
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "app-id": "636a0100b23c1794f297d097"
    }
})
export const HomeScreen = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData()
        getUsers()
    }, []);
    const getData = async () => {
        try {
            const res = await instance.get('post')
            setData(res.data.data);
        } catch (err) {
            alert('noob :0');
        }
    }
    const getUsers = async () => {
        const users = await instance.get('user');

        console.log(users.data);
    }
    return (
        <div className="App">
            {data.map((cur) => <Card text={cur.text} image={cur.image} tags={cur.tags} firstName={cur.owner.firstName} id={cur.id} />)}
        </div>
    );
}