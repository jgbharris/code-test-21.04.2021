import React, { useState, useEffect } from "react";
import Address from './Address.js'
import Country from './Country.js'
import axios from 'axios'

function MainPage() {

    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://ipapi.co/json/',
            );
            setData(result.data);
        };
        fetchData();
    }, []);

    console.log("data", data)

    return (
        <div className="main-page">
            <div className="info-container">
                <Address
                    ip={data.ip}>
                </Address>
                <Country
                    country={data.country}>
                </Country>
            </div>
        </div>
    );
}

export default MainPage