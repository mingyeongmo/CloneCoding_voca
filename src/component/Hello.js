import React, {useState} from 'react';
import UserName from './UserName';
const Hello = ({age}) => {
    
    //let name = "Mike";
    const [name, setName] = useState('Mike');
    const msg = age > 19 ? '성인입니다' : '미성년자입니다.'

    function changeName() {
        const newName = name === 'Mike' ? 'Jane' : 'Mike';
        setName(newName);
    }

    return (
        <div>
            <h2 id="name">{name}({age}) : {msg}</h2>
            <UserName name={name} />
            <button onClick={() =>{
                //{changeName};
                setName(name === "Mike" ? "Jane" : "Mike");
                
            }}
            >Change</button>
        </div>
    );
};

export default Hello;