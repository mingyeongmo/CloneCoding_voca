import React, { useState,useEffect } from 'react';

import Word from './Word';
import { useParams} from "react-router-dom";

// dummy.words

const Day = () => {

    const {day} = useParams();
    //const day = useParams().day;
    //const a = useParams();
    //const day = a.day
   // const wordList = dummy.words.filter(word => word.day === Number(day) )
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3007/words?day=${day}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setWords(data);
        })
    }, [day]);

    return (
        <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
            {words.map(word => (
                <Word word={word} key={word.id} />
            ))}
            </tbody>
        </table>
        </>
    );
};

export default Day;