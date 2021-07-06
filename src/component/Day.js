import React from 'react';
import dummy from '../db/data.json';
import Word from './Word';
import { useParams } from "react-router-dom";

// dummy.words

const Day = () => {

    const {day} = useParams();
    //const day = useParams().day;
    //const a = useParams();
    //const day = a.day
    const wordList = dummy.words.filter(word => word.day === Number(day) )

    
  
    

    return (
        <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
            {wordList.map(word => (
                <Word word={word} key={word.id} />
            ))}
            </tbody>
            
            
        </table>
        </>
    );
};

export default Day;