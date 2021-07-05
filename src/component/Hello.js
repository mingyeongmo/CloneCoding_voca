import React from 'react';

function showName() {
    console.log("Mike");
}
function showAge(age) {
    console.log(age);
}
function showText(txt) {
    console.log(txt);
}

const Hello = () => {
    return (
        <div>
            <button onClick={showName}>Show name</button>
            <button onClick={() => {
                showAge(30);
            }}>Show age</button>
            <input type="text" onChange={e => {
                const txt = e.target.value;
                showText(txt);
            }} />
            {/* target= input태그 value는 작성한 값 */}
        </div>
    );
};

export default Hello;