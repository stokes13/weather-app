
import React, { useState } from "react";


const api = {
    key: 'acbee8a73e767560245a24aac53c933b',
    base: 'https://api.openweathermap.org/data/2.5/onecall'
}

export default function Results() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}$units=standard&APPID=${api.key}`).then(res => res.json()).then(result => {
                setWeather(result);
                setQuery('');
                console.log(result)
            });
        }
    }


    const dateBuilder = (d) => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }
    return (
        <div className=" h-full flex flex-col justify-evenly">
            <div className=" date text-4xl p-2 my-8 text-gray-400 font-semi-bold">{dateBuilder(new Date())}</div>
            <div className='flex w-full items-center align-middle'>
                <div className="card mx-3 w-56 h-56 text-gray-600 font-semi-bold flex flex-col justify-evenly">
                    <h2 className='text-3xl font-extrabold'>9am</h2>
                    <h1 className='text-6xl font-light'>90F</h1>
                    <h2 className='font-bold'>Weather Type</h2>
                </div>
                <div className="card mx-3 w-56 h-56 text-gray-600 font-semi-bold flex flex-col justify-evenly">
                    <h2 className='text-3xl font-extrabold'>12p</h2>
                    <h1 className='text-6xl font-light'>90F</h1>
                    <h2 className='font-bold'>Weather Type</h2>
                </div>
                <div className="card mx-3 w-56 h-56 text-gray-600 font-semi-bold flex flex-col justify-evenly">
                    <h2 className='text-3xl font-extrabold'>3pm</h2>
                    <h1 className='text-6xl font-light'>90F</h1>
                    <h2 className='font-bold'>Weather Type</h2>
                </div>
            </div>
        </div>
    )
}
