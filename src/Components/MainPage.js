import React, { useState, useEffect } from "react";
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
        <div>
            <div>{data.ip}</div>
            <div>{data.country}</div>
        </div>
    );
}

export default MainPage