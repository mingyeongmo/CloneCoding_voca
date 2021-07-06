import dummy from "../db/data.json";
import React from 'react';


const DayList = () => {
    console.log(dummy);
    return (
        <>
            <ul className="list_day">
                {dummy.days.map(day => (
                    <li key={day.id}>
                        Day {day.day}
                    </li>
                ))}
                
            </ul>
        </>
    );
};

export default DayList;