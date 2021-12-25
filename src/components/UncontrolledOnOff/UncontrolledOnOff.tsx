import React, {useState} from "react";

export function UncontrolledOnOff() {

    let [on, setOn] = useState(false);

    const onStyle = {
        width: '60px',
        height: '20px',
        border: '2px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white',
    }
    const offStyle = {
        width: '60px',
        height: '20px',
        border: '2px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: !on ? 'red' : 'white',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '7px',
        border: '2px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'red',
    }

    return (
        <div>
         <div style={onStyle} onClick={ () => { setOn(true) } }>On</div>
         <div style={offStyle} onClick={ () => { setOn(false) } }>Off</div>
         <div style={indicatorStyle}></div>
        </div>
    );
}