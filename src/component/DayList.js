
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const DayList = () => {
    const [days, setDays] = useState([]);
    
    
    useEffect(() => {
        fetch("http://localhost:3007/days")
        .then(res => { // response
            return res.json()
        })
        .then(data => {
            setDays(data);
        });
    }, []); // 의존성 배열

    return (
        <>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>
                        Day {day.day}
                        </Link>
                    </li>
                ))}
                
            </ul>
        </>
    );
};

export default DayList;